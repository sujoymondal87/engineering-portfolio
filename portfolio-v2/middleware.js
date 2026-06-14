// v2 of the middleware file
const SUPABASE_URL = globalThis.SUPABASE_URL ?? process.env.SUPABASE_URL
const SUPABASE_ANON_KEY = globalThis.SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY

export const config = {
    matcher: '/case-studies/:slug*'
}

export default async function middleware(request) {
    const url = new URL(request.url)
    const slug = url.pathname.replace('/case-studies/', '')

    if (!slug) return new Response(null, { status: 200 })

    try {
        const res = await fetch(
            `${SUPABASE_URL}/rest/v1/posts?slug=eq.${slug}&select=title,content,imgurl&limit=1`,
            {
                headers: {
                    apikey: SUPABASE_ANON_KEY,
                    Authorization: `Bearer ${SUPABASE_ANON_KEY}`
                }
            }
        )
        const posts = await res.json()
        const post = posts?.[0]

        if (!post) {
            // fall through to SPA
            const htmlRes = await fetch(new URL('/', request.url).toString())
            const html = await htmlRes.text()
            return new Response(html, { headers: { 'content-type': 'text/html' } })
        }

        const title = post.title
        const description = post.content?.slice(0, 155) ?? ''
        const image = post.imgurl ?? ''
        const pageUrl = `https://sujoymondal-tech.vercel.app${url.pathname}`

        const htmlRes = await fetch(new URL('/', request.url).toString())
        let html = await htmlRes.text()
        
        html = html
        .replace(/<meta property="og:title"[^>]*>/i, `<meta property="og:title" content="${title}" />`)
        .replace(/<meta property="og:description"[^>]*>/i, `<meta property="og:description" content="${description}" />`)
        .replace(/<meta property="og:image"[^>]*>/i, `<meta property="og:image" content="${image}" />`)
        .replace(/<meta property="og:url"[^>]*>/i, `<meta property="og:url" content="${pageUrl}" />`)
        .replace(/<meta property="og:type"[^>]*>/i, `<meta property="og:type" content="article" />`)
        .replace(/<meta name="twitter:title"[^>]*>/i, `<meta name="twitter:title" content="${title}" />`)
        .replace(/<meta name="twitter:description"[^>]*>/i, `<meta name="twitter:description" content="${description}" />`)
        .replace(/<meta name="twitter:image"[^>]*>/i, `<meta name="twitter:image" content="${image}" />`)

        return new Response(html, {
            headers: { 'content-type': 'text/html' }
        })
    } catch (e) {
        const htmlRes = await fetch(new URL('/', request.url).toString())
        const html = await htmlRes.text()
        return new Response(html, { headers: { 'content-type': 'text/html' } })
    }
}
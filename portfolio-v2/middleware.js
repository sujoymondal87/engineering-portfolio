import { next } from '@vercel/edge'

const SUPABASE_URL = process.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY

export const config = {
    matcher: '/case-studies/:slug*'
}

export default async function middleware(request) {
    const url = new URL(request.url)
    const slug = url.pathname.replace('/case-studies/', '')

    if (!slug) return next()

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
        if (!post) return next()

        const title = post.title
        const description = post.content?.slice(0, 155) ?? ''
        const image = post.imgurl ?? ''
        const pageUrl = `https://sujoymondal-tech.vercel.app${url.pathname}`

        // fetch the base index.html
        const htmlRes = await fetch(new URL('/', request.url).toString())
        let html = await htmlRes.text()

        // inject OG tags into <head>
        const ogTags = `
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:url" content="${pageUrl}" />
    <meta property="og:type" content="article" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${image}" />
`
        html = html.replace('</head>', `${ogTags}</head>`)

        return new Response(html, {
            headers: { 'content-type': 'text/html' }
        })
    } catch (e) {
        return next()
    }
}
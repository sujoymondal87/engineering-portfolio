import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, url }) {
  const baseTitle = 'Sujoy Mondal — Platform Engineer'
  const baseDescription = 'Co-Founder & CTO with 10+ years building production systems. Offline-first runtime, AI orchestration, browser AR, real-time sync.'
  const baseUrl = 'https://sujoymondal-tech.vercel.app'

  return (
    <Helmet>
      <title>{title ? `${title} | Sujoy Mondal` : baseTitle}</title>
      <meta name="description" content={description || baseDescription} />
      <meta name="author" content="Sujoy Mondal" />
      
      {/* Open Graph — for LinkedIn, Facebook previews */}
      <meta property="og:title" content={title || baseTitle} />
      <meta property="og:description" content={description || baseDescription} />
      <meta property="og:url" content={url ? `${baseUrl}${url}` : baseUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${baseUrl}/sujoy.jpg`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || baseTitle} />
      <meta name="twitter:description" content={description || baseDescription} />
      <meta name="twitter:image" content={`${baseUrl}/sujoy.jpg`} />

      {/* Canonical URL */}
      <link rel="canonical" href={url ? `${baseUrl}${url}` : baseUrl} />
    </Helmet>
  )
}
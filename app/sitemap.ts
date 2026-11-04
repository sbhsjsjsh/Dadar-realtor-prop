import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.APP_URL || 'https://dadarrealtor.com'
  
  // List of all pages in the application
  // In a more complex app, this could fetch from a CMS or database
  const routes = [
    '',
    '/large-land-investment-property-in-mumbai-suburbs',
    '/open-land-for-sale-in-dadar-east-mumbai',
    '/property-plot-for-sale-in-dadar-west-near-shivaji-park',
    '/why-buy-in-dadar-mumbai',
    '/land-for-apartment-construction-in-dahisar',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}

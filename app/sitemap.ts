import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://transparentgovfoundation.org',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://transparentgovfoundation.org/who-we-are',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://transparentgovfoundation.org/projects-program',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://transparentgovfoundation.org/contact-us',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://transparentgovfoundation.org/memberships',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.5,
    }
  ]
}
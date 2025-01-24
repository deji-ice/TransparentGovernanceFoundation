import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.transparencegovfoundation.org',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.transparencegovfoundation.org/who-we-are',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.transparencegovfoundation.org/projects-program',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://www.transparencegovfoundation.org/contact-us',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://www.transparencegovfoundation.org/memberships',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.5,
    }
  ]
}
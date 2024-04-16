import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function fetchBlogs() {
  const entries = await client.getEntries({
    content_type: 'blogPost', // Replace with your Content Model ID
    select: 'fields.title,fields.body,fields.featuredImage,fields.slug',
  })

  return entries.items
}
import { pages } from 'next/dist/build/templates/app-page'
import { GlobalConfig } from 'payload'

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'links',
      type: 'array',
      maxRows: 5,
      fields: [
        {
          name: 'page',
          type: 'relationship',
          relationTo: 'posts',
        },
        {
          name: 'url',
          type: 'text',
          hooks: {
            beforeValidate: [
              async ({ req, siblingData }) => {
                // siblingData contains the other fields in this array item (e.g., page)
                const pageId = siblingData?.page

                if (!pageId) {
                  return ''
                }

                // If it's already populated (full object), use it directly
                if (typeof pageId === 'object' && pageId?.slug) {
                  return `/posts/${pageId.slug}`
                }

                // Otherwise fetch the post by ID
                const post = await req.payload.findByID({
                  collection: 'posts',
                  id: pageId,
                  depth: 0,
                })

                if (post?.slug) {
                  return `/posts/${post.slug}`
                }

                return ''
              },
            ],
          },
        },
      ],
    },
  ],
}

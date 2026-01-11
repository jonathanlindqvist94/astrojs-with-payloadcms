import { Block } from 'payload'

export const ContentWithMedia: Block = {
  slug: 'contentWithMedia',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'imageArray',
      label: 'Images',
      type: 'array',
      maxRows: 3,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}

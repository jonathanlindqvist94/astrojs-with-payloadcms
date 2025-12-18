import { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    {
      name: 'leftColumn',
      label: 'Left Column',
      type: 'group',
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'content',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'middleColumn',
      label: 'Middle Column',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'content',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'rightColumn',
      label: 'Right Column',
      type: 'group',
      fields: [
        {
          name: 'title',
          label: 'Social Links',
          type: 'text',
        },
        {
          name: 'linksArray',
          type: 'array',
          maxRows: 4,
          fields: [
            {
              name: 'label',
              type: 'text',
            },
            {
              name: 'url',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}

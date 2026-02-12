import { Block } from 'payload'

export const CustomerFeedback: Block = {
  slug: 'customerFeedback',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'ingress',
      type: 'text',
      required: true,
    },
    {
      name: 'customerReviews',
      type: 'array',
      maxRows: 4,
      fields: [
        {
          name: 'customerName',
          type: 'text',
          required: true,
        },
        {
          name: 'customerContent',
          type: 'richText',
          required: true,
        },
        {
          name: 'customerImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'highlightReview',
          type: 'checkbox',
          required: true,
          defaultValue: false,
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'select',
      options: [
        { label: 'Green', value: 'bg-green-200' },
        { label: 'Blue', value: 'bg-blue-200' },
        { label: 'Red', value: 'bg-red-200' },
      ],
    },
  ],
}

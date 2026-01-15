import { Block } from 'payload'

export const ShortInfo: Block = {
  slug: 'shortInfo',
  fields: [
    {
      name: 'items',
      label: 'här skapar du upp dina shortinfo kort',
      type: 'array',
      maxRows: 6,
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
          name: 'icon',
          label: 'Här väljer du vilken ikon du vill ska visas ovanför titel och description',
          type: 'select',
          options: [
            { label: 'terminal', value: 'terminal' },
            { label: 'bicycle', value: 'biking' },
          ],
        },
      ],
    },
  ],
}

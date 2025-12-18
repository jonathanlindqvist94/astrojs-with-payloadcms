import { Block } from 'payload'

export const defaultHero: Block = {
  slug: 'defaultHero',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'content',
      type: 'textarea',
    },
    {
      name: 'image position',
      type: 'radio',
      options: ['Left', 'Right'],
    },
  ],
}

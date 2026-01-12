import { Block } from 'payload'

export const MySkills: Block = {
  slug: 'mySkills',
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
      name: 'backgroundColor',
      type: 'select',
      options: [
        { label: 'Black', value: 'bg-black' },
        { label: 'Red', value: 'bg-red-400' },
        { label: 'Green', value: 'bg-green-400' },
        { label: 'Blue', value: 'bg-blue-400' },
      ],
    },
    {
      name: 'skills',
      type: 'array',
      maxRows: 10,
      fields: [
        {
          name: 'skillTitle',
          type: 'text',
        },
        {
          name: 'skillDescription',
          type: 'textarea',
        },
        {
          name: 'skillImage',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}

import { link } from '../../fields/link'
import { Block } from 'payload'

export const LeftRight: Block = {
  slug: 'leftRight',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },

    link({
      appearances: false,
    }),

    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'imagePosition',
      label: 'Select image position',
      type: 'select',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'radio',
      options: [
        { label: 'Red', value: 'bg-red-400' },
        { label: 'Blue', value: 'bg-blue-400' },
        { label: 'Green', value: 'bg-green-400' },
      ],
    },
  ],
}

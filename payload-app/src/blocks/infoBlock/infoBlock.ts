import { Block } from 'payload'

export const InfoBlock: Block = {
  slug: 'infoBlock',
  interfaceName: 'Info Block',
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
      name: 'innerContent',
      type: 'array',
      maxRows: 4,
      fields: [
        {
          name: 'innerHeading',
          type: 'text',
        },
        {
          name: 'innerDescription',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}

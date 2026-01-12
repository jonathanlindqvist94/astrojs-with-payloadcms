import { link } from '../../fields/link'
import { Block } from 'payloadcms'

export const AboutMeCTA: Block = {
  slug: 'aboutMeCTA',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    link({ appearances: false }),
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}

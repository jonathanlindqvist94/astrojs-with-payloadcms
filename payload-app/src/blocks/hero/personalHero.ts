import { Block } from 'payload'
import { link } from '../../fields/link'

export const PersonalHero: Block = {
  slug: 'personalHero',
  fields: [
    {
      name: 'role',
      label: 'Här skriver du in din jobbroll',
      type: 'text',
    },
    {
      name: 'name',
      label: 'Här skriver du in ditt namn för-/efternamn',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Här skriver du in en kort beskrivning av dig själv',
      type: 'textarea',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'group',
      label: 'Övrig info',
      type: 'group',
      maxRows: 3,
      fields: [
        {
          name: 'bornIn',
          label: 'Här skriver du in din födelsestad',
          type: 'text',
        },
        {
          name: 'experience',
          label: 'Här skriver du in ditt arbetslivserfarenhet',
          type: 'text',
        },
        {
          name: 'bornDate',
          type: 'date',
        },
        {
          name: 'socialLinks',
          type: 'array',
          fields: [
            link({
              appearances: false,
            }),
          ],
        },
      ],
    },
  ],
}

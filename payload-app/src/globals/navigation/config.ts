import { GlobalConfig } from 'payload'
import { link } from '../../fields/link'

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        {
          name: 'displayAs',
          label: 'Välj om du vill att menyn ska visas som en hamburgarmenu hela tiden eller inte.',
          type: 'radio',
          options: [
            { label: 'Hamburgarmeny', value: 'hamburger' },
            { label: 'Vanlig meny', value: 'normal' },
          ],
        },
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
      },
    },
  ],
}

import { link } from '../../fields/link'
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
          name: 'navItemsMiddleCol',
          type: 'array',
          fields: [
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
    },
    {
      name: 'rightColumn',
      label: 'Right Column',
      type: 'group',
      fields: [
        {
          name: 'title',
          label: 'Social Links Title',
          type: 'text',
        },
        {
          name: 'navItemsRightCol',
          type: 'array',
          fields: [
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
    },
  ],
}

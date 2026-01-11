import { Accordion } from '../../blocks/accordion/accordion'
import { DefaultHero } from '../../blocks/hero/defaultHero'
import { PersonalHero } from '../../blocks/hero/personalHero'
import { InfoBlock } from '../../blocks/infoBlock/infoBlock'
import { GlobalConfig } from 'payload'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'group',
      type: 'group',
      label: 'Välj vilka block/blocks du vill använda',
      fields: [
        {
          type: 'tabs',
          tabs: [
            {
              label: 'Hero Blocks',
              admin: {
                description: 'Här väljer du vilket hero block du vill använda på denna post.',
              },
              fields: [
                {
                  name: 'heroBlocks',
                  label: 'Hero blocks',
                  type: 'blocks',
                  maxRows: 1,
                  blocks: [DefaultHero, PersonalHero],
                },
              ],
            },
            {
              name: 'contentBlocks',
              label: 'Content Blocks',
              admin: {
                description: 'Här väljer du vilka content block du vill använda på denna post.',
              },
              fields: [
                {
                  name: 'blocks',
                  label: 'Content blocks',
                  type: 'blocks',
                  blocks: [Accordion, InfoBlock],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

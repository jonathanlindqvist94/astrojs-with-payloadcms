import { MySkills } from '../../blocks/mySkills/mySkills'
import { AboutMeCTA } from '../../blocks/aboutMeCTA/aboutMeCTA'
import { Accordion } from '../../blocks/accordion/accordion'
import { ContentWithMedia } from '../../blocks/contentWithMedia/contentWithMedia'
import { DefaultHero } from '../../blocks/hero/defaultHero'
import { PersonalHero } from '../../blocks/hero/personalHero'
import { InfoBlock } from '../../blocks/infoBlock/infoBlock'
import { LeftRight } from '../../blocks/leftRight/leftRight'
import { ShortInfo } from '../../blocks/shortInfo/shortInfo'
import { GlobalConfig } from 'payload'

export const Blocks: GlobalConfig = {
  slug: 'blocks',
  admin: {
    description:
      'En samlingssida där alla block är tillgängliga och används för att visa blocken på en samlings sida.',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
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
                  blocks: [
                    Accordion,
                    InfoBlock,
                    ContentWithMedia,
                    LeftRight,
                    AboutMeCTA,
                    MySkills,
                    ShortInfo,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

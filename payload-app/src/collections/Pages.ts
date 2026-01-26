import { AboutMeCTA } from '../blocks/aboutMeCTA/aboutMeCTA'
import { MySkills } from '../blocks/mySkills/mySkills'
import { ShortInfo } from '../blocks/shortInfo/shortInfo'
import { Accordion } from '../blocks/accordion/accordion'
import { ContentWithMedia } from '../blocks/contentWithMedia/contentWithMedia'
import { DefaultHero } from '../blocks/hero/defaultHero'
import { PersonalHero } from '../blocks/hero/personalHero'
import { InfoBlock } from '../blocks/infoBlock/infoBlock'
import { LeftRight } from '../blocks/leftRight/leftRight'
import { Faq } from '../blocks/faq/faq'
import {
  lexicalEditor,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  HeadingFeature,
  FixedToolbarFeature,
} from '@payloadcms/richtext-lexical'
import { slugField } from 'payload'
import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'createdAt', 'updatedAt', 'slug'],
    group: 'Content',
    description: 'Pages collection',
  },
  defaultPopulate: {
    slug: true,
    title: true,
    group: true, // Add this
  },
  fields: [
    slugField({
      fieldToUse: 'title',
    }),
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          BoldFeature(),
          ItalicFeature(),
          UnderlineFeature(),
          HeadingFeature({
            enabledHeadingSizes: ['h2', 'h3'],
          }),
          FixedToolbarFeature(),
        ],
      }),
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
                    Faq,
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

import { CollectionConfig } from 'payload'
import { slugField } from 'payload'
import {
  lexicalEditor,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  HeadingFeature,
  FixedToolbarFeature,
} from '@payloadcms/richtext-lexical'

import { InfoBlock } from '../blocks/infoBlock/infoBlock'
import { Accordion } from '../blocks/accordion/accordion'
import { DefaultHero } from '../blocks/hero/defaultHero'
import { PersonalHero } from '../blocks/hero/personalHero'
import { ContentWithMedia } from '../blocks/contentWithMedia/contentWithMedia'
import { LeftRight } from '../blocks/leftRight/leftRight'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'createdAt', 'updatedAt', 'slug'],
    group: 'Content',
    description: 'Posts collection',
  },
  defaultPopulate: {
    slug: true,
    breadcrumbs: true,
    title: true,
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
      name: 'ingress',
      type: 'richText',
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
      name: 'tags',
      type: 'array',
      maxRows: 5,
      fields: [
        {
          name: 'tags',
          type: 'select',
          required: true,
          options: [
            { label: 'Technology', value: 'technology' },
            { label: 'Science', value: 'science' },
            { label: 'Art', value: 'art' },
            { label: 'Culture', value: 'culture' },
            { label: 'Sports', value: 'sports' },
          ],
        },
      ],
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
                  blocks: [Accordion, InfoBlock, ContentWithMedia, LeftRight],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

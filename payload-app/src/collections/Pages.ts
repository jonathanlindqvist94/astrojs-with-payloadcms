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
  ],
}

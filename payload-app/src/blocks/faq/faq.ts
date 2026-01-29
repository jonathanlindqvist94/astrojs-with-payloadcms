import { Block } from 'payload'
import {
  BoldFeature,
  FixedToolbarFeature,
  HeadingFeature,
  ItalicFeature,
  lexicalEditor,
  LinkFeature,
  UnderlineFeature,
} from '@payloadcms/richtext-lexical'

export const Faq: Block = {
  slug: 'faq',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'questions',
      type: 'array',
      maxRows: 10,
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [
              BoldFeature(),
              ItalicFeature(),
              UnderlineFeature(),
              LinkFeature(),
              HeadingFeature({
                enabledHeadingSizes: ['h2', 'h3'],
              }),
              FixedToolbarFeature(),
            ],
          }),
          required: true,
        },
      ],
    },
  ],
}

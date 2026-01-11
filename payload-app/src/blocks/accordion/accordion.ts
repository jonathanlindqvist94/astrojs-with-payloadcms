import { Block } from 'payload'
import {
  BoldFeature,
  FixedToolbarFeature,
  HeadingFeature,
  ItalicFeature,
  lexicalEditor,
  UnderlineFeature,
} from '@payloadcms/richtext-lexical'

export const Accordion: Block = {
  slug: 'accordion',
  interfaceName: 'Accordion',
  imageURL: '/api/previewBlockImages/file/accordionDesign.webp',
  fields: [
    {
      name: 'items',
      type: 'array',
      maxRows: 4,
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'content',
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
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'imagePosition',
      type: 'radio',
      options: ['Left', 'Right'],
    },
    {
      name: 'openAtOnce',
      label: 'How many to be open at once',
      type: 'radio',
      options: ['One', 'Multiple'],
      admin: {
        description:
          'Om du kryssar för denna, så kan bara en accordion vara öppen samtidigt. Så öppnar man en och sedan en ny så kommer den första att stängas.',
      },
    },
  ],
}

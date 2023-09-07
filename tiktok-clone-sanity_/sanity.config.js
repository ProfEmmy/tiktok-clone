import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Tik-Tok clone',

  projectId: 'ute8tn1w',
  dataset: 'product',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

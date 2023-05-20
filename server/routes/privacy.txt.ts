// import fs from 'node:fs'
// import { sendStream } from 'h3'
import { defineEventHandler, appendHeader } from 'h3'
// import { serverQueryContent } from '#content/server'
// import { useRuntimeConfig } from '#imports'

const textcontent = 'Testing new privacy-file' +
'not finished yet - wait a day or two :)'

export default defineEventHandler((event) => { 

  appendHeader(event, 'Content-Type', 'text/plain')

  return textcontent
})
// https://nuxt.com/docs/guide/directory-structure/server#sending-streams-experimental

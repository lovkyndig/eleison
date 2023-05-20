import fs from 'node:fs'
import { sendStream } from 'h3'
// import { defineEventHandler, appendHeader } from 'h3'
// import { serverQueryContent } from '#content/server'
// import { useRuntimeConfig } from '#imports'
export default defineEventHandler((event) => {
  // https://nuxt.com/docs/guide/directory-structure/server#sending-streams-experimental
  // return sendStream(event, fs.createReadStream('/test3.txt'))
  appendHeader(event, 'Content-Type', 'text/plain')
  return sendStream(event, fs.createReadStream(''))
})
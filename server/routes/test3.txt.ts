import fs from 'node:fs'
import { sendStream } from 'h3'
export default defineEventHandler((event) => {
  // https://nuxt.com/docs/guide/directory-structure/server#sending-streams-experimental
  // return sendStream(event, fs.createReadStream('/test3.txt'))
  appendHeader(event, 'Content-Type', 'text/plain')
  return sendStream(event, fs.createReadStream(''))
})
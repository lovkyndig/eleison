import fs from 'node:fs'
import { sendStream } from 'h3'
export default defineEventHandler(async (event) => {
  // https://nuxt.com/docs/guide/directory-structure/server#sending-streams-experimental
  return sendStream(event, fs.createReadStream('/test3.txt'))
})
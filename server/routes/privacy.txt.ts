import fs from 'node:fs'
import { sendStream } from 'h3'
import { defineEventHandler, appendHeader } from 'h3'
// import { serverQueryContent } from '#content/server'
// import { useRuntimeConfig } from '#imports'

// const path_to_file = `asdf\nasdfas\ `

export default defineEventHandler(async(event) => { 

  // appendHeader(event, 'Content-Type', 'text/plain')

  // return sendStream(event, fs.createReadStream('/'))
  return 'testing testing okay'
})

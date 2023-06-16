import { useStorage, useSessionStorage } from '@vueuse/core'

export const getCookieOptional = () => useState('cookieOptional', () => {
  const state = useStorage('eleisons-bibel', localStorage)
  if (state.value.cookie === 'ok') return true
  else return false
})

/*
Ref:
https://vueuse.org/core/useStorage/
https://nitro.unjs.io/guide/storage
https://stackoverflow.com/questions/62789608/how-do-i-access-localstorage-in-store-of-nuxtjs
*/
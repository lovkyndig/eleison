import { useGtm as useVueGTM } from '@gtm-support/vue-gtm'

export const useGTM = () => {
  const gtm = useVueGTM()
  return gtm
}
/*
export default function () {
  return useState('foo', () => 'bar')
}

export const useHello = () => {
  const nuxtApp = useNuxtApp()
  return nuxtApp.$hello
}
*/
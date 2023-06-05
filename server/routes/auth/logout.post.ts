export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  deleteCookie(event, config.auth.cookieName, {
    httpOnly: true,
    path: '/',
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
  })

  return {
    user: null,
  }
})

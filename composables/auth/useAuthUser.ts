import type { UserWithoutPassword } from '~/types/types'

export const useAuthUser = () => {
  return useState<UserWithoutPassword | null>('user', () => null)
}

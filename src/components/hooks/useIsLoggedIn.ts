import { useActiveUser } from '@/components/hooks/useActiveUser'

export function useIsLoggedIn() {
  const user = useActiveUser()

  return !!user
}

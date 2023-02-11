import { useSession } from 'next-auth/react'

export function useActiveUser() {
  const { data: session } = useSession()

  return session?.user
}

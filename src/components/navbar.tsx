import Button from '@/components/button'
import { useActiveUser } from '@/components/hooks/useActiveUser'
import { useIsLoggedIn } from '@/components/hooks/useIsLoggedIn'
import CloudIcon from '@/components/icons/cloud.icon'
import clsx from 'clsx'
import { signOut } from 'next-auth/react'

const Navbar = () => {
  const user = useActiveUser()
  const isLoggedIn = useIsLoggedIn()

  return (
    <nav className="w-full top-0 left-0 px-2 md:px-4 flex justify-between items-center border-b-4 border-gray-400">
      <div className="flex items-center">
        <CloudIcon className="h-20" />
        <p
          className={clsx('text-xl font-bold text-gray-600', {
            'hidden md:block': isLoggedIn === true,
          })}
        >
          Weather Forecast
        </p>
      </div>
      {isLoggedIn && (
        <Button variant="secondary" onClick={() => signOut()}>
          Logout
        </Button>
      )}
    </nav>
  )
}

export default Navbar

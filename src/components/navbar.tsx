import Button from '@/components/button'
import CloudIcon from '@/components/icons/cloud.icon'
import clsx from 'clsx'

const Navbar = () => {
  const isLoggedIn = (() => {
    return true
  })()

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
      {isLoggedIn && <Button variant="secondary">Logout</Button>}
    </nav>
  )
}

export default Navbar

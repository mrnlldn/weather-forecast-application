/**
 * This screen is displayed on the home page if the user is logged in.
 *
 * Using this, the user can search for cities with it's corresponding weather forecast.
 */

import Button from '@/components/button'
import { useActiveUser } from '@/components/hooks/useActiveUser'

const HomeScreen = () => {
  const user = useActiveUser()
  return (
    <section className="items-center flex flex-col space-y-16">
      <div className="space-y-2 font-semibold text-center hidden md:block">
        <h1 className="text-2xl">{user?.name}</h1>
        <p className="text-gray-500 break-all">{user?.email}</p>
      </div>
      <div className="space-y-2 flex flex-col content-center items-center">
        <input className="border-black border-2 rounded-lg" />
        <Button>Display Weather</Button>
      </div>
    </section>
  )
}

export default HomeScreen

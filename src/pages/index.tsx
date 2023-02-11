import HomeScreen from '@/features/home/screens/home.screen'
import LandingScreen from '@/features/home/screens/landing.screen'

export default function Home() {
  const isLoggedIn = (() => {
    return false
  })()

  if (isLoggedIn) {
    return <HomeScreen />
  }

  return <LandingScreen />
}

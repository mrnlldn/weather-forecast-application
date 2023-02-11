import Button from '@/components/button'

/**
 * This screen is displayed on the home page if the user is not logged in
 */
const LandingScreen = () => {
  return (
    <section className="space-y-4">
      <h1>
        Welcome to the weather forecast web application. Please login with your
        Github user to use the application and view the weather in your city.
      </h1>
      <Button variant="primary">Login</Button>
    </section>
  )
}

export default LandingScreen

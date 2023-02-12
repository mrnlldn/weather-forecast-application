import Button from '@/components/button'
import { signIn } from 'next-auth/react'
import Head from 'next/head'

/**
 * This screen is displayed on the home page if the user is not logged in
 */
const LandingScreen = () => {
  return (
    <>
      <Head>
        <title>Login - Weather Forecast App</title>
      </Head>
      <section className="space-y-4">
        <h1 className="text-lg text-gray-500 ">
          Welcome to the weather forecast web application. Please login with
          your Github user to use the application and view the weather in your
          city.
        </h1>
        <Button variant="primary" onClick={() => signIn()}>
          Login
        </Button>
      </section>
    </>
  )
}

export default LandingScreen

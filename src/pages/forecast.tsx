import Button from '@/components/button'
import { useIsLoggedIn } from '@/components/hooks/useIsLoggedIn'
import WeatherForecastTable from '@/features/forecast/components/weather-forecast-table'
import { OpenWeatherClient } from '@/features/openweather/openweather.client'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'

export default function Forecast() {
  const isLoggedIn = useIsLoggedIn()

  return (
    <section className="w-full space-y-6">
      <WeatherForecastTable />
      <Button className="float-right" variant="neutral">
        Back
      </Button>
    </section>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, {})

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const client = new OpenWeatherClient(process.env.OPENWEATHER_API_KEY ?? '')
  const forecast = await client.forecast({ lat: 10.99, lon: 44.34 })
  console.log({ forecast })

  return {
    props: {},
  }
}

import Button from '@/components/button'
import { useIsLoggedIn } from '@/components/hooks/useIsLoggedIn'
import WeatherForecastTable from '@/features/forecast/components/weather-forecast-table'
import { weatherQuerySchema } from '@/features/forecast/validations/weather.validation'
import {
  OpenWeatherClient,
  WeatherSchema,
} from '@/features/openweather/openweather.client'
import { GetServerSideProps, NextPage } from 'next'
import { getServerSession } from 'next-auth'

type Props = {
  /**
   * Unfortunately, the API that is available for free only returns one weather data,
   * therefore we have to transform this data later on into an array so that it can be
   * consumed by the table component
   */
  weather: WeatherSchema | null
}

const Forecast: NextPage<Props> = ({ weather }) => {
  const isLoggedIn = useIsLoggedIn()

  return (
    <section className="w-full space-y-6">
      <WeatherForecastTable data={weather ? [weather] : []} />
      <Button className="float-right" variant="neutral">
        Back
      </Button>
    </section>
  )
}
export default Forecast

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const session = await getServerSession(context.req, context.res, {})

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const queryParams = await weatherQuerySchema.safeParseAsync(context.query)
  if (queryParams.success === false) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const { lat, lon } = queryParams.data

  const client = new OpenWeatherClient(process.env.OPENWEATHER_API_KEY ?? '')

  const weather = await client.weather({ lat, lon })

  return {
    props: {
      weather,
    },
  }
}

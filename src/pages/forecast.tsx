import Button from '@/components/button'
import WeatherForecastTable from '@/features/forecast/components/weather-forecast-table'

export default function Forecast() {
  return (
    <section className="w-full space-y-6">
      <WeatherForecastTable />
      <Button className="float-right" variant="neutral">
        Back
      </Button>
    </section>
  )
}

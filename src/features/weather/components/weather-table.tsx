import { Table, Tbody, Td, Th, Thead, Tr } from '@/components/table'
import { WeatherSchema } from '@/features/openweather/openweather.client'
import { getDateFromUnix } from '@/utils/date'
import { convertKelvinToFahrenheit } from '@/utils/temperature'

type WeatherTableProps = {
  data: WeatherSchema[]
}

const WeatherTable = ({ data }: WeatherTableProps) => {
  return (
    <Table className=" w-full">
      <Thead>
        <Tr>
          <Th>Date (mm/dd/yyyy)</Th>
          <Th>Temp(F)</Th>
          <Th className="hidden md:table-cell">Description</Th>
          <Th className="hidden md:table-cell">Main</Th>
          <Th className="hidden md:table-cell">Pressure</Th>
          <Th className="hidden md:table-cell">Humidity</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((d) => {
          console.log(d.dt)
          return (
            <Tr key={d.id}>
              <Td>{getDateFromUnix(d.dt).toLocaleDateString()}</Td>
              <Td>{convertKelvinToFahrenheit(d.main.temp).toFixed(2)}</Td>
              <Td className="hidden md:table-cell">
                {d.weather[0]?.description ?? '-'}
              </Td>
              <Td className="hidden md:table-cell">
                {d.weather[0]?.main ?? '-'}
              </Td>
              <Td className="hidden md:table-cell">{d.main.pressure}</Td>
              <Td className="hidden md:table-cell">{d.main.humidity}</Td>
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
}

export default WeatherTable

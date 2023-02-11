import { Table, Tbody, Td, Th, Thead, Tr } from '@/components/table'

const WeatherForecastTable = () => {
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
        <Tr>
          <Td>09/01/2020</Td>
          <Td>75</Td>
          <Td className="hidden md:table-cell">Sky is clear</Td>
          <Td className="hidden md:table-cell">Clear</Td>
          <Td className="hidden md:table-cell">1023.68</Td>
          <Td className="hidden md:table-cell">100</Td>
        </Tr>
        <Tr>
          <Td>09/01/2020</Td>
          <Td>75</Td>
          <Td className="hidden md:table-cell">Sky is clear</Td>
          <Td className="hidden md:table-cell">Clear</Td>
          <Td className="hidden md:table-cell">1023.68</Td>
          <Td className="hidden md:table-cell">100</Td>
        </Tr>
      </Tbody>
    </Table>
  )
}

export default WeatherForecastTable

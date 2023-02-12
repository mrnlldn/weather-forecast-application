/**
 * This screen is displayed on the home page if the user is logged in.
 *
 * Using this, the user can search for cities with it's corresponding weather forecast.
 */

import Autocomplete from '@/components/autocomplete'
import Button from '@/components/button'
import { useActiveUser } from '@/components/hooks/useActiveUser'
import clsx from 'clsx'
import { useState } from 'react'
import { optional } from 'zod'

const options = [
  {
    name: 'London',
    lat: 123,
    lon: 456,
  },
  {
    name: 'Britain',
    lat: 789,
    lon: 654,
  },
]

const HomeScreen = () => {
  const user = useActiveUser()

  const [q, setQ] = useState('')
  const [selected, setSelected] = useState<typeof options[0] | null>(null)

  return (
    <section className="items-center flex flex-col space-y-16">
      <div className="space-y-2 font-semibold text-center hidden md:block">
        <h1 className="text-2xl">{user?.name}</h1>
        <p className="text-gray-500 break-all">{user?.email}</p>
      </div>
      <div className="space-y-2 flex flex-col content-center items-center">
        <Autocomplete
          value={selected}
          displayValue={(option) => option?.name ?? ''}
          options={options}
          renderOption={(option) => {
            return (
              <div
                className={clsx(
                  'w-full bg-white hover:bg-gray-600 hover:text-white py-2 pl-5 pr-4',
                  {
                    'bg-blue-600 hover:bg-blue-700':
                      option.lat === selected?.lat &&
                      option.lon === selected?.lon,
                  },
                )}
              >
                <p>{`${option.name} (${option.lat}, ${option.lon})`}</p>
              </div>
            )
          }}
          onChange={(newValue) => {
            setSelected(newValue)
          }}
          onInputChange={(newInput) => {
            setQ(newInput)
          }}
        />
        <Button>Display Weather</Button>
      </div>
    </section>
  )
}

export default HomeScreen

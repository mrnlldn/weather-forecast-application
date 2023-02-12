import SearchIcon from '@/components/icons/search.icon'
import { Combobox, Transition } from '@headlessui/react'
import { type ReactNode, Fragment } from 'react'

type AutocompleteProps<T> = {
  value: T | null
  displayValue: (value: T | null) => string
  options: T[]
  onInputChange: (newValue: string) => void
  onChange: (newValue: T) => void
  renderOption: (option: T) => ReactNode
  placeholder?: string
}

const Autocomplete = <T,>({
  value,
  displayValue,
  options,
  onInputChange,
  onChange,
  renderOption,
  placeholder = 'Search',
}: AutocompleteProps<T>) => {
  return (
    <Combobox value={value} onChange={onChange}>
      <div className="relative mt-1">
        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
          <Combobox.Input
            placeholder={placeholder}
            displayValue={displayValue}
            onChange={(e) => onInputChange(e.target.value)}
            className="w-full rounded-md py-2 text-[1rem] leading-5 text-gray-900 px-2 border-2 border-gray-600 pl-6"
          />
          <Combobox.Button className="absolute inset-y-0 left-1 flex items-center pr-2">
            <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Combobox.Options className="absolute mt-1 max-h-60 min-w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border-2 border-gray-300">
            {options.length === 0 ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              options.map((option, idx) => {
                return (
                  <Combobox.Option
                    key={idx}
                    value={option}
                    className="relative cursor-default select-none"
                  >
                    {renderOption(option)}
                  </Combobox.Option>
                )
              })
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  )
}

export default Autocomplete

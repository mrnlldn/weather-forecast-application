import { Combobox, Transition } from '@headlessui/react'
import { type ReactNode, Fragment } from 'react'

type AutocompleteProps<T> = {
  value: T | null
  displayValue: (value: T | null) => string
  options: T[]
  onInputChange: (newValue: string) => void
  onChange: (newValue: T) => void
  renderOption: (option: T) => ReactNode
}

const Autocomplete = <T,>({
  value,
  displayValue,
  options,
  onInputChange,
  onChange,
  renderOption,
}: AutocompleteProps<T>) => {
  return (
    <Combobox value={value} onChange={onChange}>
      <Combobox.Input
        displayValue={displayValue}
        onChange={(e) => onInputChange(e.target.value)}
        className="w-full rounded-md py-2 text-sm leading-5 text-gray-900 px-2 border-2 border-gray-600"
      />
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Combobox.Options className="border-2 mt-4 border-gray-600 rounded-md z-20 absolute max-h-60 overflow-auto bg-white">
          {options.map((option, idx) => {
            return (
              <Combobox.Option
                key={idx}
                value={option}
                className="relative cursor-default select-none"
              >
                {renderOption(option)}
              </Combobox.Option>
            )
          })}
        </Combobox.Options>
      </Transition>
    </Combobox>
  )
}

export default Autocomplete

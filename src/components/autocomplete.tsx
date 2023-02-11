import { Combobox, Transition } from '@headlessui/react'

type AutocompleteItem<T> = {
  label: string
  value: T
}
type AutocompleteProps<T> = {
  value: T | null
  options: AutocompleteItem<T>[]
  onInputChange: (newValue: string) => void
  onChange: (newValue: T) => void
}

const Autocomplete = <T,>({
  value,
  options,
  onInputChange,
  onChange,
}: AutocompleteProps<T>) => {
  return (
    <Combobox value={value} onChange={onChange}>
      <Combobox.Input
        onChange={(e) => onInputChange(e.target.value)}
        className="w-full rounded-md py-2 text-sm leading-5 text-gray-900"
      />
      <Combobox.Options>
        {options.map((option, idx) => {
          return (
            <Combobox.Option key={idx} value={option.value}>
              {option.label}
            </Combobox.Option>
          )
        })}
      </Combobox.Options>
    </Combobox>
  )
}

export default Autocomplete

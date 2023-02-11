import clsx from 'clsx'
import { type ButtonHTMLAttributes } from 'react'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ variant = 'primary', className, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx('py-2 rounded-md px-4', className, {
        'bg-blue-500 hover:bg-blue-600 text-white': variant === 'primary',
        'bg-gray-500 hover:bg-gray-600 text-white': variant === 'secondary',
      })}
      {...props}
    />
  )
}

export default Button

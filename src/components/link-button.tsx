import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { HTMLAttributes } from 'react'

type LinkButtonProps = {
  variant?: 'primary' | 'secondary' | 'neutral'
} & LinkProps &
  HTMLAttributes<HTMLAnchorElement>
const LinkButton = ({
  variant = 'primary',
  className,
  ...props
}: LinkButtonProps) => {
  return (
    <Link
      className={clsx('py-2 rounded-md px-4', className, {
        'bg-blue-500 hover:bg-blue-600 text-white': variant === 'primary',
        'bg-gray-500 hover:bg-gray-600 text-white': variant === 'secondary',
        'bg-gray-200 hover:bg-gray-300 text-black': variant === 'neutral',
      })}
      {...props}
    />
  )
}
export default LinkButton

import clsx from 'clsx'
import {
  type TdHTMLAttributes,
  type HTMLAttributes,
  type TableHTMLAttributes,
  type ThHTMLAttributes,
} from 'react'

type TableProps = TableHTMLAttributes<HTMLTableElement>
export const Table = ({ className, ...props }: TableProps) => {
  return (
    <table
      className={clsx(
        'table-auto [&>tbody>*:nth-child(odd)]:bg-gray-400 [&>tbody>*:nth-child(even)]:bg-gray-500 border-collapse border-2 border-gray-600',
        className,
      )}
      {...props}
    />
  )
}

export type TheadProps = HTMLAttributes<HTMLTableSectionElement>
export const Thead = ({ className, ...props }: TheadProps) => {
  return (
    <thead className={clsx('bg-gray-700 text-white', className)} {...props} />
  )
}

export type ThProps = ThHTMLAttributes<HTMLTableCellElement>
export const Th = ({ className, ...props }: ThProps) => {
  return (
    <th
      className={clsx(
        'p-4 border-r-gray-800 border-2 border-y-0 border-l-0 last:border-0',
        className,
      )}
      {...props}
    />
  )
}

export type TbodyProps = HTMLAttributes<HTMLTableSectionElement>
export const Tbody = ({ className, ...props }: TbodyProps) => {
  return <tbody className={clsx('', className)} {...props} />
}

export type TrProps = HTMLAttributes<HTMLTableRowElement>
export const Tr = ({ className, ...props }: TrProps) => {
  return <tr className={clsx('', className)} {...props} />
}

export type TdProps = TdHTMLAttributes<HTMLTableCellElement>
export const Td = ({ className, ...props }: TdProps) => {
  return (
    <td
      className={clsx(
        'p-4 border-r-gray-800 border-2 border-y-0 border-l-0 last:border-0',
        className,
      )}
      {...props}
    />
  )
}

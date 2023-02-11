import Navbar from '@/components/navbar'
import { type ReactNode } from 'react'

type MainLayoutProps = {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">{children}</main>
    </>
  )
}

export default MainLayout

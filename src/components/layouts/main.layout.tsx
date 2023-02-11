import Navbar from '@/components/navbar'
import { type ReactNode } from 'react'

type MainLayoutProps = {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-[30vh] md:min-h-[50vh] items-center justify-center px-4 md:px-0 max-w-3xl mx-auto">
        {children}
      </main>
    </>
  )
}

export default MainLayout

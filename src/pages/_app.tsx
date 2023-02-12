import MainLayout from '@/components/layouts/main.layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { QueryClientProvider } from 'react-query'
import queryClient from '@/utils/query-client'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </SessionProvider>
    </QueryClientProvider>
  )
}

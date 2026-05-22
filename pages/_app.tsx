import type { AppProps } from 'next/app'
import Head from 'next/head'
import { LanguageProvider } from '@/lib/LanguageContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0c1222" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </LanguageProvider>
  )
}

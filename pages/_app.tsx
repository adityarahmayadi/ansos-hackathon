import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

interface PageProps {
  Component: any,
  pageProps: any
}

export default function App({ Component, pageProps }: PageProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
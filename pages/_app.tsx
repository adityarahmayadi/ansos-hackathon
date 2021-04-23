import { ChakraProvider } from '@chakra-ui/react'
import 'react-dropzone-uploader/dist/styles.css'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
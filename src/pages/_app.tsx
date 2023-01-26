import { queryClient } from '@/services/queryClient'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { theme } from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient} >
      <ChakraProvider theme={theme} >
        <Provider store={store} >
          <Component {...pageProps} />
        </Provider>
      </ChakraProvider>

      <ReactQueryDevtools  position='bottom-left' />
    </QueryClientProvider>
  )
}

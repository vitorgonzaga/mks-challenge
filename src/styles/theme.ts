import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    brand: {
      blue: {
        500: '#0F52BA'
      },
      gray: {
        100: '#E5E5E5',
        200: '#EEEEEE',
        300: '#BFBFBF',
        500: '#373737'
      },
      font: {
        gray: {
          500: '#2C2C2C'
        }
      }
    }
  },
  fonts: {
    body: 'Montserrat',
    heading: 'Montserrat'
  },
  styles: {
    global: {
      body: {
        bg: 'brand.gray.100',
      },
      a: {
        color: 'inherit',
        textDecoration: 'none'
      },
      // p: {
      //   marginBlockStart: '0px',
      //   marginBlockEnd: '0px'
      // }
    }
  }
})
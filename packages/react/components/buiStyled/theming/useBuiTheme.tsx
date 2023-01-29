import { useEffect, useState } from 'react'
import { useTheme } from '@emotion/react'

export interface BuiThemeTypes {
  typography: {
    fontFamily: string
    variants: {
      [key: string]: {
        fontFamily: string
        fontWeight: number
        fontSize: string
        lineHeight: number | string
        letterSpacing: string
      }
    }
  }
}

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends BuiThemeTypes {}
}

const defaultThemeConfig: BuiThemeTypes = {
  typography: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    variants: {
      default: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontSize: '6rem',
        fontWeight: 400,
        lineHeight: 1.167,
        letterSpacing: '-0.01562em',
      },
    },
  },
}

export const useBuiTheme = () => {
  const theme: BuiThemeTypes | null = useTheme()
  const [buiTheme, setBuiTheme] = useState<BuiThemeTypes>(defaultThemeConfig)
  useEffect(() => {
    if (Object.keys(theme).length !== 0) {
      setBuiTheme(theme)
    }
  }, [theme])
  return buiTheme
}

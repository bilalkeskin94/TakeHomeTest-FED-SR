import { useEffect } from 'react'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
import '../styles/globals.css'

const theme = createTheme()

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

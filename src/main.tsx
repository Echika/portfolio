import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './index.css'
import App from './App.tsx'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF6B00',
      light: '#FF9A3C',
      dark: '#CC5500',
    },
    secondary: {
      main: '#FF9A3C',
    },
    background: {
      default: '#0A0A0A',
      paper: '#111111',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#888888',
    },
  },
  typography: {
    fontFamily: 'DM Sans, sans-serif',
    h1: { fontFamily: 'Bebas Neue, cursive' },
    h2: { fontFamily: 'Bebas Neue, cursive' },
    h3: { fontFamily: 'Bebas Neue, cursive' },
    h4: { fontFamily: 'Bebas Neue, cursive' },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: '12px',
          padding: '10px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#111111',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: '16px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
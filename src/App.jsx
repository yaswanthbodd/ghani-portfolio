import { Box, createTheme, ThemeProvider } from '@mui/material'
import './App.css'
import { LandingPage } from './pages/LandingPage'
import { useState } from 'react'

function App() {

  //Dark Mode Setting Context
  const [mode, setMode] = useState('dark');
  const darkTheme = createTheme({
    palette : {
      mode : mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'}>
        <LandingPage mode={mode} setMode={setMode}/>
      </Box>
    </ThemeProvider>
  )
}

export default App

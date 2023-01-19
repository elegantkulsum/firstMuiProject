import { ThemeProvider } from '@emotion/react';
import { RouterProvider } from 'react-router';
import './App.css';
import { router } from './Router/Router';
import { CssBaseline, Switch } from '@mui/material';
import React, { useState } from 'react';
import { theme} from './Theme/Theme';


function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div>
        
      <ThemeProvider theme={theme}>
      <Switch onClick={()=> setDarkMode(!darkMode)} />
        <RouterProvider router={router}>
          <CssBaseline></CssBaseline>
        </RouterProvider>
      </ThemeProvider>
    </div>
  )

}

export default App;

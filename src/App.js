import { ThemeProvider } from '@emotion/react';
import { RouterProvider } from 'react-router';
import './App.css';
import { router } from './Router/Router';
import { Switch } from '@mui/material';
import React, { useState } from 'react';
import { theme, theme1 } from './Theme/Theme';


function App() {

  const [darkMode, setDarkMode] = useState(false)
  
  console.log(darkMode);
  return (
    <div>
        
      <ThemeProvider theme={darkMode ? theme : theme1}>
      <Switch onClick={()=> setDarkMode(!darkMode)} />
        <RouterProvider router={router}>
        </RouterProvider>
      </ThemeProvider>
    </div>
  )

}

export default App;

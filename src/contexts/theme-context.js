import { createContext, useState } from "react";

import lightLogo from '../image/logo/pokebola.png'
import darkLogo from '../image/logo/masterball.png'

export const themes = {
   light: {
       menuPrimaryColor: '#ce181d',
       mainPrimaryColor: '#94e5ff',
       logo: lightLogo
   },
   dark: {
        menuPrimaryColor: '#3e006e',
        mainPrimaryColor: '#d0d0d0',
        logo: darkLogo
   }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
   const [ theme, setTheme ] = useState(themes.light)

   return(
       <ThemeContext.Provider value={{theme, setTheme}}>
           {props.children}
       </ThemeContext.Provider>    
   )
}
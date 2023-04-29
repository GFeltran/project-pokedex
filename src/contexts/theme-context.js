import { createContext, useState } from "react";

import { lightLogo, darkLogo, lightCard, darkCard, lightLi, darkLi } from '../image/image.js'


export const themes = {
   light: {
      primaryColor: '#ce181d',
      backgroundColor: '#94e5ff',
      textColor: '#000000',
      textHover: '#ffce31',
      logo: lightLogo,
      card: lightCard,
      liStyle: lightLi
   },
   dark: {
      primaryColor: '#3e006e',
      backgroundColor: '#97cfb6',
      textColor: '#ffffff',
      textHover: '#f53e28',
      logo: darkLogo,
      card: darkCard,
      liStyle: darkLi
   }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
   const [ theme, setTheme ] = useState(themes.light)
   const [ isCheck, setIsCheck ] = useState(false)

   return (
      <ThemeContext.Provider value={{ theme, setTheme, isCheck, setIsCheck }}>
         {props.children}
      </ThemeContext.Provider>
   )
}
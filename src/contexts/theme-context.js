import { createContext, useState } from "react";

import lightLogo from '../image/logo/pokebola.png'
import darkLogo from '../image/logo/masterball.png'

import lightCard from  '../image/background/pokebola-aberta.png'
import darkCard from  '../image/background/masterball-aberta.png'

import lightLi from '../image/li-style/light-style.png'
import darkLi from '../image/li-style/dark-style.png'

export const themes = {
   light: {
      menuPrimaryColor: '#ce181d',
      mainPrimaryColor: '#94e5ff',
      textColor: '#000000',
      textHover: '#ffce56',
      logo: lightLogo,
      card: lightCard,
      liStyle: lightLi
   },
   dark: {
      menuPrimaryColor: '#3e006e',
      mainPrimaryColor: '#bcd0d7',
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
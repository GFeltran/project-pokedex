import styled from "styled-components";
import React from "react";

import background from '../../image/background/pokeball-bg.png'
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";

export const Main = (props) => {
   const { theme } = useContext(ThemeContext)

   return(
      <Container theme={theme}>
         {props.children}
      </Container>
   )
}

const Container = styled.main`
   grid-area: main;
   background: ${props => props.theme.mainPrimaryColor} url(${background}) no-repeat center;
   background-size: cover;
   background-attachment: fixed; 
   min-height: 100vh;
`
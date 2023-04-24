import styled from "styled-components";
import React from "react";

import background from '../../image/background/pokeball-bg.png'

export const Main = (props) => {
   return(
      <Container>
         {props.children}
      </Container>
   )
}

const Container = styled.main`
   grid-area: main;
   background: #94e5ff url(${background}) no-repeat center;
   background-size: cover;
   background-attachment: fixed; 
   min-height: 100vh;
`
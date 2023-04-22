import React from "react";
import styled from "styled-components";

import { Header } from "../header";
import { Footer } from "../footer";


export const Menu = () => {
   return(
      <Aside>
         <Header>
            
         </Header>

         <Footer />
      </Aside>
   )
}

const Aside = styled.aside`
   position: fixed;
   grid-area: aside;
   display: grid;
   grid-template-areas: "header"
                        "footer";
   grid-template-rows: 1fr 70px;
   min-height: 100vh;
`

import React from "react";
import styled from "styled-components";

import { Header } from "../../header";
import { Footer } from "../../footer";

export const MenuHome = () => {
   return(
      <Aside>
         <Header />

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

   @media (max-width: 930px) {
      position: relative;
      grid-template-areas: "header footer";
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 80px;
      min-height: auto;
      max-width: 100vw;
   }
`

import styled from "styled-components";
import React from "react";

import { Photo } from "../../photo";
import { Details } from "../../detail";

export const Info = () => {

   return (
      <Section>
         <Photo />

         <Details />
      </Section>
   )
}

const Section = styled.section`
   grid-area: infos;
   display: flex;
   justify-content: space-around;
   align-items: center;

   

   background: #f6bd20;
`
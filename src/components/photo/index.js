import styled from "styled-components";
import React from "react";

import { Input } from "../input";

import testM from '../../image/test-m.png'
//import testF from '../../image/test-f.png'

export const Photo = () => {
   return(
      <>
         <Style>
            <img src={testM} alt="test"></img>

            <Radios>
               <Input 
                  type="radio" 
                  name="genero"
                  value="male" 
                  isCheck={true}
               />

               <Input 
                  type="radio" 
                  name="genero"
                  value="famale" 
               />
            </Radios>
         </Style>
      </>
   )
}

const Style = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   min-width: 18%;
   border: 4px solid #1d1d1d;
   border-radius: 50%;

   background-color: #ffffff;

   img{
      width: 100%;
   }
`

const Radios = styled.div`
   position: absolute;
   bottom: 10px;
   display: flex;
   gap: 7px;
`
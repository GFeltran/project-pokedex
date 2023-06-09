import styled from "styled-components";
import React from "react";

import { checkbox } from '../../image/image.js'
import { checkboxChecked } from '../../image/image.js'

export const Input = ({type, name, id, isCheck, label, value, change}) => {
   return(
      <Div>
         <Style 
            type={type} 
            name={name} 
            id={id}
            value={value}
            defaultChecked={isCheck}
            onChange={change}
         />
         {
            label !== undefined ? <label htmlFor={id}>{label}</label> : null
         }
      </Div>
   )
}

const Div = styled.div`
   display: flex;
   align-items: center;
   
   label {
      padding-left: 5px;
      cursor: pointer;
   }
`

const Style = styled.input`
   all: unset;
   display: block;
   height: 18px;
   width: 18px;

   border-radius: 45%;
   background: #e0e0e0 url(${checkbox}) no-repeat center ;
   background-size: cover;

   transition: 0.2s;
   cursor: pointer;

   :checked{
      background-image: url(${checkboxChecked});
   }
`
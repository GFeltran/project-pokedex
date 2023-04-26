import styled from "styled-components";
import React from "react";

import input from '../../image/checkbox.png'
import check from '../../image/checkbox-checked.png'

export const Input = ({type, name, id, isCheck, label, value, change}) => {
   return(
      <>
         <Style 
            type={type} 
            name={name} 
            id={id}
            value={value}
            defaultChecked={isCheck}
            onChange={change}
         />
         {
            label !== undefined ? <label>{label}</label> : null
         }
      </>
   )
}

const Style = styled.input`
   all: unset;
   height: 18px;
   width: 18px;

   border-radius: 45%;
   background: lightgrey url(${input}) no-repeat center ;
   background-size: cover;

   transition: 0.2s;
   cursor: pointer;

   :checked{
      background-image: url(${check});
   }
`
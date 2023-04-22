import React from 'react'
import styled from 'styled-components'

export const Toggler = () => {
   return (
      <>
        <Toggle>
            <input id='toggle' type='checkbox'/>
            <label htmlFor='toggle'></label>
         </Toggle> 
      </>
   )
}


const Toggle = styled.div`
   position: relative;
   display: inline-block;
   width: 40px;
   height: 20px;
   
   input {
      opacity: 0;
      width: 0;
      height: 0;
   }
   
   input + label {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 34px;
      background-color: #cccccc;
      cursor: pointer;
      -webkit-transition: .4s;
      transition: .4s;
   }
   
   input + label:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
   }
   
   input:checked + label {
      background-color: #2196F3;
   }
   
   input:checked + label:before {
      -webkit-transform: translateX(20px);
      -ms-transform: translateX(20px);
      transform: translateX(20px);
   }
   
`
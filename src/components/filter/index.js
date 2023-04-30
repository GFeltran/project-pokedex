import styled from "styled-components";
import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/theme-context"
import { background, arrow } from "../../image/image";

import { Input } from "../input";
import { useState } from "react";

const Options = ({options, size}) => {
   const { theme } = useContext(ThemeContext)

   return(
      <OptionStyle theme={theme} className="options" size={size}>
         {
            options.map((option, index, title) => {
               return (
                  <Input
                     key     = {index}
                     type    = "checkbox"
                     name    = {title}
                     value   = {option}
                     id      = {option}
                     label   = {option}
                  />
               )
            })
         }
      </OptionStyle>
   )
}

Options.defaultProps = {
   ids: []
}

export const Filter = ({title, options, size}) => {
   const [ ative, setAtive ] = useState(null)
   const { theme } = useContext(ThemeContext)

   const handleClick = () => {
      if(ative !== null) {
         setAtive(null);
      } else {
         setAtive('ative');
      }
   }

   return (
      <Style className={ative} theme={theme}>
         <h3 onClick={handleClick}>{title}</h3>

         <Options 
            options={options}
            title={title}
            size={size}
         />
      </Style>
   )
}

const Style = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   background: #1d1d1d;
   padding: 10px;
   border-radius: 10px;

   h3 {
      position: relative;
      color: #ffffff;
      font-size: 3rem;
      cursor: pointer;
      transition: .2s;  
   }

   h3:hover {
      color: ${props => props.theme.textHover};
   }

   h3::before {
      content: "";
      position: absolute;
      background: url(${arrow}) no-repeat center;
      background-size: contain;
      height: 30px;
      width: 30px;
      top: 0;
      bottom: 0;
      margin: auto;
      right: 0px;
      transform: rotate(180deg);
      transition: .2s;  
   }

   &&.ative h3::before {
      transform: rotate(0deg);
   }

   .options {
      display: none;
   }

   &&.ative .options {
      display: flex;
   }

   @media (max-width: 930px) {
      width: auto;
      height: 100%;
   }
`

const OptionStyle = styled.div`
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   flex-basis: 0;
   gap: 3px;
   height: ${props => props.size};
   background: ${props => props.theme.backgroundColor} url(${background}) no-repeat center;
   background-size: cover;
   padding: 10px;
   margin-top: 10px;

   input:hover ~ label{
      color: ${props => props.theme.textHover};
   }

   label {
      font-size: 1.6rem;
      color: ${props => props.theme.textColor};
   }
`
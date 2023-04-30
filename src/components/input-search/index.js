import styled from "styled-components";
import React, { useContext, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { ThemeContext } from "../../contexts/theme-context";

export const InputSearch = () => {
   const { theme } = useContext(ThemeContext)
   const [ input, setInput ] = useState({
      value: ''
   })

   const handleInputChange = (e) => {
      setInput({
         value: e.target.value
      })
   }

   const handleSearch = (e) => {
      console.log(input.value);
   }

   return(
      <Style theme={theme}>
         <button className="icon" onClick={handleSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
         </button>

         <Input 
            type="text"
            name="search"
            id="search"
            placeholder="search"
            value={input.value}
            onChange={handleInputChange}
         ></Input>
      </Style>
   )
}

const Style = styled.label`
   display: flex;
   width: 100%;
   height: 35px;
   padding: 5px;
   border-radius: 25px;
   background: #1d1d1d;

   &&:hover .icon svg{
      color: ${props => props.theme.textHover};
   } 

   .icon {
      position: relative;
      width: 35px;
      height: 100%;
      cursor: pointer;
      background: none;
      border: none;
   }

   .icon svg {
      position: absolute;
      color: #ffffff;
      font-size: 2rem;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
   }
`

const Input = styled.input`
   border: none;
   margin-left: 5px;
   border-radius: 0 25px 25px 0;
   padding-left: 5px;
   width: 100%;
   font-size: 1.5rem;

   :focus {
      outline: none;
      box-shandow: none;
   }
`
import styled from 'styled-components';
import React, { useContext } from 'react';

import { Toggler} from '../toggler';
import { Sociais } from '../sociais';

import { ThemeContext, themes } from '../../contexts/theme-context';

export const Footer = () => {
   const { isCheck, setIsCheck, setTheme } = useContext(ThemeContext);

   const handleCheck = () => {
      setIsCheck(!isCheck)

      if(isCheck){
         setTheme(themes.light)
      } else {
         setTheme(themes.dark)
      }
   }

   return (
      <Style>
         <Toggler id='toggleTheme' check={isCheck} change={handleCheck}/>
         <Sociais />
      </Style>
   )
}

const Style = styled.footer`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 70px;
   width: 100%;
   padding: 15px 25px;
   border-top: 2px solid #ffffff;
   background: #1e1e1e;
`
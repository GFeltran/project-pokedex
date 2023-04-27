import styled from 'styled-components';
import React, { useState } from 'react';

import { Toggler} from '../toggler';
import { Sociais } from '../sociais';

export const Footer = () => {
   const [ isCheck, setIsCheck ] = useState(false);

   const handleCheck = () => {
      setIsCheck(!isCheck)
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
import React from "react";
import styled from "styled-components";

import { Logo } from "../logo";

export const Header = () =>{
   return(
      <Style className="header">
         <Logo />
      </Style>
   )
}

const Style = styled.header`
   grid-area: header;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 10px 25px 0;
   background-color: #ce181d;
`
/*
       <Header>
          <Logo />

          <form>
             <input type='text' />

             <div className='filters'>
                <div className='filter'>
                   <h3>Tipos:</h3>
                   <div className='options'>

                   </div>
                </div>
                <div className='filter'>
                   <h3>Gerações:</h3>
                </div>
             </div>
          </form>

       </Header>
*/
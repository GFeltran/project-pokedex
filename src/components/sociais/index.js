import React from "react";
import styled from "styled-components";

import { Social } from "../social";

export const Sociais = () => {
   return(
      <nav>
         <Ul>
            <li>
               <Social 
                  link='https://github.com/GFeltran'
                  name='github'
                  social={<i className="fab fa-github"></i>}
               />
            </li>

            <li>
               <Social 
                  link='https://www.linkedin.com/in/feltran/com/GFeltran'
                  name='linkedin'
                  social={<i className="fab fa-linkedin-in"></i>}
               />
            </li>
         </Ul>
      </nav>
   )
} 

const Ul = styled.ul`
   display: flex;
   justify-content: center;
   align-items: center;

   li {
      margin-left: 15px;
   }

   li a {
      font-size: 2.8rem;
      color: #ffffff;
   }


   li a:hover{
      color: #ffce31;
   }
`

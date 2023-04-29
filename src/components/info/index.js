import styled from "styled-components";
import React from "react";

import { Type } from '../type'

export const Info = ({id, type1, type2, name, setColor, color}) => {
   return (
      <Style>
         <div>
            <p className="id">#{id}</p>

            <span>
               <Type
                  type={type1 !== null ? type1 : null}
                  /* setColor={setColor}
                  color={color} */
               />
               {
                  type2 !== null ? <Type type={type2} /* setColor={setColor2} color={color2} */ /> : null
               }
            </span>
         </div>

         <h1 className="name">{name}</h1>
      </Style>
   )
}

const Style = styled.div`
   grid-area: info;

   div {
      font-size: 1.5rem;
      display: flex;
      justify-content: space-between;
   }

   div span {
      display: flex;
      gap: 10px;
   }

   .name{
      font-size: 4rem;
   }
`
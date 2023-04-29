import styled from "styled-components";
import React, { useContext, useState, useEffect } from "react";

import { DetailsContext } from "../../contexts/details-context";
import { Type } from "../type";

export const Types = ({type}) => {
   const { color, setColor } = useContext(DetailsContext)

   const [type1, setType1] = useState(null)
   const [type2, setType2] = useState(null)
   const [color2, setColor2] = useState(null)

   useEffect(() => {
      if (type !== undefined) {
         setType1(type[0].type.name)

         if (type[1]) {
            setType2(type[1].type.name)
         }
      }
   }, [type])

   return(
      <Style>
         <Type
            type={type1}
            setColor={setColor}
            color={color}
         />
         {
            type2 !== null ? (
               <Type
                  type={type2}
                  setColor={setColor2}
                  color={color2}
               />) : null
         }
   </Style>
   )
}

const Style = styled.span`
   display: flex;
   gap: 10px;

`
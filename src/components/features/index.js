import { faWeightHanging, faRulerVertical } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import React from "react"

import { Feature } from "../feature"

export const Features = ({height, weight}) => {
   return(
      <Style>
         <Feature type='m' size={height / 10} icon={faRulerVertical}/>

         <Feature type='kg' size={weight / 10} icon={faWeightHanging}/>
      </Style>
   )
}

const Style = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 40px;
   text-align: center;
   font-size: 2.5rem;
`
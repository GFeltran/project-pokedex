import styled from "styled-components";
import React, { useEffect, useState } from "react";

import { Input } from "../input";
import { undefined } from "../../image/image.js";

const Inputs = ({change}) => {
   return (
      <Radios>
         <Input
            type="radio"
            name="genero"
            value="male"
            isCheck={true}
            change={change}
         />

         <Input
            type="radio"
            name="genero"
            value="female"
            change={change}
         />
      </Radios>
   )
}

export const Photo = ({ male, female }) => {
   const [photo, setPhoto] = useState(null)
   const [altPhoto, setAltPhoto] = useState('Pokemon macho')

   useEffect(() => {
      setPhoto(male)
   }, [male])

   const handleInputChange = (value) => {
      if (value === 'male') {
         setPhoto(male)
         setAltPhoto('Pokemon macho')
      } else if (value === 'female') {
         setPhoto(female);
         setAltPhoto('Pokemon femea')
      }
   }

   return (
      <>
         <Style>
            <img src={photo} alt={altPhoto}></img>

            {
               female !== null ? <Inputs change={(event) => handleInputChange(event.target.value)}/> : null
            }
         </Style>
      </>
   )
}

Photo.defaultProps = {
   male: undefined,
   female: null
}

const Style = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   min-width: 220px;
   min-height: 220px;
   border: 5px solid #1d1d1d;
   border-radius: 50%;

   background-color: #ffffff;

   img{
      width: 100%;
   }
`

const Radios = styled.div`
   position: absolute;
   bottom: 10px;
   display: flex;
   gap: 7px;
`
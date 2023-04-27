import styled from "styled-components";
import React, { useEffect, useState } from "react";

import background from '../../image/background/pokeball-bg.png'

import { Type } from "../type";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";

export const Details = ({ id, type, name, height, weight, desc, setColor, color }) => {
   const { theme } = useContext(ThemeContext)

   const [type1, setType1] = useState(null)
   const [type2, setType2] = useState(null)
   const [color2, setColor2] = useState(null)

   useEffect(() => {
      if(type !== undefined){
         setType1(type[0].type.name)
         if(type[1]){
            setType2(type[1].type.name)
         }
      }
   }, [type])

   return (
      <Style>
         <Info>
            <span>
               <p className="id">#{id}</p>

               <span >
                  <Type 
                     type={type1 !== null ? type1 : null} 
                     setColor={setColor}
                     color={color}
                  />
                  {
                     type2 !== null ? <Type type={type2} setColor={setColor2} color={color2}/> : null
                  }
               </span>
            </span>

            <h1 className="name">{name}</h1>
         </Info>

         <About theme={theme}>
            <p className="desc">{desc}</p>

            <Features>
               <div>
                  <i className="fas fa-ruler-vertical"></i>
                  <p className="height">{height}dm</p>
               </div>

               <div>
                  <i className="fas fa-weight-hanging"></i>
                  <p className="weight">{weight}hg</p>
               </div>
            </Features>
         </About>
      </Style>
   )
}

const Style = styled.div`
   display: grid;
   grid-template-areas: "info"
                        "about";
   grid-template-rows: 0.25fr 0.75fr;
   width: 500px;
   padding: 10px;
   border-radius: 10px;

   color: #ffffff;
   background: #1d1d1d;
`

const About = styled.div`
   grid-area: about;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   padding: 5px;
   padding-bottom: 10px;
   border: 2px solid #fff;
   border-radius: 0 0 6px 6px;
   background: ${props => props.theme.mainPrimaryColor} url(${background}) no-repeat center;
   background-size: cover;
   color: ${props => props.theme.textColor};
   font-size: 2rem;
   text-align: center;
`

const Features = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 40px;
   text-align: center;
   font-size: 2.5rem;

   div {
      display: flex;
      gap: 10px;
      padding: 10px 30px 10px 30px;
   }

   div:last-child {
      border-left: 3px dashed ${props => props.theme.textColor};
   }
`

const Info = styled.div`
   grid-area: info;

   span{
      font-size: 1.5rem;
      display: flex;
      justify-content: space-between;
   }

   span span {
      display: flex;
      gap: 10px;
   }

   .name{
      font-size: 4rem;
   }
`
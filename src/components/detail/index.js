import styled from "styled-components";
import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/theme-context";
import { background } from '../../image/image.js'

import { Types } from "../types";
import { Features } from "../features";

export const Details = ({ id, type, name, height, weight, desc }) => {
   const { theme } = useContext(ThemeContext)

   return (
      <Style>
         <Info>
            <div>
               <p className="id">#{id}</p>

               <Types type={type}/>
            </div>

            <h1 className="name">{name}</h1>
         </Info>

         <About theme={theme}>
            <p className="desc">{desc}</p>

            <Features height={height} weight={weight} />
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
   background: ${props => props.theme.backgroundColor} url(${background}) no-repeat center;
   background-size: cover;
   color: ${props => props.theme.textColor};
   font-size: 2rem;
   text-align: center;
   text-transform: lowercase;
`

const Info = styled.div`
   grid-area: info;

   div {
      font-size: 1.5rem;
      display: flex;
      justify-content: space-between;
   }

   .name{
      font-size: 4rem;
   }
`
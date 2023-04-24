import styled from "styled-components";
import React from "react";

import background from '../../image/background/pokeball-bg.png'

import { Type } from "../type";

export const Details = () => {
   return (
      <Style>
         <Info>
            <span>
               <p className="id">#25</p>
               <Type />
            </span>

            <h1 className="name">Pikachu</h1>
         </Info>

         <About>
            <p className="desc">
               When several of these Pokémon gather, their electricity could build and cause lightning storms.
            </p>

            <div className="features">
               <div>
                  <i className="fas fa-ruler-vertical"></i>
                  <p className="height">4cm</p>
               </div>
               
               <div>
                  <i className="fas fa-weight-hanging"></i>
                  <p className="weight">60hg</p>
               </div>
            </div>
         </About>
      </Style>
   )
}

const Style = styled.div`
   display: grid;
   grid-template-areas: "info"
                        "about";
   grid-template-rows: 0.27fr 0.73fr;

   height: 70%;
   max-width: 380px;
   min-width: 500px;
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
   background: #94e5ff url(${background}) no-repeat center;
   background-size: cover;
   color: #000;
   font-size: 2rem;
   text-align: center;

   .features{
      display: flex;
      justify-content: center;
      margin-top: 20px;
      text-align: center;
      font-size: 2.5rem;
   }

   .features div {
      display: flex;
      gap: 10px;
      padding: 10px 30px 10px 30px;
   }

   .features div:last-child {
      border-left: 3px dashed #000;
   }
`

const Info = styled.div`
   grid-area: info;

   span{
      font-size: 1.5rem;
      display: flex;
      justify-content: space-between;
   }

   .name{
      font-size: 4rem;
   }
`
import styled from "styled-components";
import React from "react";

import { SkillCard } from "../../skill-card";

export const Skills = () => {

   return(
      <Style>
         <SkillCard title={'Moves'}/>

         <SkillCard title={'Abilities'}/>
      </Style>
   )
}

const Style = styled.section`
   grid-area: others;
   display: flex;
   justify-content: space-evenly;
   align-items: center;

   gap: 50px;
   padding: 70px 50px;

   background: #fff;
`
import styled from "styled-components";
import React from "react";

import { SkillCard } from "../../skill-card";

export const Skills = () => {

   return(
      <Style>
         <SkillCard 
            title={'Moves'}
            skills={['move1', 'move2', 'move3']}
         />

         <SkillCard 
            title={'Abilities'}
            skills={['abilitie1', 'abilitie2']}
            haveDesc={true}
            descs={['desc1', 'desc2']}
         />
      </Style>
   )
}

const Style = styled.section`
   grid-area: others;
   display: flex;
   justify-content: space-evenly;
   align-items: center;

   gap: 50px;
   padding: 30px 50px;

   background: #fff;
`
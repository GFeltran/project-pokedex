import styled from "styled-components";
import React from "react";

import { SkillCard } from "../../skill-card";


export const Skills = ({pokemon}) => {
   return(
      <Style>
         <SkillCard 
            title={'Moves'}
            skills={pokemon.moves}
         />

         <SkillCard 
            title={'Abilities'}
            skills={pokemon.abilities}
            haveDesc={true}
            descs={pokemon.descs}
         />
      </Style>
   )
}

Skills.defaultProps = {
   moves: [ 'move1', 'move2', 'move3' ],
   abilities: [ 'abilitie1', 'abilitie2' ],
   abilitiesDesc: [ 'desc1', 'desc2' ]
}

const Style = styled.section`
   grid-area: others;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   min-height: 100%;
   gap: 50px;
   padding: 30px 50px;

   background: #fff;
`
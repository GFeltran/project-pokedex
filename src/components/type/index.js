import styled from "styled-components";
import React, { useEffect, useState } from "react";

import bug from '../../image/types-icons/bug.svg'
import dark from '../../image/types-icons/dark.svg'
import dragon from '../../image/types-icons/dragon.svg'
import electric from '../../image/types-icons/electric.svg'
import fairy from '../../image/types-icons/fairy.svg'
import fighting from '../../image/types-icons/fighting.svg'
import fire from '../../image/types-icons/fire.svg'
import flying from '../../image/types-icons/flying.svg'
import ghost from '../../image/types-icons/ghost.svg'
import grass from '../../image/types-icons/grass.svg'
import ground from '../../image/types-icons/ground.svg'
import ice from '../../image/types-icons/ice.svg'
import normal from '../../image/types-icons/normal.svg'
import poison from '../../image/types-icons/poison.svg'
import psychic from '../../image/types-icons/psychic.svg'
import rock from '../../image/types-icons/rock.svg'
import steel from '../../image/types-icons/steel.svg'
import water from '../../image/types-icons/water.svg'

export const Type = ({ type, setColor, color }) => {
   const [icon, setIcon] = useState(null)
   
   useEffect(() => {
      if (type !== null) {
         switch (type) {
            case 'bug':
               setIcon(bug)
               setColor('92BC2C')
               break

            case 'dark':
               setIcon(dark)
               setColor('595761')
               break

            case 'dragon':
               setIcon(dragon)
               setColor('0C69C8')
               break

            case 'electric':
               setIcon(electric)
               setColor('F2D94E')
               break

            case 'fairy':
               setIcon(fairy)
               setColor('EE90E6')
               break

            case 'fighting':
               setIcon(fighting)
               setColor('D3425F')
               break

            case 'fire':
               setIcon(fire)
               setColor('FBA54C')
               break

            case 'flying':
               setIcon(flying)
               setColor('A1BBEC')
               break

            case 'ghost':
               setIcon(ghost)
               setColor('5F6DBC')
               break

            case 'grass':
               setIcon(grass)
               setColor('5FBD58')
               break

            case 'ground':
               setIcon(ground)
               setColor('DA7C4D')
               break

            case 'ice':
               setIcon(ice)
               setColor('75D0C1')
               break

            case 'normal':
               setIcon(normal)
               setColor('A0A29F')
               break

            case 'poison':
               setIcon(poison)
               setColor('B763CF')
               break

            case 'psychic':
               setIcon(psychic)
               setColor('FA8581')
               break

            case 'rock':
               setIcon(rock)
               setColor('C9BB8A')
               break

            case 'steel':
               setIcon(steel)
               setColor('5695A3')
               break

            case 'water':
               setIcon(water)
               setColor('539DDF')
               break
            default:
               alert('type não encontrado')
               break
         }
      }

   }, [type])

   return (
      <Style color={color}>
         <img src={icon} alt=""></img>
         <p className="type">{type !== undefined ? type : null}</p>
      </Style>
   )
}

const Style = styled.div`
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #${props => props.color};
   box-shadow: 0 0 5px #${props => props.color};
   padding: 10px;
   width: 25px;
   height: 25px;
   border-radius: 25px;
   cursor: pointer;
   transition: 0.3s;
   overflow: hidden;

   img {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      height: 60%;
   }

   p {
      position: absolute;
      left: 25px;
   }

   :hover {
      justify-content: start;
      width: 90px;
      border-radius: 25px;
      filter: saturate(150%);
   }

   :hover img {
      left: 5px;
      margin: auto 0;
   }

   :hover p {
      display: block;
   }
`
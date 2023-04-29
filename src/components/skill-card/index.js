import styled from "styled-components";
import React, { useState, useContext } from "react";

import { background } from '../../image/image.js'
import { ThemeContext } from "../../contexts/theme-context";

const Description = ({ descs, click }) => {
   return (
      <>
         {
            descs.map((desc, index) => {
               return (
                  <div className='disable descs' key={index}>
                     <button onClick={click}>
                        <i className="fas fa-times" ></i>
                     </button>

                     <span>
                        <p>
                           {desc}
                        </p>
                     </span>
                  </div>
               )
            })
         }
      </>
   )
}

Description.defaultProps = {
   active: false,
   descs: []
}

export const SkillCard = ({ title, skills, haveDesc, descs }) => {
   const {theme} = useContext(ThemeContext)

   const [ative, setAtive] = useState(true)
   const [descAtive, setDescAtive] = useState(null)

   const ativeDesc = (index) => {
      const descList = document.querySelectorAll('.descs');

      descList[index].classList.remove('disable')
      
      setDescAtive(descList[index])
      setAtive(false)
   }

   const disableDesc = () => {
      descAtive.classList.add('disable')

      setDescAtive(null)
      setAtive(true)
   }   

   return (
      <Style>
         <h2>{`${title}:`}</h2>

         <List theme={theme}>
            <ul className={ative ? null : 'disable'}>
               {
                  skills.map((skill, index) => {
                     return (
                        <li
                           key={index}
                           className={haveDesc ? 'clickable' : null}
                           onClick={haveDesc ? () => ativeDesc(index) : null}
                        >
                           {skill}
                           {
                              haveDesc ? <i className="fas fa-question-circle"></i> : null
                           }
                        </li>
                     )
                  })
               }
            </ul>

            {
               haveDesc ? <Description descs={descs} click={disableDesc} /> : null
            }
         </List>
      </Style>
   )
}

SkillCard.defaultProps = {
   haveDesc: false,
   skills: []
}

const Style = styled.div`
   display: grid;
   grid-template-rows: auto 1fr;

   border-radius: 10px;
   padding: 10px;
   width: 375px;
   height: 460px;
   
   color: #ffffff;
   background: #1d1d1d;

   h2 {
      font-size: 4rem;
   }
`

const List = styled.div`
   overflow: auto;
   font-size: 2.5rem;  
   max-height: 400px;
   border-radius: 0 0 5px 5px ;
   border: 2px solid #fff;
   color: ${props => props.theme.textColor};
   background: ${props => props.theme.backgroundColor} url(${background}) no-repeat center;
   background-size: cover;

   ul{
      padding: 5px;
      display: auto;
      list-style-position: inside;
      list-style-image: url(${props => props.theme.liStyle});
   }

   li{
      position: relative;
      margin-top: 5px;
   }

   .clickable {
      cursor: pointer;
   }

   .clickable:hover {
      color: ${props => props.theme.textHover};
   }

   ul svg {
      position: absolute;
      bottom: 0;
      top: 0;
      right: 5px;
      margin: auto;
      font-size: 1.5rem; 
   }

   .disable{
      display: none;
   }

   div{
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 5px;
      min-height: 100%;
      color: #ffffff;
      background: rgba(0, 0, 0, 0.6);
   }

   p  {
      font-size: 1.7rem;
      text-align: center;
      margin-top: 20px;
   }

   div button {
      position: absolute;
      right: 10px;
      top: 10px;
      cursor: pointer;
      background: none;
      border: none;
      height: 20px;
      width: 20px;
   }

   div svg {
      font-size: 2.5rem;
      color: #fff;
      height: 20px;
      width: 20px;
   }

   div svg:hover {
      color: blue;
   }
`
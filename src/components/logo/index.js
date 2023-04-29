import styled from 'styled-components'
import { useContext } from 'react'

import { logo } from '../../image/image.js'

import { ThemeContext } from '../../contexts/theme-context'

export const Logo = () => {
   const { theme } = useContext(ThemeContext)

   return (
      <Background theme={theme}>
         <img src={logo} alt='Logo pokédex' />
      </Background>
   )
}

const Background = styled.div`
   display: flex;
   align-items: center;
   height: 250px;
   width: 250px;
   background: url(${props => props.theme.logo}) no-repeat center center;
   background-size: cover;

   img{
      width: 250px;
      margin-bottom: 50px;
   }
`
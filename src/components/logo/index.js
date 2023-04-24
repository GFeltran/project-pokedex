import styled from 'styled-components'

import logo from '../../image/logo/logo.png'
import bg from '../../image/logo/pokebola.png'

export const Logo = () => {
   return (
      <Background>
         <img src={logo} alt='Logo pokédex' />
      </Background>
   )
}

const Background = styled.div`
   display: flex;
   align-items: center;
   height: 250px;
   width: 250px;
   background: url(${bg}) no-repeat center center;
   background-size: cover;

   img{
      width: 250px;
      margin-bottom: 90px;
   }
`
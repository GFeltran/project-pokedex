import styled from 'styled-components';

import { MenuHome } from '../components/components-home/menu-home';
import { PokemonsList } from '../components/components-home/pokemon-list';

const Home = () => {
   return (
      <Container>
         <MenuHome />

         <PokemonsList />
      </Container>
   )
}

const Container = styled.div`
   min-height: 100vh;
   display: grid;
   grid-template-areas: "aside main";
   grid-template-columns: 300px 1fr;
`

export default Home;
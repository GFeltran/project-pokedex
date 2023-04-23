import styled from 'styled-components';

import { Menu } from '../components/menu';

import { PokemonsList } from '../components/pokemon-list';

const Home = () => {
   return (
      <Container>
         <Menu />

         <Main>
            <PokemonsList />
         </Main>
      </Container>
   )
}

const Container = styled.div`
   min-height: 100vh;
   display: grid;
   grid-template-areas: "aside main"
   "aside main2";
   grid-template-columns: 300px 1fr;
`

const Main = styled.main`
   grid-area: main;
`

export default Home;
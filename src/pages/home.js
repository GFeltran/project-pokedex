import styled from 'styled-components';

import { Menu } from '../components/menu';

import { PokemonList } from '../components/pokemon-list';

const Home = () => {
   return (
      <Container>
         <Menu />

         <Main>
            <PokemonList />
         </Main>
      </Container>
   )
}

const Container = styled.div`
   min-height: 100vh;
   display: grid;
   grid-template-areas: "aside main";
   grid-template-columns: 300px 1fr;
`

const Main = styled.main`
   grid-area: main;
`

export default Home;
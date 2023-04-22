import styled from 'styled-components';

//import { Aside } from './aside';
import { Footer } from "../components/footer"
import { Header } from "../components/header"

import { PokemonList } from '../components/pokemon-list';

const Home = () => {
   return (
      <Container>
         <Header />

         <Main>
            <PokemonList />
         </Main>

         <Footer />
      </Container>
   )
}

const Container = styled.div`
   min-height: 100vh;
   display: grid;
   grid-template-areas: "header main"
                        "footer main "; 
   grid-template-columns: 300px 1fr;
   grid-template-rows: auto 70px;
`

const Main = styled.main`
   grid-area: main;
   height: 100vh;
   overflow-y: auto;
`

export default Home;
import styled from 'styled-components';

import { HomeProvider } from '../contexts/home-context';
import { MenuHome } from '../components/components-home/menu-home';
import { PokemonsList } from '../components/components-home/pokemon-list';

const Home = () => {
   return (
      <HomeProvider>
         <Style>
            <MenuHome /> 

            <PokemonsList />
         </Style>
      </HomeProvider>
   )
}

const Style = styled.div`
   min-height: 100vh;
   display: grid;
   grid-template-areas: "aside main";
   grid-template-columns: 300px 1fr;

   @media (max-width: 930px) {
      grid-template-areas: "aside"
                           "main";
      grid-template-rows: auto 1fr;
      grid-template-columns: 1fr;
   }
`

export default Home;
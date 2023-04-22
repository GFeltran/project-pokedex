import styled from "styled-components"

import { Footer } from "../components/footer"
import { Header } from "../components/header"


export const Aside = () => {

   return(
      <Styled>
         <Header />

         <Footer />
      </Styled>
   )
}

const Styled = styled.div`
   position: sticky;
   width: 300px;
   height: 100vh;

   .header{
      min-height: 100%;
   }
`
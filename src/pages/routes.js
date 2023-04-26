import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import Home from "./home";
import  PokemonDetails  from "./details";

export const AppRoutes = () => {
   return(
      <BrowserRouter>
         <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/pokemon/:id" element={<PokemonDetails />}/>
         </Routes>
      </BrowserRouter>
   )
}
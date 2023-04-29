import React, { createContext, useState } from "react";

export const DetailsContext = createContext({});

export const DetailsProvider = (props) => {
   const [ color, setColor ] = useState(null)

   return(
      <DetailsContext.Provider value={{color, setColor}}>
         {props.children}
      </DetailsContext.Provider>
   )
}
import React from "react";

export const Social = (props) => {
   return (
      <a 
      href={props.link} 
      target="_blank" rel="noopener noreferrer"
      className={props.name}
      >
         {props.social}
      </a>
   )
}

Social.defaultProps = {
   link: '#',
   name: 'Social Name',
   social: 'Social'
}
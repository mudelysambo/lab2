import React from "react";
import "./card.css";

function card({ src, alt , title, content, width = '300px', height = '400px' }) {
  return (
    <div className="card" style={{width: width, height }}>
     
     <div className="header">
       <img  src={src} alt={alt} style={{width: width, height: 'calc:(0.5 * '+ height +')' }}/>

     </div>
     <div className="body" style={{width: width, height: 'calc:(0.5 * '+ height +')' }}>
        <h2>{title}</h2>   
        <p>{content}</p>  
   
     </div>
      
    </div>
  );
}
export default card;
import React from "react";


const Header  = ({titulo}) =>  (  
        <h1>{ titulo }</h1>
);
 //Dar por implícito el return si se necesita menos código, de lo contrario
 //si se necesita hacer alguna operación, ocupar el return para anteponer código
 

export default Header;
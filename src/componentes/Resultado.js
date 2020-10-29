import React from 'react';
import Spinner from './Spinner';

const Resultado = ({cantidad, plazo, total}) => ( 
        <div className="u-full-width resultado">
            <h2>Resumen</h2>
            <p>La Cantidad solicitada es: ${cantidad}</p>
            <p>Su Plazo de pago es de: {plazo} meses</p>
            <p>Su pago mensual es de: { (total/plazo).toFixed(2) }</p>
            <p>Total a pagar: { parseInt(total) }</p>
        </div>
     );
 
export default Resultado;

import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Pregunta = ({setPresupuesto, setResto, setPregunta}) => {

    const [cantidad, setcantidad] = useState(0);
    const [error, seterror] = useState(false);

    const definirPresupuesto = e => {
        setcantidad(parseInt(e.target.value, 10));
    }

    const agregarPresupuesto = e => {
        e.preventDefault();
        if(cantidad < 1 || isNaN(cantidad)){
            seterror(true);
            return;
        }
        seterror(false);
        setPresupuesto(cantidad);
        setResto(cantidad);
        setPregunta(false);
    }
    
    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error
                ? <Error
                    mensaje="El presupuesto es incorrecto"  
                  />
                : null
            }

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
     );
}

Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setResto: PropTypes.func.isRequired,
    setPregunta: PropTypes.func.isRequired
}
 
export default Pregunta;
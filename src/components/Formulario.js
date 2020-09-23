import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({setgasto, setcreargasto}) => {
    
    const [Nombre, setNombre] = useState('');
    const [Cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);
    
    const addSpending = e => {
        e.preventDefault();
        if(Cantidad < 1 || isNaN(Cantidad) || Nombre.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
        const gasto = {
            Nombre,
            Cantidad,
            id: shortid.generate()
        }
        setgasto(gasto);
        setcreargasto(true);
        setNombre('');
        setCantidad(0);
    }

    return(
        <form
            onSubmit={addSpending}
        >
        <h2>Agrega tus gastos aquí</h2>

        {error
            ? <Error mensaje = "Ambos campos son obligatorios o Presupuesto incorrecto"/>
            : null
        }

        <div className="campo">
            <label>Nombre del gasto</label>
            <input
                type="text"
                className="u-full-width"
                placeholder="Por ejemplo: Transporte"
                value={Nombre}
                onChange={e => setNombre(e.target.value)}
            />
            <label>Cantidad a gastar</label>
            <input
                type="number"
                className="u-full-width"
                placeholder="Por ejemplo: 300"
                value={Cantidad}
                onChange={e => setCantidad(parseInt(e.target.value))}
            />
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </div>
    </form>
    );
}

Formulario.propTypes = {
    setgasto: PropTypes.func.isRequired,
    setcreargasto: PropTypes.func.isRequired
}
 
export default Formulario;
import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';


function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [resto, setResto] = useState(0);
  const [mostrarPregunta, setPregunta] = useState(true);
  const [gastos, setgastos] = useState([]);
  const [gasto, setgasto] = useState({});
  const [creargasto, setcreargasto] = useState(false);

  useEffect(() => {
    if (creargasto) {
      setgastos([
        ...gastos,
        gasto
      ]);
      const saldoRestante = resto - gasto.Cantidad;
      setResto(saldoRestante);
      setcreargasto(false);
    }
  }, [gasto, creargasto, gastos, resto]);

  return (
    <div className="container">
      <header>
          <h1>Gasto semanal</h1>
          <div className="contenido-principal contenido">
            
            {mostrarPregunta
              ? (
              <Pregunta
                setPresupuesto={setPresupuesto}
                setResto={setResto}
                setPregunta={setPregunta}
              />)
              : ( 
                <div className="row">
                  <div className="one-half column">
                    <Formulario
                      setgasto={setgasto}
                      setcreargasto={setcreargasto}
                    />
                  </div>
                  <div className="one-half column">
                    <Listado
                      gastos={gastos}
                    />

                    <ControlPresupuesto
                      presupuesto={presupuesto}
                      resto={resto}
                    />
                  </div>
                </div>  
               )
            }

            
          </div>
      </header>
    </div>
  );
}

export default App;

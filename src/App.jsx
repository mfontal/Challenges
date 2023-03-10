import './App.css';
import { useState } from "react";
import Formulario from './components/Formulario';
import Table from './components/Table';


function App() {
    const [reserves, setReserves] = useState([]);

    const onFormSubmit = (reserve) => {
        let found = reserves.find((x => x.row === reserve.row && x.seat === reserve.seat));
        if (!found) {
            setReserves([...reserves, reserve]);
        } else {
            alert(`La silla ${reserve.seat} en la fila ${reserve.row} está ocupada`);
        }
    }

    return (
        <div>
        <div className='comp'>
            <h1>Reserva de cine</h1>
            <h2>Parcial Milton Fontal</h2>
            <Formulario onFormSubmit={onFormSubmit}/>
            <Table reserves={reserves} />
        </div>
        </div>
    );
}

export default App;

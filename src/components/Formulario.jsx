import React, { useState } from "react";

export default function Formulario({onFormSubmit}) {
    const [name, setName] = useState("");
    const [row, setRow] = useState("");
    const [seat, setSeat] = useState("");

    const cbFormSubmit = (evt) => {
        evt.preventDefault();
        onFormSubmit({name, row, seat});
    }

    return (
        <div>
            <form onSubmit={cbFormSubmit}>
                <label>
                    Nombre
                    <input type="text" name="name" id="name" onChange={(evt) => setName(evt.target.value.toUpperCase())} />
                </label>
                <br />
                <label>
                    Fila
                    <input type="text" name="row" id="row" onChange={(evt) => setRow(evt.target.value.toUpperCase())} />
                </label>
                <br />
                <label>
                    Asiento
                    <input type="text" name="seat" id="seat" onChange={(evt) => setSeat(evt.target.value.toUpperCase())} />
                </label>
                <br />
                <input type="submit" value="Agregar" />
            </form>
        </div>
    );
}

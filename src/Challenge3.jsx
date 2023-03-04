import { useState } from "react";

const Challenge3 = ({value}) => {
    const [counter, setCounter] = useState(0);

    const handleAdd = () =>{
        setCounter(counter+1);
    };

    const substrack = () =>{
        setCounter(counter-1);
    };

    const reset = () =>{
        setCounter(value);
    };

    return (
        <>
            <h1>Counter</h1>
            <span>{ counter }</span>
            <button onClick={()=> handleAdd()}>Agregar 1</button>
            <button onClick={()=> substrack()}>Agregar 1</button>
            <button onClick={()=> reset()}>Agregar 1</button>
        </>
    );
};

export default Challenge3;
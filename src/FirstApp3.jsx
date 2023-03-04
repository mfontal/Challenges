import { useState } from "react";

const FirstApp3 = ({value}) => {
    const [counter, setCounter] = useState(0);

    const handleAdd = () =>{
        setCounter(counter+1);
    };

    return (
        <>
            <h1>Counter</h1>
            <span>{ counter }</span>
            <button onClick={()=> handleAdd()}>Agregar 1</button>
        </>
    );
};

export default FirstApp3;
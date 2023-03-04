const FirstApp2 = ({ value} ) => {

    const sumarNumero = () => {
        console.log('calling sumatoria')
    }

    return (
        <>
            <h1> Counter </h1>
            <span> {value} </span>
            <button onClick={() => sumarNumero()}> +1 </button>
        </>
    )
} 

export default FirstApp2;
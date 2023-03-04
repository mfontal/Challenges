import { useState } from "react";

export const Challenge4 = () => {
    const [categories, setCategories] = useState(['first categories'])
    const [category, setCategory] = useState('')
    
    const onAddCategory = () => {
        setCategories(list => [...list, category])
        setCategory('')
    }

    const onSetCategory = (evento) => {
        setCategory(evento.target.value)
    }

    return(
        <>
            <input type="text" value={category} onChange={(evento) => onSetCategory(evento)} />
            <button onClick={() => onAddCategory()}>Add Category</button>
            <ol>
                {
                    categories.map(
                        (category, index) =>
                        {
                            return <li key={index}>{category}</li>
                        }
                    )
                }
            </ol>

        </>
    )
        
    
}
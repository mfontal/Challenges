import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState("")

    const onInputChange = (evt) => {
        setInputValue(evt.target.value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        onAddCategory(inputValue);
        setInputValue('')
    }

    return (
        <form onSubmit={(evt) => onSubmit(evt)}>
            <input
                type='text'
                placeholder="Buscar"
                value={inputValue}
                onChange={(evt) => onInputChange(evt)}
            />
        </form>
    )
}
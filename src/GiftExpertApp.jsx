import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid2 } from "./components/GifGrid2";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Zodiac'])

    const onAddCategory = (category) => {
        setCategories(list => [...list, category])
    }

    return (
        <>
            <h1>GifExpert</h1>

            <AddCategory onAddCategory={onAddCategory} />
            {
                categories.map(
                    (category, index) => {
                        return <GifGrid2 category={category} key={index} />
                    }
                )
            }


        </>
    )


}
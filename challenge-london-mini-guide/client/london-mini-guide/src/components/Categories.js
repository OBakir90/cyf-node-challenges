import React from 'react'
import categories from '../api/categories.json'

const Categories = ({ handleCategory }) => {

    const handleClick = (e) => {
        handleCategory(e.target.value)
    }

    return (
        <div >
            <h2>Categories</h2>
            <div>
                {categories.map((category, i) => (
                    <button type="button" key={i} value={category.name} onClick={handleClick}>{category.name}</button>
                ))}
            </div>

        </div>
    )
}

export default Categories

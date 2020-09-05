import React from 'react'
import categories from '../api/categories.json'

const Categories = ({ handleCategory, category }) => {

    const handleClick = (e) => {
        handleCategory(e.target.value)
    }

    return (
        <div >
            <h2>Categories</h2>
            <div>
                {categories.map((ctegory, i) => (
                    <button type="button" key={i} value={ctegory.name} onClick={handleClick} style={{ backgroundColor: ctegory.name === category ? '#75B4C8' : '#D0D3D4' }}>{ctegory.name}</button>
                ))}
            </div>
        </div>
    )
}

export default Categories

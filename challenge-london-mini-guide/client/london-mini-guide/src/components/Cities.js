import React, { useState } from 'react'
import cities from '../api/cities.json'

const Cities = ({ handleCityChange }) => {

    const handleChange = (e) => {
        handleCityChange(e.target.value.toLowerCase())
    }

    return (
        <div>
            <label>Choose a city:</label>
            <select name="cities" id="cities" onChange={handleChange}>
                <option>Select a City</option>
                {cities.map((city, id) => (
                    <option
                        key={id}
                        value={city.name}>
                        {city.name}
                    </option>
                ))}
            </select>
        </div >

    )
}

export default Cities

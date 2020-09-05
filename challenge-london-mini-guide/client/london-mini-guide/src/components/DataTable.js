import React, { useState, useEffect } from 'react'
import Harrow from '../api/Harrow.json'
import Heathrow from '../api/Heathrow.json'
import Stratford from '../api/Stratford.json'


const DataTable = ({ category, city }) => {
    const [selectedCategory, setselectedCategory] = useState(null)
    const [selectedCity, setSelectedCity] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {
        setselectedCategory(category.toLowerCase())
        setSelectedCity(city)
        handleData(city)
    }, [category, city])

    const handleData = (city) => {
        city === 'Heathrow' && setData(Heathrow)
        city === 'Harrow' && setData(Harrow)
        city === 'Stratford' && setData(Stratford)
    }

    return (
        <div>
            <h3>Here you are</h3>
            <table style={{ width: '100%' }}>
                <thead>
                    <tr>
                        {data && data && Object.keys(data[selectedCategory][0]).map((p, i) => {
                            return (
                                <th>
                                    {p}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data && data[selectedCategory].map((p, i) => {
                        return (
                            <tr
                                key={i}
                            >
                                {Object.values(p).map((k, i) => {
                                    return <td key={i}>{k}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable

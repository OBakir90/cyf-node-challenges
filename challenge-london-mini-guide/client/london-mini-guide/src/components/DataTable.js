import React, { useState, useEffect } from 'react'


const DataTable = ({ category, city }) => {
    // const [selectedCategory, setselectedCategory] = useState(null)
    // const [selectedCity, setSelectedCity] = useState(null)
    const [data, setData] = useState(null)

    // useEffect(() => {
    //     setselectedCategory(category.toLowerCase())
    //     setSelectedCity(city)
    // }, [category, city])

    useEffect(() => {
        fetch(`https://halit-london-guide.herokuapp.com/${city}/${category}`)
            .then(data => data.json())
            .then(data => setData(data))
    }, [category, city])

    return (
        <div style={{ width: '80%' }}>
            {data && console.log(data)}
            <h3>Here you are</h3>
            <table style={{ width: '70%' }}>
                <thead>
                    <tr>
                        {data && Object.keys(data.map((p, i) => {
                            return (
                                <th>
                                    {p}
                                </th>
                            );
                        }))}
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((p, i) => {
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

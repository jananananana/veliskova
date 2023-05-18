import React, { useEffect, useState } from 'react';
import jsonData from './content/links/nav.json';


export default function Navbar(){
    const [data, setData] = useState([]);

    useEffect(() => {
        const dataArray = Object.values(jsonData);
        setData(dataArray);

      }, []);


    return (
        <nav className="j-header">
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.text}</li>
                ))}

            </ul>
        </nav>
    )
    
    
}
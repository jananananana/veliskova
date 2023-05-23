import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import jsonData from '../content/links/nav.json';


export default function Navbar(){
    const [data, setData] = useState([]);

    useEffect(() => {
        const dataArray = Object.values(jsonData);
        setData(dataArray);

      }, []);


    return (
        <nav>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        <Link to={item.href}>{item.text}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
    
    
}

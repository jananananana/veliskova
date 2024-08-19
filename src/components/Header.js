import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <header className='top-header'>
           <div className='top-header__container'>

                <h2 className='top-header__left b-heading b-heading--3'>
                    <Link to={'/'} className='j-button--plain-inverse'> 
                        Jana 
                        <span className='b-heading__highlight'> Veliskova</span>
                    </Link>
                
                </h2>

                <Navbar/>
           </div>
  
        </header>
    )
}

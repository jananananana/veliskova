import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <header className='top-header'>
            <h1 className="top-header__left b-heading--1">
                <Link to={'/'} className='j-button--plain-inverse'> Hi! I'm <span className='b-heading--1__highlight'>Jana</span></Link>
               
            </h1>

            <Navbar/>

        </header>
    )
}

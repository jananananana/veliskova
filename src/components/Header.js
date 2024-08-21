import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BorderedImage = styled.header`
    background-image: url(${(props)=>props.imgUrl});
`;

export default function Header(){
    return (
        <BorderedImage imgUrl={process.env.PUBLIC_URL + '/images/borders/lines.svg'} className='top-header'>
           <div className='top-header__container'>

                <h2 className='top-header__left b-heading b-heading--3'>
                    <Link to={'/'} className='j-button--plain-inverse'> 
                        Jana 
                        <span className='b-heading__highlight'> Veliskova</span>
                    </Link>
                
                </h2>

                <Navbar/>
           </div>
  
        </BorderedImage>
    )
}

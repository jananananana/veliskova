import React from "react";
import styled from 'styled-components';
import Icons from './assets/Icons';

const BorderedImage = styled.div`
    background-image: url(${(props)=>props.imgUrl});
`;

export default function Mainbio(){
    
    return (
        <BorderedImage imgUrl={process.env.PUBLIC_URL + '/images/borders/lines.svg'}  className="j-home__mainbio">
            <div className="j-home__container j-home__mainbio--container">
                <p className="j-home__title">
                    Hello! I'm
                </p>
                <h1 className="j-home__heading b-heading b-heading--1">Jana Veliskova</h1>
                <div className="j-home__experiences">
                    <p className="j-home__experience-item">I am a web developer, product manager, and UX designer. I'm passionate about creating accessible, performant, and userful digital experience.</p>
                </div>
                <button className="j-home__contact j-button">Contact Me</button>
                <div className="j-home__pic-container">

                    <BorderedImage imgUrl={process.env.PUBLIC_URL + '/images/borders/border.svg'} className="j-home__pic-border">
    
                        <img className="j-home__pic" src={process.env.PUBLIC_URL + '/images/portraits/photo-8.jpg'}  alt="Jana standing in a red dress with city in the background" />
                        <div className="j-home__pic-atr">Photo by <a className="j-button--plain" href="https://stepniowski.com/" target="_blank">Marek Stepniowski</a></div>

                    </BorderedImage>
                </div>
                <div className="j-home__social">
                    <aside className="j-home__social-inner">
                        <span className="j-home__social-inner-text">Follow me on:</span>
                        <Icons socialType="linkedin"/>
                        <Icons socialType="github"/>
                        <Icons socialType="instagram"/>
                        <Icons socialType="strava"/>
                    </aside>
                </div>
            </div>
      </BorderedImage>
    )
}

import React from "react";

export default function Skills(){
    
    return (
        <div className="j-home">
            <main className="j-home__desc">
                <ul className="j-home__experiences">
                    <li className="j-home__experience-item">I'm a data-driven, creative, technical <span className="j-home__highlight">product lead</span></li>
                    <li className="j-home__experience-item">I create delightful <span className="j-home__highlight">user experiences</span></li>
                    <li className="j-home__experience-item">My <span className="j-home__highlight">code</span> is so clean you can eat sushi off of it</li>
                    <li className="j-home__experience-item">I <span className="j-home__highlight">run</span> ultra marathons and <span className="j-home__highlight">coach</span> long distance runners</li>
                </ul>
            </main>
            <div className="j-home__pic-container">
                <img className="j-home__pic" src={process.env.PUBLIC_URL + '/images/portraits/photo-9.jpg'}  alt="Jana standing in a red dress with city in the background" />
                <div className="j-home__pic-atr">Photo by <a className="j-button--plain" href="https://stepniowski.com/" target="_blank">Marek Stepniowski</a></div>
            </div>

      </div>
    )
}

import React from 'react';

export default function About(){
    
    return (
        <main className="j-home">
            <div className="j-home__desc">
                This site is undergoing some construction.
            </div>
            <div className="j-home__desc">
                <ul className="j-home__experiences">
                    <li className="j-home__experience-item">
                        <h2>
                            About This Site
                        </h2>
                    </li>
                    <li className="j-home__experience-item">
                        This site uses a color theme from <a target="_blank" href="https://www.colourlovers.com/palette/2413183/City_of_God">Colour Lovers: City of God</a>
                    </li>
                    <li className="j-home__experience-item">
                        This site uses icons from <a target="_blank" href="https://www.colourlovers.com/palette/2413183/City_of_God">Hero Icons</a> and Material UI
                    </li>
                </ul>
            </div>
        </main>
    )
}

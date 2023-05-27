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
                        About This Site
                    </li>
                    <li className="j-home__experience-item">
                        This site uses a color theme from <a href="https://www.colourlovers.com/palette/2413183/City_of_God">Colour Lovers: City of God</a>
                    </li>
                    <li className="j-home__experience-item">
                        There's nothing uncessary here. No unwanted dependencies. No bloated CSS libraries. HTLM isn't div soup. The React is neat.
                    </li>
                </ul>
            </div>
        </main>
    )
}

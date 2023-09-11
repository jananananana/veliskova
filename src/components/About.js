import React from 'react';

export default function About(){
    
    return (
        <main className="j-home">
            <div className="j-home__desc">
                <ul className="j-home__experiences">
                    <li className="j-home__experience-item">
                        <h2>
                            About Jana
                        </h2>
                    </li>
                    <li className="j-home__experience-item">
                        <div>
                            With over a decade of experience spanning product management, UX, and front-end engineering, Jana brings a multifaceted skill set to the tech industry.
                            She has extensive experience in the product development lifecycle, specializing in delivering products iteratively in close collaboration with engineering, product, design, stakeholders, and customers.
                        </div>
                        <div>
                            Her approach is rooted in both qualitative and quantitative data analysis, ensuring that her decisions are not just informed but also well-documented for scalable growth.
                        </div>
                        <div>
                            An advocate for community involvement, Jana is a regular at various tech meetups and conferences, having spoken at events like UX Bar Camp DC, Philly Tech Week, PANMA, Code for American, and the Front-End Philly Meetup. She also led the Girl Develop It Philadelphia book club, aimed at empowering women in tech.
                        </div>
                        <div>
                            Jana holds a BA in History from <a href="https://www.cornell.edu/search/people.cfm?netid=jv99">Cornell University</a>.
                        </div>
                    </li>
                </ul>
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

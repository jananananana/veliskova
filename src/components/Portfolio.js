import React, { useEffect, useState } from 'react';
import * as shajs from 'sha.js'; // Import the sha.js library
import portfolioData from '../content/portfolio/portfolio.json';
import speakingData from '../content/portfolio/speaking.json';

 
console.log(shajs('sha512').update('StarTrekTNGisBetterThanStarWars').digest('hex'))



export default function Portfolio(){
    const portfoliopass = '8af306bb69bb8d6420ce1f744deb8f62a159cec1fc1028398c3cd74f28e3488591bdd00e1190f0e977d249c4e3f27a854c1cc72cd8dea52846e625c75318073e';
    const [shouldLoadComponent, setShouldLoadComponent] = useState(true);
    const [data, setData] = useState([]);

    const [activeIndex, setActiveIndex] = useState(null);


    const toggleClass = (index) => {
        setActiveIndex(index);
        };

    useEffect(() => {
        const portfolioDataArr = Object.values(portfolioData);
        setData(portfolioDataArr);
        }, []);

    return (
        <main className="j-home j-portfolio">
            {/* <div className="j-home__pass-area">
                <label className="j-home__label" htmlFor="pass-input">Enter Password to View This Area</label>
                <input className="j-home__input" id= "pass-input" type="text" />
            </div>
            <div sha512='8af306bb69bb8d6420ce1f744deb8f62a159cec1fc1028398c3cd74f28e3488591bdd00e1190f0e977d249c4e3f27a854c1cc72cd8dea52846e625c75318073e'>
                <div>
                    
                   
                </div>
            </div> */}
            <div>
                <div className="portfolio-container">
                    {/* Work Samples Section */}
                    <section className="j-work-samples-section">
                            <ul>
                                {data.map((item, index) => (
                                    <li className='j-sample' key={index}>
                                        <span className='j-button--plain-inverse'>{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                    </section>

                    {/* Speaking Engagements Section */}
                    <section className="j-portfolio__item">
                        

                        {data.map((item, index) => (
                            <>
                            <h2>Product and Design Work</h2>
                            <ul>
                                {item.type === "work" && (
                                    <li>{item.text} speakingh</li>
                                    )}
                            </ul>
                            <h2>Speaking Engagements</h2>
                            <ul>
                                {item.type === "speaking" && (
                                    <li>{item.text} work</li>
                                    )}
                            </ul>
                            </>
                            
                        ))}
                    </section>
                </div>

            </div>
        </main>

    )
}

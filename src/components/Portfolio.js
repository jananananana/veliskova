import React, { useState } from 'react';
import * as shajs from 'sha.js'; // Import the sha.js library

 
console.log(shajs('sha512').update('StarTrekTNGisBetterThanStarWars').digest('hex'))



export default function Portfolio(){
const portfoliopass = '8af306bb69bb8d6420ce1f744deb8f62a159cec1fc1028398c3cd74f28e3488591bdd00e1190f0e977d249c4e3f27a854c1cc72cd8dea52846e625c75318073e';
const [shouldLoadComponent, setShouldLoadComponent] = useState(true);

    return (
        <main className="j-home">
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

      {/* Clients Section */}
      <section className="clients-section">
        <h2>Clients</h2>
        <section>My clients have included the following either through full-time employment or consulting work.</section>
        <ul>
          <li>Client 1</li>
          <li>Client 2</li>
          <li>Client 3</li>
          <li>Client 4</li>
        </ul>
      </section>

      {/* Work Samples Section */}
      <section className="work-samples-section">
        <h2>Work Samples</h2>
        <div className="work-sample">
          <h3>Project 1</h3>
          <p>Description of project 1</p>
        </div>
        <div className="work-sample">
          <h3>Project 2</h3>
          <p>Description of project 2</p>
        </div>
        <div className="work-sample">
          <h3>Project 3</h3>
          <p>Description of project 3</p>
        </div>
      </section>

      {/* Speaking Engagements Section */}
      <section className="speaking-engagements-section">
        <h2>Speaking Engagements</h2>
        <ul>
          <li>Conference 1 - Topic 1</li>
          <li>Conference 2 - Topic 2</li>
          <li>Webinar 1 - Topic 3</li>
        </ul>
      </section>
    </div>

            </div>
        </main>

    )
}

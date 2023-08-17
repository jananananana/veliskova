import React, { useState } from 'react';
import * as shajs from 'sha.js'; // Import the sha.js library

 
console.log(shajs('sha512').update('StarTrekTNGisBetterThanStarWars').digest('hex'))



export default function Portfolio(){
const portfoliopass = '8af306bb69bb8d6420ce1f744deb8f62a159cec1fc1028398c3cd74f28e3488591bdd00e1190f0e977d249c4e3f27a854c1cc72cd8dea52846e625c75318073e';
const [shouldLoadComponent, setShouldLoadComponent] = useState(true);

    return (
        <main className="j-home">
            <div className="j-home__desc">
                <label htmlFor="pass-input">Enter Password to View This Area</label>
                <input id= "pass-input" type="text" />
            </div>
            <div sha512='8af306bb69bb8d6420ce1f744deb8f62a159cec1fc1028398c3cd74f28e3488591bdd00e1190f0e977d249c4e3f27a854c1cc72cd8dea52846e625c75318073e'>
                <div>
                    SHOULD BE HIDDEN
                   
                </div>
            </div>
        </main>

    )
}

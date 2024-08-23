import React from "react";

export default function Clients(){
    
    return (
        <div className="j-home__clients">
            <div className="j-home__container">
                <h2 className="j-skills__heading b-heading b-heading--2">Clients</h2>
                <div className="j-skills__subtitle" role="doc-subtitle">
                    I have a strong background in front-end development, User Experience research, and product management.
                    My industry experience is predominantly in financial services and many of my projects have strong Know Your Customer (KYC) components.
                    My passion for accessibility drives my work and I focus on creating effective, secure, delightful, and user-friendly solutions.
                </div>
                {/* soft */}
                <ul>
                    <li>
                        Technical Product Management
                    </li>
                    <li>
                        Accessibility
                    </li>
                    <li>
                        UX Research
                    </li>
                    <li>
                        Design Systems
                    </li>
                </ul>
                {/* hard */}
                <ul>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        UI Development
                    </li>
                    <li>
                        React
                    </li>
                    <li>
                        CSS/Sass
                    </li>
                </ul>
            </div>
        </div>
    )
}

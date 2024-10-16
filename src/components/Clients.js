import React from "react";

export default function Clients(){
    
    return (
        <div className="j-home__clients">
            <div className="j-home__container">
                <h2 className="j-skills__heading b-heading b-heading--2">Clients</h2>
                <div className="j-skills__subtitle" role="doc-subtitle">
                   My range of clients spans from small businesses to large corporations. I have worked with clients in the financial services, e-commerce, and education sectors.
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

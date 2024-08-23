import React from "react";
import Mainbio from './Mainbio';
import Skills from './Skills';
import Servicess from './Servicess';
import Clients from './Clients';

export default function Home(){
    
    return (
        <div className="j-home">
            <Mainbio/>
            <Skills/>
            <Servicess/>
            <Clients/>
      </div>
    )
}

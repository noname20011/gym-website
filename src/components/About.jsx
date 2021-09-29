import React from 'react'

import aboutImg from '../img/about.png'

function About() {
    return (
        <div id="about">
            <div className="about-image">
                <img src={aboutImg} alt="About" />
            </div>
            <div className="about-text">
                <h1>LEARN MORE ABOUT US</h1>
                <p className="detail">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis dolorum tenetur non beatae eos natus voluptate, quo minus adipisci, optio repellendus nemo aperiam id cupiditate.</p>
                <button>READ MORE</button>
            </div>
        </div>
    )
}

export default About

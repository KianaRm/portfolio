import React from "react"
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import html_logo from '../../assets/html.svg'
import css_logo from '../../assets/css.svg'
import js_logo from '../../assets/javascript.svg'
import react_logo from '../../assets/react.svg'
import bootstrap_logo from '../../assets/bootstrap.svg'
import sass_logo from '../../assets/sass.svg'
import jquery_logo from '../../assets/jquery.svg'

const About = ()=> {
    return (
       <div id="about" className="about">
         <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt=""/>
         </div>
         <div className="about-section">
            <div className="about-right">
               <div className="about-text">
                  <p>I am Kiana Ramzanzadeh a 22 year old Front-End developer who is recently graduated in computer programming from Ankara University with the 3rd place in the whole assosiated period. I've also passed 3 months intern period in Front-End based on React.<br/>I'm an active and energic person who loves communicating and learning new things. I also know 3 languages which give me a great chance to have wider commiunications and relationships in both social and professional field.
                  </p>
               </div>
            </div>
            <div className="about-left">
               <div className="skills-countainer">
               <p className="skills-title">Technical skills</p>
               <div className="about-skills">
               <img src={html_logo} alt="HTML" className="logo"/>
               <img src={css_logo} alt="CSS" className="logo"/>
               <img src={js_logo} alt="JavaScript" className="logo"/>
               <img src={react_logo} alt="React" className="logo"/>
               <img src={jquery_logo} alt="JQuery" className="logo"/>
               <img src={bootstrap_logo} alt="Bootstrap" className="logo"/>
               <img src={sass_logo} alt="Sass" className="logo"/>
               </div>
            </div>
         </div>
         </div>
       </div>
    )
}

export default About

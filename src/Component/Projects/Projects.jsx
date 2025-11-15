import React from "react"
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import commerce_img from '/src/assets/commerce.png'
import network_img from '/src/assets/network.png'
import google_img from '/src/assets/google.png'
import todo_img from '/src/assets/todoi.png'
import tip_img from '/src/assets/tip.png'
import weather_img from '/src/assets/weather.png'
import noteapp_img from '/src/assets/noteapp.png'





/*const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt=""/>
      </div>
      <div className="projects-countainer">
        <div className="project">
            <h3>React Projects</h3>
            <p>Here are my project in which React and Redux are used</p>
            <div className="project-readmore">
            <a href="https://github.com/KianaRm/React-projects" target="
                _blank"><p>Source code</p></a>
                <img src={arrow_icon} alt="arrow-icon" />
            </div>
        </div>
        <div className="project">
            <h3>Angular Projects</h3>
            <p>Here are my mobile application projects I did in university using Angular and Ionic</p>
            <div className="project-readmore">
                <a href="https://github.com/KianaRm/Angular-Ionic-projects" target="
                _blank" ><p>Source code</p></a>
                <img src={arrow_icon} alt="arrow-icon" />
            </div>
        </div>
      </div>
    </div>
    
  )
}
*/


const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="category-block">
        <h2 className="category-title">Harvard CS50W Projects</h2>
        <div className="gallery-grid">
          <a 
          href="https://harvardcs50-socialnetworkingapp-production.up.railway.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="gallery-item">
            <img src={network_img} alt="Harvard Project 3" />
            <p>A social network simulation using Django and SQLite.</p>
          </a>
          <a 
          href="https://harvardcs50-commerce-production.up.railway.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="gallery-item">
            <img src={commerce_img} alt="Harvard Project 4" />
              <p>An advanced e-commerce platform built for CS50W.</p>
          </a>
          <a 
          href="https://harvard-cs-50-google-clone.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
           className="gallery-item">
            <img src={google_img} alt="Harvard Project 1" />
            <p>A Google Search clone built with HTML, CSS, and APIs.</p>
          </a>
        </div>
      </div>

      <div className="category-block">
        <h2 className="category-title">React Projects</h2>
        <div className="gallery-grid">
          <a 
          href="https://react-to-do-list-pearl.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
           className="gallery-item">
            <img src={todo_img} alt="React Project 3" />
            <p>A clean and responsive to-do list application built with React, featuring an intuitive UI and smooth task management.</p>
          </a>
          <a 
          href="https://react-tip-calculator-orpin.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
           className="gallery-item">
            <img src={tip_img} alt="React Project 2" />
            <p>A tip-sharing app built with React.js.</p>
          </a>
           <a 
          href="https://react-weather-app-eight-chi.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
           className="gallery-item">
            <img src={weather_img} alt="React Project 1" />
            <p>A weather forecast app using external APIs.</p>
          </a>
        </div>
      </div>

      <div className="category-block">
        <h2 className="category-title">Angular & Ionic Projects</h2>
        <div className="gallery-grid">
          <a 
          href="https://angular-ionic-note-app.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
           className="gallery-item">
            <img src={noteapp_img} alt="Angular Project 1" />
            <p>A mobile note-taking application built with Angular & Ionic, featuring full CRUD functionality and a smooth, user-friendly interface.</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects


/* Small harmless change to ensure document update differs from previous version */
/* End of Projects Component and styles */


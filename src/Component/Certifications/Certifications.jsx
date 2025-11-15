import React from "react"
import './Certifications.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import libraries_certification from '../../assets/libraries.jpg'
import js_certification from '../../assets/js.jpg'
import web_design_certification from '../../assets/web-design.jpg'
 

const Certifications = () => {
    return (
        <div id="certifications" className="certifications">
            <div className="certifications-title">
              <h1>Certifications</h1>
              <img src={theme_pattern} alt=""/>
            </div>
            <div className="certifications-countainer">
                <div className="certification">
                    <div className="certification-pic">
                     <img src={web_design_certification} alt="Web Design Certification" />
                     <a href="https://www.freecodecamp.org/certification/KianaRm/responsive-web-design" target="_blank"><div className="overlay-text">Check the certification and reletive projects</div></a>
                    </div>
                    <h3>Responsive Web Design</h3>
                </div>
                <div className="certification">
                    <div  className="certification-pic">
                      <img src={js_certification} alt="JavaScript Certification" />
                      <a href="https://www.freecodecamp.org/certification/KianaRm/responsive-web-design" target="_blank"><div className="overlay-text">Check the certification and reletive projects</div></a>
                    </div>
                    <h3>JavaScript Algorihms And Data Strutures</h3>
                </div>
                <div className="certification">
                <div  className="certification-pic">
                    <img src={libraries_certification} alt="Libraries Certification" />
                    <a href="https://www.freecodecamp.org/certification/KianaRm/responsive-web-design" target="_blank"><div className="overlay-text">Check the certification and reletive projects</div></a>
                </div>
                    <h3>Frontend Development Libraries</h3>
                </div>
            </div>
        </div>
        
    )
}
    

export default Certifications



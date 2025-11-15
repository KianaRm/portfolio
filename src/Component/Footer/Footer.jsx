import React from "react";
import './Footer.css'

const Footer = () => {
    return (
       <div className="footer">
         <hr/>
         <div className="footer-bottom">
            <p className="footer-bottom-left">@ 2024 Kiana Ramzanzadeh. All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Term of services</p>
                <p>privacy policy</p>
            </div>
         </div>
       </div>
    ) 
}

export default Footer
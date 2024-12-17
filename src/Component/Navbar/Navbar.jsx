import React, { useState, useRef  } from "react";
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from '../../assets/logo.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = () => {
  
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () =>{
     menuRef.current.style.right="0";
  }
  const closeMenu = () =>{
    menuRef.current.style.right="-350px";
 }


  return (
    <div className="navbar"> 
       <div className="nav-logo">
        <h1>KianWeb</h1>
        <img src={theme_pattern} alt=""/>
      </div>
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open"/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className="anchor-link" href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu === "home"? <img src={underline} alt="" />:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={() => setMenu("about")}>About me</p></AnchorLink>{menu === "about"? <img src={underline} alt="" />:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#projects"><p onClick={() => setMenu("projects")}>Projects</p></AnchorLink>{menu === "projects"? <img src={underline} alt="" />:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#certifications"><p onClick={() => setMenu("certifications")}>Certifications</p></AnchorLink>{menu === "certification"? <img src={underline} alt="" />:<></>}</li>
        
      </ul>
      <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Connect with me</p></AnchorLink></div>
    </div>
  )
}

export default Navbar

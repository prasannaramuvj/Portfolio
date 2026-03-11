import React, { useState, useRef } from 'react'
import './Navbar.css'
import './NavbarResponsive.css'
import { FaLinkedin } from "react-icons/fa";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { FaGithubSquare } from "react-icons/fa";



const Navbar = () => {

  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0px";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-300px";
  }
  return (
    <div className="navbar">
      <h2>PR</h2>
      <img src={menu_open} alt="menu-open-icon" className='nav-mob-open' onClick={openMenu} />

      <ul className="nav-menu" ref={menuRef}>
        <img src={menu_close} alt="menu-close-icon" className='nav-mob-close' onClick={closeMenu} />

        <li>
          <AnchorLink className='anchor-link' offset={50} href="#home"><p onClick={() => setMenu('home')}>Home</p></AnchorLink>{menu === "home" ? <span className="nav-underline" /> : null}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href="#about"><p onClick={() => setMenu('about')} >About-me</p>
          </AnchorLink>{menu === "about" ? <span className="nav-underline" /> : null}
        </li>
        <li><AnchorLink className='anchor-link' offset={50} href="#services">
          <p onClick={() => setMenu('services')}>Services</p></AnchorLink>{menu === "services" ? <span className="nav-underline" 
          /> : null}
          </li>
        <li><AnchorLink className='anchor-link' offset={50} href="#work"><p onClick={() => setMenu('portfolio')}>Portfolio</p></AnchorLink>{menu === "portfolio" ? <span className="nav-underline" /> : null}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#experience"><p onClick={() => setMenu('experience')}>Experience</p></AnchorLink>{menu === "experience" ? <span className="nav-underline" /> : null}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#contact"><p onClick={() => setMenu('contact')}>Contact</p></AnchorLink>{menu === "contact" ? <span className="nav-underline" /> : null}</li>
      </ul>
      <div className="nav-social-connect">
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/prasanna-r-977b49251/" target="_blank" rel="noopener noreferrer" className="a">
            <span className='icon'><FaLinkedin size={30}/></span>
          </a>
        </div>
        <div className="git">
        <a href="https://github.com/prasannaramuvj/PrasannaR.git" target="_blank" rel="noopener noreferrer" className="a">
           <span className='icon'><FaGithubSquare size={30} /></span></a>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
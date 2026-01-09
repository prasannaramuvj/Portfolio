import React from 'react'
import './Hero.css'
import './HeroResponsive.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="image of person" />
      <h1> <span>I'm Prasanna R</span> Frontend Developer</h1>
      <p>Passionate Frontend Developer turning ideas into interactive UIs</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href="#contact">Connect with me</AnchorLink></div>
        <a href="/Prasanna.pdf" download style={{ textDecoration: "none", color: "white" }}>
          <div className="hero-resume">My Resume</div>
        </a>

      </div>
    </div>
  )
}

export default Hero
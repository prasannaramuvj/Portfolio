import React from 'react'
import './Experience.css'
import './ExperienceResponsive.css'
import experience from '../../assets/experience'
import theme_pattern from '../../assets/theme_pattern.svg'

const Experience = () => {
  return (
    <div className="experience" id='experience'>
      <div className="experience-title">
        <h1>Experience</h1>
        <img src={theme_pattern} alt="theme" className='theme-pallete' />
      </div>
      <div className="experience-container">
        {experience.map((exp, index) => {
          return (
            <div className="experience-format" key={index}>
              <div className="experience-role">
                <h2>{exp.role}</h2>
                <p>{exp.year}</p>
              </div>
              <div className="experience-company">
                <h3>{exp.company_name}</h3>
                <p className="experience-location">{exp.location}</p>
                <p>{exp.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Experience
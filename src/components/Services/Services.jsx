import React from 'react'
import './Services.css'
import './ServicesResponsive.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import services from '../../assets/services_data'

const Services = () => {
  return (
    <div className="services" id='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="pattern img" className='theme-pallete' />
      </div>
      <div className="services-container">
        {services.map((service, index) => {
          return <div className="services-format" key={index}>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <span>{service.s_img ? <img src={service.s_img} alt={service.s_name} className='services-image' /> : <></>}</span>
            <p>{service.s_desc}</p>
            {/* <div className="services-readmore">
              <p>Read More</p>
              <img src={arrow} alt="arrow-icon" />
            </div> */}
          </div>
        })}
      </div>
    </div>
  )
}

export default Services
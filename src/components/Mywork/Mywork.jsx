import React from 'react'
import './Mywork.css'
import './MyworkResponsive.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import myworkdata from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Mywork = () => {
  return (
    <div className="mywork" id='work'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="bg-img" className='theme-pallete' />
      </div>
      <div className="mywork-container">
        {myworkdata.map((work, index) => {
          return <img key={index} src={work.w_img} alt="project-img" />
        })}

      </div>
      {/* <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="arrow icon" />
      </div> */}
    </div>
  )
}

export default Mywork
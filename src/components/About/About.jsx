import './About.css'
import './AboutResponsive.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="theme-pattern" className='theme-pallete' />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="person img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am a motivated Frontend Developer with hands-on experience in HTML, CSS, Bootstrap, JavaScript, and React. I enjoy building responsive and user-friendly web applications and continuously improving my skills through real-world projects and internships.</p>
            

          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML && CSS</p> <hr  style={{width:"95%"}}/></div>
            <div className="about-skill"><p>JavaScript</p> <hr  style={{width:"70%"}}/></div>
            <div className="about-skill"><p>React JS</p> <hr  style={{width:"75%"}}/></div>


          </div>

        </div>
      </div>
      {/* <div className="about-acheivements">
      <div className="about-acheivement">
                  <h1>10+</h1>
                  <p>YEARS OF EXPERIENCE</p>
      </div>
      <hr />
      <div className="about-acheivement">
                  <h1>10+</h1>
                  <p>YEARS OF EXPERIENCE</p>
      </div>
      <hr />
      <div className="about-acheivement">
                  <h1>10+</h1>
                  <p>YEARS OF EXPERIENCE</p>
      </div>
      <hr />
      </div> */}
    </div>
  )
}

export default About
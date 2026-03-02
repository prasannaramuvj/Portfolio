import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Mywork from './components/Mywork/Mywork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Experience from './components/Experience/Experience'


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Mywork />
      <Experience/>
      <Contact />
      {/* <Navbar/> */}
      <Footer />

      <ToastContainer />
    </>
  )
}

export default App
import React from 'react'

import img from '../assets/picofme (1).png'
import express from '../assets/expressjs.png'
import nodejs from '../assets/nodeJs.png'
import mongoDb from '../assets/mongoDb.png'
import plane1 from '../assets/pkane2-removebg-preview.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import github from '../assets/github.png'
import curvedLines from '../assets/curved-arrow.svg'
import '../styles/Home.css'
import tailwind from '../assets/tailwind.png'
import {AiFillInstagram} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
function Home() {
  return (
    <div id='home'>
    <div className='home-container mt-20 md:mt-0'>
     <div className="home">
          <img src={plane1} alt=""  className='plane'/>
        <div className="personal-info">
          <img src={curvedLines} alt="" className="curved-lines" />
         <h5 className="main-heading"> I'M <br />
          <span className='name'>Muhammad Zeeshan</span></h5>
          <h1 className='developer'> Mern Stack <br /> developer 👋🏻</h1>
          <p className='personal-para'>Hi, I'm zeeshan. A passionate mern developer <br />  based in swabi, pakistan 📍</p>
          <div className="buttons">
            <div className='hire-btn'>
            <button className="hire-me btn" >
              <a href="#contact">Hire me</a>
            </button>
            </div>
            <div className='cv-btn' >
           {/* <a href="/" download={}> <button className="download-cv btn">Download CV</button>  </a> */}
            </div>
          </div>
       <div className="icons flex items-center"> 
       <a href="https://www.instagram.com/muhammadxzeeshan_/" target='blank' className='social-icon' ><AiFillInstagram /></a>
     
     <a href="https://web.facebook.com/profile.php?id=100058583021815" target='blank' className='social-icon'><FaFacebook /></a>
     <a href="https://github.com/zeeshan038" className='social-icon' target='blank'><AiFillGithub /></a>
     {/* <Link to="https://www.fiverr.com/zeeshankhan955?up_rollout=true" className='social-icon'>fiver</Link> */}
     </div>
        </div>
        <div className="personal-img">
        <img src={img} alt="image" className='my-image'/>
       
        </div>

    
       
     </div>
 
  <div className='flex justify-center items-center mt-5 md:justify-starts md:mx-auto'>
<div className="tech-learned  md:w-40 md:mt-10  ">
  <h4 className="tech line-clamp-2">Tech stack |</h4>
</div>
<div className=" md:mt-10 flex justify-center items-center gap-2 md:gap-5">
  <img src={html} alt=""   className='h-6 md:h-12' />
  <img src={css} alt=""  className=' h-6 md:h-12'/>
  <img src={js} alt=""  className=' h-6 md:h-12'/>
  <img src={tailwind} alt=""  className='h-6 md:h-12'/>
  <img src={react} alt=""  className='h-6 md:h-12'/>
  <img src={express} alt=""  className='h-6 md:h-12'/>
  <img src={nodejs} alt=""  className='h-6 md:h-12'/>
  <img src={mongoDb} alt=""  className='h-6 md:h-12'/>
  <img src={github} alt=""  className='h-6 md:h-12'/>

    
</div>
</div>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
    </div>
  )
}

export default Home

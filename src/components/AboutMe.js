import React from 'react'
import './AboutMe.css'

const AboutMe = ({}) => {

  

  

  return(
    <div className="about-me" id="aboutme">
      <div className="about-me-title">
        <h1 className="title">About Me</h1> 
        <div className="about-me-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <div className="image-div">
        <img src='circle.png' alt="filler image"></img>
      </div>
    
    </div>
  )
}

export default AboutMe;
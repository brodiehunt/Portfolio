import React from 'react'
import './TerminalApp.css'
import ReactPlayer from 'react-player'
import {FaGithub, FaArrowDown} from 'react-icons/fa'
import { motion} from 'framer-motion';
import { Link } from 'react-router-dom';

const ToDoList = () => {

  const bounceTransition = {
    y: {
      duration: 1,
      yoyo: Infinity,
      ease: "easeOut"
    }
  };

  return (
    <div className="project">
      <div className="project-title">
        <h1 className="title">Simple React ToDo List</h1> 
        <div className="top-line"></div>
        <div className="bottom-line"></div>
        <div className="project-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div className="link-icons">
          <motion.div whileHover={ {scale: 1.1, originX: 0 }}>
            <FaGithub size={32} className="link-github"/>
          </motion.div>
        </div>

      </div>
      <div className="video-container">
          <ReactPlayer url='./Videos/todolist1.mp4' playing={true} loop={true} controls  width="100" height="100" className="video"/>
      </div>
      <Link to="/techStack">
        <motion.div transition={bounceTransition} 
          animate={{ 
          y: ["50%", "-50%"],
          }} className="next">
          <FaArrowDown size={52}/>
        </motion.div>
      </Link>
    </div>
      
  )
}

export default ToDoList
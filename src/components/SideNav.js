import React from 'react'
import {Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import './SideNav.css'

const SideNav = () => {

  return (
      <nav className="side-nav">
        <div className="nav-item">
          <motion.button className="nav-button" whileHover={{
            scale: 1.5,
            originX: 0,
            textShadow: "0px 0px 4px rgb(255,255,255)"
            }}>
            <Link to="/"  ><h4>Home</h4></Link>
          </motion.button>
        </div>
        <div className="nav-item">
          <motion.button className="nav-button" whileHover={{
            scale: 1.5,
            originX: 0,
            textShadow: "0px 0px 8px rgb(255,255,255)"
            }}>
            <Link smooth to="/aboutme"><h4>About me</h4></Link>
          </motion.button>
        </div>
        <div className="nav-item">
          <motion.button className="nav-button" whileHover={{
            scale: 1.5,
            originX: 0,
            textShadow: "0px 0px 8px rgb(255,255,255)"
            }}>
            <Link smooth to="/terminalapp"><h4>Projects</h4></Link>
          </motion.button>
        </div>
        <div className="nav-item">
          <motion.button className="nav-button" whileHover={{
            scale: 1.5,
            originX: 0,
            textShadow: "0px 0px 8px rgb(255,255,255)"
            }}>
            <Link smooth to="/techStack"><h4>Stacks</h4></Link>
          </motion.button>
        </div>
      </nav>
    
  )
}

export default SideNav
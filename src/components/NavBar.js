import React from 'react'
import './NavBar.css'
import { motion} from 'framer-motion';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

const NavBar = () => {

  return (
    <nav className="nav-bar">
      <div className="logo">
        <h4 className="name-logo">Brodie Hunt</h4>
      </div>
      <div className="center-space">

      </div>
      <div className="icon-links">
        <motion.div whileHover={ {
          scale: 1.1,
        }}>
          <FaTwitter size={32} className="icon-twitter"/>
        </motion.div>
        <motion.div whileHover={ {scale: 1.1 }}>
          <FaGithub size={32} className="icon-github"/>
        </motion.div>
        <motion.div whileHover={ {scale: 1.1 }}>
          <FaLinkedin size={32} className="icon-linkedin"/>
        </motion.div>
      </div>

    </nav>

  )
}

export default NavBar;
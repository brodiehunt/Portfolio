import React from 'react'
import './TechStack.css';
import {FaCss3, FaHtml5, FaBootstrap, FaReact, FaNode } from 'react-icons/fa'
import {DiRuby} from 'react-icons/di'
import {SiRails, SiPostgresql, SiJavascript, SiMongodb} from 'react-icons/si'
import {motion} from 'framer-motion'

const TechStack = () => {
  
  return (
    <div className="tech-stack" id="techStack">
      <div className="tech-stack-title">
        <h1 className="title">TechStacks</h1> 
        <div className="icons-containers">
          <div className="row row-1">
            <motion.div className="icon-container" whileHover={{
              scale: 1.1,
              originX: 0,
              boxShadow: "0px 0px 8px rgb(255,255,255)"
              }}>
              < FaCss3 size={50} className="icon"/>
            </motion.div>
            <motion.div className="icon-container" whileHover={{
              scale: 1.1,
              originX: 0,
              boxShadow: "0px 0px 8px rgb(255,255,255)"
              }}>
              < FaHtml5 size={50} className="icon"/>
            </motion.div>
            <motion.div className="icon-container" whileHover={{
              scale: 1.1,
              originX: 0,
              boxShadow: "0px 0px 8px rgb(255,255,255)"
              }}>
              < FaBootstrap size={50} className="icon"/>
            </motion.div>
          </div>
          <div className="row row-2">
            <motion.div className="icon-container" whileHover={{
              scale: 1.1,
              originX: 0,
              boxShadow: "0px 0px 8px rgb(255,255,255)"
              }}>
              < DiRuby size={50} className="icon"/>
            </motion.div>
            <motion.div className="icon-container" whileHover={{
              scale: 1.1,
              originX: 0,
              boxShadow: "0px 0px 8px rgb(255,255,255)"
              }}>
              < SiRails size={50} className="icon"/>
            </motion.div>
            <motion.div className="icon-container" whileHover={{
              scale: 1.1,
              originX: 0,
              boxShadow: "0px 0px 8px rgb(255,255,255)"
              }}>
              < SiPostgresql size={50} className="icon"/>
            </motion.div>
            <motion.div className="icon-container" whileHover={{
              scale: 1.1,
              originX: 0,
              boxShadow: "0px 0px 8px rgb(255,255,255)"
              }}>
               < SiJavascript size={50} className="icon"/>
            </motion.div>
          </div>
          <div className="row row-3">
            <motion.div className="icon-container" whileHover={{
              scale: 1.1,
              originX: 0,
              boxShadow: "0px 0px 8px rgb(255,255,255)"
              }}>
               < FaReact size={50} className="icon"/>
            </motion.div>
            <motion.div className="icon-container" whileHover={{
              scale: 1.1,
              originX: 0,
              boxShadow: "0px 0px 8px rgb(255,255,255)"
              }}>
               < FaNode size={50} className="icon"/>
            </motion.div>
            <motion.div className="icon-container" whileHover={{
              scale: 1.1,
              originX: 0,
              boxShadow: "0px 0px 8px rgb(255,255,255)"
              }}>
               < SiMongodb size={50} className="icon"/>
            </motion.div>
          </div>
        </div>
      </div>
      
    </div>
    
  )
}

export default TechStack;
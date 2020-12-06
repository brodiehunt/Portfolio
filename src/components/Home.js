import React, {useEffect} from 'react'
import './Home.css'
import Typical from 'react-typical'


 
const Home = () => {

  

  return (
    <div className="home" id="home">
      <div className="name-title">
        <h1 className="name">MY NAME IS<br/> BRODIE HUNT</h1> 
        <h3>I'M A{" "}
            <Typical 
              loop={Infinity}
              wrapper="b"
              steps={[
                "FRONT-END",
                1000,
                "BACKEND",
                1000,
                "FULLSTACK WEB DEVELOPER",
                4000
              ]}
            />
        </h3>
      </div>
      <div className="statement">
        <h3>My passion is learning to implement eloquent code to build stylish web solutions. </h3>
      </div>
      
    </div>
  )
}
export default Home;
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Background from './components/Background'
import SideNav from './components/SideNav'
import Home from './components/Home'
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import TechStack from './components/TechStack'
import TerminalApp from './components/TerminalApp'
import MarketPlace from './components/MarketPlace'
import AlgorithmVisualizer from './components/AlgorithmVisualizer'
import ToDoList from './components/ToDoList'



const App = () => {
  
  return (


    <div >  
     
      <BrowserRouter>
        < NavBar />
        <Background/>
        <SideNav /> 
        <Switch >
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/terminalapp" render={(props) => <TerminalApp {...props} />} />
          <Route exact path="/marketplace" render={(props) => <MarketPlace {...props} />} />
          <Route exact path="/algorithmvisualizer" render={(props) => <AlgorithmVisualizer {...props} />} />
          <Route exact path="/todolist" render={(props) => <ToDoList {...props} />} />
          <Route exact path="/techStack" render={(props) => <TechStack {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App

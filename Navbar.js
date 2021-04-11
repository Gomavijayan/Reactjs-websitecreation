import React, { Component } from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";
import home from "./home";
import About from "./About";
import "./Navbar.css";
import Form1 from "./Form1";

class Navbar extends Component{
    render(){
        return(
            <HashRouter>
            <div class ="hi">
               <h1><b>JAGO</b></h1>
              <ul className="header">
                <li><NavLink to="/"><b>Home</b></NavLink></li>
                <li><NavLink to="/About"><b>About</b></NavLink></li>
                <li><NavLink to="/Form1"><b>Contact</b></NavLink></li>
              </ul>
              <div className="content">
                <Route exact path="/" component={home}/>
                <Route path="/About" component={About}/>
                <Route path="/Form1" component={Form1}/>
              </div>
            </div>
          </HashRouter>
        );
    }
}

export default Navbar;
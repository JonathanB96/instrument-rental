import React from 'react'
import { NavLink } from "react-router-dom";
import '../styles/NavBar.css'

export default function NavBar({user, setUser}) {

  function handleLogoutClick() {
    
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        console.log("logged out!")
      
      }
    });
  }
  
  return (
    <div className=' menu-container fixed-top'>
      <div><nav className="container">

    <input type="checkbox" aria-label="Toggle menu" />
    <span></span>
    <span></span>
    <span></span>
  

    

    <div className="menu">
      <a href="/" class="menu-logo">
      <h1>RentMyInstrument.org</h1>
      </a>
  
      <ul>
        <li> <NavLink
        to="/"
        exact
        activeStyle={{
            color: "#599bb3",
            
        }}
        >
        HOME
        </NavLink>
        </li>
    
        <li><NavLink
        to="/about"
        exact
        activeStyle={{
            color: "#599bb3",
        }}
        >
        ABOUT
        </NavLink></li>
      <li><NavLink
        to="/howitworks"
        exact
        activeStyle={{
            color: "#599bb3",
        }}
        >
        HOW IT WORKS
        </NavLink></li>

        <li>
            <NavLink
            to="/login"
            exact
            activeStyle={{
                color: "#599bb3",
            }}
            >
           LOGIN
           </NavLink>
      </li>
   
    </ul>

   
    </div>
  </nav>
  </div>
  </div>
  )
}

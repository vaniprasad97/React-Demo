import React from "react"
export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./images/logo.png" 
               className="nav-logo"  />
               <h1> REACT  App</h1>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
  }
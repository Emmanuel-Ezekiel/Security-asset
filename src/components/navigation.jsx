import React from 'react'
import "../styles/navigation.scss"
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    return (
      <header>
          <nav className='desktop-nav'>
              <div className="logo">
                  <h1>SAAMC</h1>
              </div>
              <div className="nav-list">
                  <ul>
                      <li><Link to={"/"}>Home</Link></li>
                      <li><Link to={"/about"}>About</Link></li>
                      <li><Link to={"/contact"}>contact</Link></li>
                      {/* <li><Link to={"/"}>Sign In</Link></li>
                      <li><Link to={"/"}>Sign Out</Link></li> */}
                  </ul>
              </div>
          </nav>
          <nav className='mobile-nav'>
              <div className="logo">
                  <h1>SAAMC</h1>
              </div>
              <div
                  onClick={() => setIsNavOpen(!isNavOpen)}
                  className={`nav-icon ${isNavOpen ? "nav-anim" : ""}`}
              >
                  <div className="bar1"></div>
                  {/* <div className="bar2"></div> */}
                  <div className="bar3"></div>
            </div>
            <div className={`mobile-nav__wrapper ${isNavOpen ? "openNav" : ""}`}>
              <div className="nav-list">
                  <ul>
                      <li><Link to={"/"}>Home</Link></li>
                      <li><Link to={"/about"}>About</Link></li>
                      <li><Link to={"/contact"}>contact</Link></li>
                      <li><Link to={"/"}>Sign In</Link></li>
                      <li><Link to={"/"}>Sign Out</Link></li>
                  </ul>
              </div>
           </div>
          </nav>
      </header>
    )
  }

export default Navigation;
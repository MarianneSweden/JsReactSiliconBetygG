import React from 'react'
import SiliconLogo from '../assets/images/silicon.svg'
import BurgerMenu from '../assets/images/burgermenu.svg'
import SigninMan from '../assets/images/Signinman.svg'
import ToggleSwitch from '../components/ToggleSwitch.jsx'

const Navbar = () => {
  return (
    <div>
      <nav className="main-nav" aria-label="main navigation">
      {/* <a href="#main" className="skip-link" Skip to main content></a> */}

    <div className="container">
      <a href="/">
        <img src={SiliconLogo} />
      </a>


      
      <div className="darkmode-toggle">
        <p>Dark Mode</p>
        {/* <label className="toggle">  */}
        <ToggleSwitch/>
          {/* <span className="slider"></span> */}
        {/* </label> */}
      </div>

     

      <button className="menu-btn" aria-controls="main-menu" aria-expanded="false" aria-label="toggle navigation">
        <img src= {BurgerMenu} />
      </button>


      <ul id="main-menu" className="main-menu hide">
        <li>
          <a href="#" className="nav-link"> Features </a>

          <a href="#" className="nav-link"> Contact </a>
        </li>
        <li>
          <a href="" className="btn btn-primary">
            <img src={SigninMan}/>
            <span>Sign in / up</span>
          </a>
        </li>
      </ul>

  </div>
</nav>
    </div>
  )
}

export default Navbar




      {/* <div className="darkmode-toggle">
        <p>Dark Mode</p>
        <label className="toggle"> 
          <input type="checkbox" id="darkmode-switch"/>
          <span className="slider"></span>
        </label>
      </div> */}

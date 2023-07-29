import { NavLink } from "react-router-dom";
import useActive from 'src/hooks/useActive';
import useWidthSize from 'src/hooks/useWidthSize';

import {ReactComponent as Logo} from 'src/assets/shared/logo.svg'
import {ReactComponent as Hamburger} from 'src/assets/shared/icon-hamburger.svg'
import {ReactComponent as Close} from 'src/assets/shared/icon-close.svg'

function Menu() {
  return (
    <>
      <nav className="menu">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/">
              <span>00</span>
              <span>HOME</span>
            </NavLink>
          </li>
        </ul>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="destination">
              <span>01</span>
              <span>DESTINATION</span>
            </NavLink>
          </li>
        </ul>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="crew">
              <span>02</span>
              <span>CREW</span>
            </NavLink>
          </li>
        </ul>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="technology">
              <span>03</span>
              <span>TECHNOLOGY</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

function Header() {
  const { width } = useWidthSize()
  const { active, handleToggle } = useActive()
  

  return (
    <>
      <header className="header">
        <div className="logo"><Logo/></div>
        {width < 768 ? (
          <div className={active ? "navigate-mobile" : "navigate-moblie bg-none"}>
            {/* Navbar-toggle */}
            {!active ? (
              <button className="burger-container cursor-pointer" onClick={handleToggle}>
                <Hamburger/>  
              </button> 
            ):(
              <>
                <Menu/>
                <button className="burger-container cursor-pointer" onClick={handleToggle}>
                  <Close/>  
                </button>
              </>
            )}
          </div>
        ):(
          <div className="navigate-desktop">
            <Menu/>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
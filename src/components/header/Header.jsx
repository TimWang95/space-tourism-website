import { Link } from "react-router-dom";
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
            <Link to="*">
              <a href="/" className="nav-link"><span>00</span>HOME</a>
            </Link>
          </li>
        </ul>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/destination">
              <a href="/" className="nav-link"><span>01</span>DESTINATION</a>
            </Link>
          </li>
        </ul>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/crew">
              <a href="/" className="nav-link"><span>02</span>CREW</a>
            </Link>
          </li>
        </ul>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="technology">
              <a href="/" className="nav-link"><span>03</span>TECHNOLOGY</a>
            </Link>
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
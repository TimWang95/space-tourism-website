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
            <a href="" className="nav-link"><span>00</span>HOME</a>
          </li>
        </ul>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="" className="nav-link"><span>01</span>DESTINATION</a>
          </li>
        </ul>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="" className="nav-link"><span>02</span>CREW</a>
          </li>
        </ul>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="" className="nav-link"><span>03</span>TECHNOLOGY</a>
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
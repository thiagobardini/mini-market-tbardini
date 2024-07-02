import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'
import miniMarketLogo from '../Assets/mini-market-logo.png'
import { useMenuContext } from '../Context/MenuContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ cart }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const { isOpen, toggleHamburger } = useMenuContext()

  const activeLink = ({ isActive }) => (isActive ? 'active' : '')

  useEffect(() => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    prefersDark && setIsDarkMode(true)
  }, [])

  useEffect(() => {
    isDarkMode
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark')
  }, [isDarkMode])

  const handleThemeClick = () => {
    setIsDarkMode(!isDarkMode)
  }

  const quantityCart = cart.reduce((accumulate, curValue) => {
    return accumulate + curValue.quantity
  }, 0)

  return (
    <>
      <nav className="navbar">
        <div
          className="container"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            display: 'flex',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <div className="img-grow" style={{position: 'relative',}}>
            <Link to="/" className="nav-brand" style={{ display: 'flex', position: "absolute", top: "-38px" }}>
              <img
                src={miniMarketLogo}
                alt="Background image"
                style={{ width: '120px' }}
              />
            </Link>
          </div>

          <div className="nav-display">
            <ul className="nav-wrapper">
              <li className="nav-item">
                <NavLink to="/" className={activeLink}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="about" className={activeLink}>
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="products" className={activeLink}>
                  Products
                </NavLink>
              </li>
              <li
                className="nav-item"
                style={{  marginRight: '20px' }}
              >
                <div className="toggle-container" onClick={handleThemeClick}>
                  <div
                    className={`dialog-button ${isDarkMode ? '' : 'disabled'}`}
                  >
                    {isDarkMode ? (
                      <FontAwesomeIcon
                        icon={faMoon}
                        color="var(--accent-5)"
                        style={{ fontSize: '14px' }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faSun}
                        color="#f39c12"
                        style={{ fontSize: '14px' }}
                      />
                    )}
                  </div>
                </div>
              </li>
              <li>
                <NavLink
                  to="cart"
                  className={`nav-cart-style-hamburger`}
                  style={{ marginRight: '20px' }}
                >
                  <div className="cart-icon-hamburger">
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      style={{ color: '#f2ecee', fontSize: '30px' }}
                    />
                    {quantityCart > 0 && (
                      <span className="cart-badge-hamburger">
                        {quantityCart}
                      </span>
                    )}
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {!isOpen && (
          <div className="hamburger-display">
            <Link
              to="cart"
              className={`nav-cart-style-hamburger`}
              style={{ marginRight: '20px' }}
            >
              <div className="cart-icon-hamburger">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  style={{ color: 'white', fontSize: '30px' }}
                />
                {quantityCart > 0 && (
                  <span className="cart-badge-hamburger">{quantityCart}</span>
                )}
              </div>
            </Link>
          </div>
        )}

        <HamburgerMenu
          isOpen={isOpen}
          toggleHamburger={toggleHamburger}
          quantityCart={quantityCart}
          handleThemeClick={handleThemeClick}
          isDarkMode={isDarkMode}
        />
      </nav>
    </>
  )
}

export default Navbar

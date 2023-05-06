import React, { useState } from 'react'
import './navbar.css'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'
import logo from '../../assets/logo.svg'

const NavbarLinks = () => {
  return (
    <>
      <li className='navbar__link'>
        <a href='#home'>Home</a>
      </li>
      <li className='navbar__link'>
        <a href='#wgpt'>What is GPT?</a>
      </li>
      <li className='navbar__link'>
        <a href='#possibility'>Open AI</a>
      </li>
      <li className='navbar__link'>
        <a href='#features'>Case Studies</a>
      </li>
      <li className='navbar__link'>
        <a href='#blog'>Library</a>
      </li>
    </>
  )
}

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false)

  return (
    <div className='navbar'>
      <div className='container flex'>
        <div className='navbar__logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='navbar__list-container'>
          <ul className='navbar__primary-list'>
            <NavbarLinks />
          </ul>
          <ul className='navbar__secondary-list'>
            <li className='navbar__link'>
              <a href='#'>sign in</a>
            </li>
            <li className='navbar__link navbar__link--btn'>
              <a href='#'>sign up</a>
            </li>
          </ul>
        </div>

        <div className='navbar__menu'>
          {menuToggle ? (
            <RiCloseLine
              color='#fff'
              size={27}
              onClick={() => setMenuToggle(false)}
            />
          ) : (
            <RiMenu3Line
              color='#fff'
              size={27}
              onClick={() => setMenuToggle(true)}
            />
          )}
          {menuToggle && (
            <div className='navbar__menu-lists scale-up-center'>
              <NavbarLinks />
              <ul className='navbar__menu-btns'>
                <li className='navbar__link'>
                  <a href='#'>sign in</a>
                </li>
                <li className='navbar__link navbar__link--btn'>
                  <a href='#'>sign up</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar

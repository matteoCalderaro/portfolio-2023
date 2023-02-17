import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UilGithub, UilLinkedin } from '@iconscout/react-unicons';

const Navbar = ({
  pointer,
  setPointer,
  moveNavbar,
  showNavbar,
  setShowNavbar,
  checked,
  setChecked,
}) => {
  return (
    <div className={showNavbar ? 'navbar-container open' : 'navbar-container'}>
      <div className="navbar-logo">matteoCalderaro</div>
      <nav className="main-nav">
        <div className="navbar-list">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'navbar-list__item__active' : 'navbar-list__item'
            }
            onClick={moveNavbar}
          >
            Home
          </NavLink>

          <NavLink
            to="corsi"
            className={({ isActive }) =>
              isActive ? 'navbar-list__item__active' : 'navbar-list__item'
            }
            onClick={moveNavbar}
          >
            Corsi
          </NavLink>

          <NavLink
            to="progetti"
            className={({ isActive }) =>
              isActive ? 'navbar-list__item__active' : 'navbar-list__item'
            }
            onClick={moveNavbar}
          >
            Progetti
          </NavLink>

          <NavLink
            to="info"
            className={({ isActive }) =>
              isActive ? 'navbar-list__item__active' : 'navbar-list__item'
            }
            onClick={moveNavbar}
          >
            Info
          </NavLink>
          <div className="social">
            <a
              className="social-link"
              href="https://www.linkedin.com/in/matteocalderaro"
              target="_blank"
              rel="noreferrer"
            >
              <UilLinkedin className="social-link__icon" />
            </a>
            <a
              className="social-link"
              href="https://github.com/matteoCalderaro"
              target="_blank"
              rel="noreferrer"
            >
              <UilGithub className="social-link__icon" />
            </a>
          </div>
        </div>
      </nav>

      <div className="nav-mob">
        <input
          className="nav-mob__checkbox"
          checked={checked}
          type="checkbox"
          id="navi-toggle"
          onChange={() => {
            setPointer(!pointer);
          }}
        />
        <label
          className="nav-mob__button"
          htmlFor="navi-toggle"
          onClick={() => {
            setShowNavbar(!showNavbar);
            setChecked(!checked);
          }}
        >
          <span className="nav-mob__icon">&nbsp;</span>
        </label>
      </div>
    </div>
  );
};
export default Navbar;

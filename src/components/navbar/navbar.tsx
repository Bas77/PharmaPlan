import { useState } from 'react';
import style from "./navbar.module.scss";
import lg from "./LG_PharmaPlan.png";

import searchIco from '../../assets/search.png';
import InputBar from "../inputBar/inputBar";
import ProfileDropdown from './profileDropdown/profileDropDown';
import { Link } from "react-router-dom";

interface NavBarProps {
  isSpacer? : boolean;
  isLoggedIn?: boolean;
}

export default function Navbar({ isSpacer, isLoggedIn }: NavBarProps) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navbarLinks = [
    {
      name: "Home",
      link: "/PharmaPlan/"
    },
    {
      name: "Article",
      link: "/PharmaPlan/article"
    },
    {
      name: "Medicine",
      link: "/PharmaPlan/medicine"
    },
    {
      name: "Planner",
      link: "/PharmaPlan/planner"
    },
  ];

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${style.main} ${isSpacer && style.isSpacer} el`}>
      <div>
        <Link to="/PharmaPlan/" style={{ textDecoration: 'none' }}>
          <img src={lg} alt="PharmaPlan Logo" />
          <h1>PharmaPlan</h1>
        </Link>
        <div className={style.nav_right}>
          <ul className={`${isMenuOpen ? style.showMenu : ''}`}>
            {navbarLinks.map((l, index) => (
              <li key={index}>
                <Link to={l.link} onClick={toggleMenu}>{l.name}</Link>
              </li>
            ))}
          </ul>
          <div className={style.sep}></div>
          <div className={`${style.cta} ${isMenuOpen ? style.showMenu : ''}`}>
            <InputBar placeholder="Find Medicine" leftIcon={searchIco} />
            {!isLoggedIn ? (
              <Link to="/PharmaPlan/login">
                <button className={style.btn_login}>Login</button>
              </Link>
            ) : (
              <ProfileDropdown />
            )}
          </div>
          <button className={`${style.hamburger} ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
             <h1>☰</h1>
          </button>
        </div>
      </div>
    </nav>
  );
}

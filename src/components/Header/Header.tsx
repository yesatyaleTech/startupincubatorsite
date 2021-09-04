import React from 'react';
import NavBar from './Navbar/Navbar';
import HamburgerMenu from './BurgerMenu/BurgerMenu';
import './Header.css';

const Header = () => {
    return (
        <>
            <header className="header">
                <nav className="logo">
                    <a className="logo" href="/">
                        <span className="replace-s">S</span>TARTUP<span className="replace-s">S</span> AT YALE
                    </a>
                </nav>
                <div id="navbar"><NavBar /></div>
                <span id="burger-menu">
                    <HamburgerMenu />
                </span>
            </header>
            <br />
        </>
    );
}

export default Header

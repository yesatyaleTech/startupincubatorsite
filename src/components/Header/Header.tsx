import React from 'react';
import NavBar from './Navbar/Navbar';
import logo from '../../images/Logo.png';
import HamburgerMenu from './BurgerMenu/BurgerMenu';
import './Header.css';

export default class Header extends React.Component<{}>{

    render() {
        return (
            <>
                <header className="header">
                    <nav className="logo">
                        <a className="logo" href="/">
                            <img src={logo} className="logo" alt="logo" />
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
}

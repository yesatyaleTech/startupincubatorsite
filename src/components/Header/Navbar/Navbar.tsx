import React from 'react';
import './Navbar.css';

enum CurrentPage { home, photos, about, community }


class NavBar extends React.Component<{}, CurrentPage>{

    render() {
        return (
            <span className="NavBar">
                <a className="nav-link" href="/startups">
                    Startups
                </a>
                <a className="nav-link" id="last-nav-link" href="/venture-capital">
                    VC Team
                </a>
            </span>
        );
    }
}

export default NavBar;
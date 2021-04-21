import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './BurgerMenu.css'

class BurgerMenu extends React.Component {
    state = { clicked: false }


    render() {
        return (
            <Menu
                isOpen={false}
                right={true}
            >
                <a className="menu-item" href="/startups">

                    <p>
                        <span className="replace-s">S</span>tartup<span className="replace-s">S</span>
                    </p>
                </a>
                <a className="menu-item" href="/venture-capital">
                    <p>
                        VC Team
                    </p>

                </a>
            </Menu>


        )
    }
}



export default BurgerMenu

import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { MenuItems } from "./MenuItems"
import './BurgerMenu.css'

class BurgerMenu extends React.Component {
    state = { clicked: false }


    render() {
        return (
            <Menu>
                isOpen={false}
            right={true}




                <a>
                    <p>

                        Startups


                    </p>


                </a>
                <a>
                    <p>

                        VC Teams


                    </p>

                </a>
            </Menu>


        )
    }
}



export default BurgerMenu

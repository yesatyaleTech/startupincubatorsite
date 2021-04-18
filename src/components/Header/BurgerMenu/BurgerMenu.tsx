import React from 'react';

export default class HamburgerMenu extends React.Component<{}>{
    render(){
        return(
            <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            
        );
    }
}
import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

import logo from "../Toolbar/esportsLogo.png";

import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toobar-navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar-logo"><a href="/"><img src={logo} className="logo" alt="logo"></img></a></div>
            <div className="spacer" />
            <div className="toolbar-navigation-items">
                <ul>
                    <li><a href="/">Top Games</a></li>
                    <li><a href="/">Top Streams</a></li>
                    <li><a href="/">About Us</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;

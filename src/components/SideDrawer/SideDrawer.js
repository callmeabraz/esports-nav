import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
    // eslint-disable-next-line
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

  return(
    <nav className={drawerClasses}>
        <ul>
            <li><a href="/">Top Games</a></li>
            <li><a href="/">Top Streams</a></li>
            <li><a href="/">About Us</a></li>
        </ul>
    </nav>
  );
};

export default sideDrawer;
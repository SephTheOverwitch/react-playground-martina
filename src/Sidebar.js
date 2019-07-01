import React from "react";
import {slide as Menu} from "react-burger-menu";
import {Link} from "react-router-dom";

export default props => {
    return(
        <Menu {...props}>
            <Link to="/" className="menu-item"> Home </Link>
            <Link to="/clock" className="menu-item"> Clock </Link>
        </Menu>
    );
}; 
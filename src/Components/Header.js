import React from "react";
import "../scss/Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-wrapper">
            <header>
                <li className="menu-item">
                    <NavLink activeClassName="active" to="/">
                        일일
                    </NavLink>
                </li>
                <li className="menu-item">
                    <NavLink activeClassName="active" to="/week">
                        주간
                    </NavLink>
                </li>
                <li className="menu-item">
                    <NavLink activeClassName="active" to="/weekend">
                        주말
                    </NavLink>
                </li>
            </header>
        </div>
    );
};

export default Header;

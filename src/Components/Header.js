import React from "react";

const Header = () => {
    return (
        <div className="header-wrapper">
            <header>
                <li className="menu-item">
                    <a href="#">일별 박스오피스</a>
                </li>
                <li className="menu-item">
                    <a href="#">주간 박스오피스</a>
                </li>
                <li className="menu-item">
                    <a href="#">주말 박스오피스</a>
                </li>
            </header>
        </div>
    );
};

export default Header;

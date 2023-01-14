import React from 'react';
import {NavLink} from "react-router-dom";
import LOGO from "./../../image/логотип.svg"

const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header-left">
                        <div className="header-left_logo">
                            <NavLink to={"/Home"}> <img src={LOGO} alt=""/></NavLink>
                        </div>
                        <div className="header-left_links">
                            <NavLink className="nav-header" to={"/School"}>О школе</NavLink>
                            <NavLink className="nav-header" to={"/Course"}>Наши курсы</NavLink>
                            <NavLink className="nav-header" to={"/About"}>О нас</NavLink>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="header-right_buttons">
                                <NavLink className="nav-right" to={"/Sign"}>Войти</NavLink>
                                <NavLink to={"/Follow"} className="button-header">Подписаться</NavLink>
                            </div>
                    </div>
                    <div className="burger">
                        <input type="checkbox" id="menu-toggle" className="burger-input"/>
                        <label htmlFor="menu-toggle" className="burger-label"></label>
                        <ul className="burger-menu">
                            <li>
                                <NavLink className="nav-header" target="_blank" to={"/School"}>О школе</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-header" target="_blank" to={"/Course"}>Наши курсы</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-header" target="_blank" to={"/About"}>О нас</NavLink>
                            </li>
                            <li className="burger-menu_group">
                                <NavLink className="nav-right" to={"/Sign"}>Войти</NavLink>
                                <NavLink to={"/Follow"} className="button-header">Подписаться</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;
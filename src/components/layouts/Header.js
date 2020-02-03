import React, { Component } from 'react';
import '../../styles/layouts/Header.scss'
import { NavLink, Link } from 'react-router-dom';


class Header extends Component {
    state = { 
        openMenu: false,
    }

    handleClickMenu = () => {
        this.setState({
            openMenu: !this.state.openMenu
        })
    }

    render() { 
        const {openMenu} = this.state;
        const list = [
            {name: "start", path: "/", exact: true},
            {name: "about", path: "/about"},
            {name: "stories", path: "/stories"},
            {name: "gallery", path: "/gallery"},
            {name: "contact", path: "/contact"},
        ]
        const menu = list.map(item => (
            <li className="menu_item" key={item.name}>
                <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
            </li>
        ))

        return (
        <>
            <div className="title">
                <span className="title_name">
                    <Link to="/">Header Title</Link>
                </span>
                <span className="title_subtitle">Header Subtitle</span>
                <div className="title_hamburger" onClick={this.handleClickMenu}>
                    <div
                        className={`hamburger_line hamburger_top${openMenu ? "--open" : ""}`}
                    ></div>
                    <div
                        className={`hamburger_line hamburger_middle${openMenu ? "--open" : ""}`}
                    ></div>
                    <div
                        className={`hamburger_line hamburger_bottom${openMenu ? "--open" : ""}`}
                    ></div>
                </div>
            </div>
            <nav className={`menu${openMenu ? "--open" : ""}`}>
                <ul className="menu_list">
                    {menu}
                </ul>
            </nav>
        </>
        );
    }
}
 
export default Header;
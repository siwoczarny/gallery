import React from 'react';
import '../../styles/layouts/Header.scss';
import { NavLink } from 'react-router-dom';

const list = [
    {name: "start", path: "/", exact: true},
    {name: "about", path: "/about"},
    {name: "stories", path: "/stories"},
    {name: "gallery", path: "/gallery"},
    {name: "contact", path: "/contact"},
]


const Header = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))

    return ( 
    <div>
        <h1>Header</h1>
        <nav className="nav">
            <ul>
                {menu}
            </ul>
        </nav>
    </div>
     );
}
 
export default Header;
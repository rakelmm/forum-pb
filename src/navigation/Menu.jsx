import React from 'react';
import './Menu.css';

const Menu = () => {
    return (
        <nav className="menu">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/topics">Tópicos</a></li>
                <li><a href="/about">Sobre</a></li>
            </ul>
        </nav>
    );
};

export default Menu;
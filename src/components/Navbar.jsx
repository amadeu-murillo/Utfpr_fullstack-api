import React from 'react';
import './css/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__item"><a href="#home" className="navbar__link">Início</a></li>
                <li className="navbar__item"><a href="#verses" className="navbar__link">Versículos</a></li>
                <li className="navbar__item"><a href="#about" className="navbar__link">Sobre</a></li>
                <li className="navbar__item"><a href="#contact" className="navbar__link">Contato</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;

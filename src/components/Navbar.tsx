import React, { useState } from 'react';
import '../scss/components/Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [navActive, setNavActive] = useState(false);
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Home',
            to: '/',
            animation: undefined
        },
        {
            id: 2,
            name: 'About',
            to: '/',
            animation: undefined
        },
        {
            id: 3,
            name: 'Services',
            to: '/',
            animation: undefined
        },
        {
            id: 4,
            name: 'Projects',
            to: '/',
            animation: undefined
        }
    ]);

    const handleNavActive = () => {
        setNavActive(!navActive);

        items.forEach((item: any, index: number) => {
            item.animation = {
                animation: `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            };
        });
    };
    return (
        <React.Fragment>
            <header>
                <nav>
                    <div className="logo">
                        <h4>The Nav</h4>
                    </div>
                    <ul
                        className={`nav-links ${navActive ? 'nav-active' : ''}`}
                    >
                        {items.map(item => (
                            <Link
                                key={item.id}
                                style={item.animation}
                                className="li"
                                to={item.to}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </ul>
                    <div className="cta">
                        <button>Contact</button>
                    </div>
                    <div className="burger" onClick={() => handleNavActive()}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </nav>
            </header>
        </React.Fragment>
    );
};

export default Navbar;

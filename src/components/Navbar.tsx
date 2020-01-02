import React, { useState } from 'react';
import '../scss/components/Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [navActive, setNavActive] = useState(false);
    const [navItems, setnavItems] = useState([
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

        navItems.forEach((item: any, index: number) => {
            if (item.animation) {
                item.animation = undefined;
            }
            else {
                item.animation = {
                    animation: `navLinkFade 0.5s ease forwards ${index / 7 +
                        0.5}s`
                };
            }
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
                        {navItems.map(item => (
                            <Link
                                key={item.id}
                                style={item.animation}
                                className="li"
                                to={item.to}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            style={{
                                animation: `navLinkFade 0.5s ease forwards ${
                                    navItems.length / 7 + 0.5}s`,
                                display: navActive ? 'block' : 'none'
                            }}
                            className="li"
                            to="/"
                        >
                            Contact
                        </Link>
                    </ul>
                    <div className="cta">
                        <button>Contact</button>
                    </div>
                    <div className={`burger ${navActive ? 'toggle' : ''}`} onClick={() => handleNavActive()}>
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

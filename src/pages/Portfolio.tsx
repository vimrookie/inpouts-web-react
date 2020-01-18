import React from 'react';
import '../scss/pages/Portfolio.scss';
import applianza from '../assets/images/portfolio-items/applianza/0.jpg';
import rrhhPanama from '../assets/images/portfolio-items/rrhh-panama/1.png';
import norson from '../assets/images/portfolio-items/norson/1.jpeg';
import platziBadges from '../assets/images/portfolio-items/platzi-badges/1.png';
import ionic from '../assets/images/icons/ionic-logo.png';
import mysql from '../assets/images/icons/mysql-logo.png';

const Portfolio: React.FC = () => {
    return (
        <div id="portfolio" className="portfolio-container">
            <h1>Some Works</h1>
            <h5>
                We create technological solutions for our clients, optimizing
                the available resources and using the best tools in the market
            </h5>
            <div className="cards-container portfolio-card-container">
                <div className="card">
                    <img
                        src={applianza}
                        alt="Applianza"
                        className="services-images"
                    />
                    <h5>Frontend and App Development</h5>
                    <div className="card-content">
                        <p>
                            Technological solution for the prevention of money
                            laundering and terrorist financing (PBC / FT).
                        </p>
                    </div>
                    <div className="card-icons-container">
                        <i className="fab fa-angular card-icon angular-icon tooltip">
                            <span className="tooltiptext">Angular</span>
                        </i>
                        <span className="tooltip">
                            <img
                                className="ionic-icon card-icon"
                                src={ionic}
                                alt="Ionic"
                            />
                            <span className="tooltiptext">Ionic</span>
                        </span>
                    </div>
                </div>
                <div className="card">
                    <img
                        src={rrhhPanama}
                        alt="RRHH Panamá"
                        className="services-images"
                    />
                    <h5>Frontend and Backend Development</h5>
                    <div className="card-content">
                        <p>
                            The software for the management of human resources
                            and payroll allows to carry out business and labor
                            tasks automatically.
                        </p>
                    </div>
                    <div className="card-icons-container">
                        <i className="fab fa-angular card-icon angular-icon tooltip">
                            <span className="tooltiptext">Angular</span>
                        </i>
                        <i className="fab fa-laravel card-icon laravel-icon tooltip">
                            <span className="tooltiptext">Laravel</span>
                        </i>
                        <span className="tooltip">
                            <img
                                className="mysql-icon card-icon"
                                src={mysql}
                                alt="MySQL"
                            />
                            <span className="tooltiptext">MySQL</span>
                        </span>
                    </div>
                </div>
                <div className="card">
                    <img
                        src={norson}
                        alt="Norson"
                        className="services-images"
                    />
                    <h5>Frontend, Backend and App Development</h5>
                    <div className="card-content">
                        <p>
                            Web software and mobile application for farm
                            management, occupational safety and industrial
                            processes.
                        </p>
                    </div>
                    <div className="card-icons-container">
                        <i className="fab fa-angular card-icon angular-icon tooltip">
                            <span className="tooltiptext">Angular</span>
                        </i>
                        <span className="tooltip">
                            <img
                                className="ionic-icon card-icon"
                                src={ionic}
                                alt="Ionic"
                            />
                            <span className="tooltiptext">Ionic</span>
                        </span>
                        <i className="fab fa-laravel card-icon laravel-icon tooltip">
                            <span className="tooltiptext">Laravel</span>
                        </i>
                        <span className="tooltip">
                            <img
                                className="mysql-icon card-icon"
                                src={mysql}
                                alt="MySQL"
                            />
                            <span className="tooltiptext">MySQL</span>
                        </span>
                    </div>
                </div>
                <div className="card">
                    <img
                        src={platziBadges}
                        alt="Platzi Badges"
                        className="services-images"
                    />
                    <h5>Frontend and Backend Development</h5>
                    <div className="card-content">
                        <p>
                            A little web app made with React and NodeJs for
                            assisting management to Platziconf event.
                        </p>
                    </div>
                    <div className="card-icons-container">
                        <i className="fab fa-node card-icon node-icon tooltip">
                            <span className="tooltiptext">Node.js</span>
                        </i>
                        <i className="fab fa-react card-icon react-icon tooltip">
                            <span className="tooltiptext">React.js</span>
                        </i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;

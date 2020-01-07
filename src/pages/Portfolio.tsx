import React from 'react';
import '../scss/pages/Portfolio.scss';
import applianza from '../assets/images/portfolio-items/applianza/0.jpg';
import rrhhPanama from '../assets/images/portfolio-items/rrhh-panama/1.png';
import norson from '../assets/images/portfolio-items/norson/1.jpeg';
import platziBadges from '../assets/images/portfolio-items/platzi-badges/1.png';

const Portfolio: React.FC = () => {
    return (
        <div className="portfolio-container">
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
                            Solución tecnológica para la prevención del blanqueo
                            de capitales y financiamiento al terrorismo
                            (PBC/FT).
                        </p>
                    </div>
                    <div className="card-labels-container">
                        <div className="card-label">
                            Angular
                        </div>
                        <div className="card-label">
                            Ionic
                        </div>
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
                    <div className="card-labels-container">
                        <div className="card-label">
                            Angular
                        </div>
                        <div className="card-label">
                            Laravel
                        </div>
                        <div className="card-label">
                            MySQL
                        </div>
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
                    <div className="card-labels-container">
                        <div className="card-label">
                            Angular
                        </div>
                        <div className="card-label">
                            Ionic
                        </div>
                        <div className="card-label">
                            Laravel
                        </div>
                        <div className="card-label">
                            MySQL
                        </div>
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
                    <div className="card-labels-container">
                        <div className="card-label">
                            ReactJs
                        </div>
                        <div className="card-label">
                            NodeJs
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;

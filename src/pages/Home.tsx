import React from 'react';
import '../scss/pages/Home.scss';
import home from '../assets/images/home.png';
import leftBackground from '../assets/images/left-section-background.png';
import Services from './Services';
import Portfolio from './Portfolio';

const Home: React.FC = () => (
    <React.Fragment>
        <div className="home-container">
            <section className="left-section">
                <img
                    src={leftBackground}
                    alt="background"
                    className="left-background"
                />
                <div className="left-container">
                    <h1 className="title">Inpouts</h1>
                    <h4 className="subtitle">We work hardly for your ideas.</h4>
                    <h4 className="description">
                        We are a technological team focused on building quality
                        products for our customers.
                    </h4>
                    <div className="learn-more">
                        <button>More about us</button>
                    </div>
                </div>
            </section>
            <section className="right-section">
                <img src={home} alt="Home" />
            </section>
        </div>
        <Services />
        <Portfolio />
    </React.Fragment>
);

export default Home;

import React, { useState } from 'react';
import '../scss/pages/Services.scss';
import cloudComputing from '../assets/images/services/cloud_computing.png';
import apps from '../assets/images/services/apps.png';
import webDesign from '../assets/images/services/web_design.png';
import ServiceItem from '../components/ServiceItem';

const Services: React.FC = () => {
    const [services] = useState([
        {
            id: 1,
            image: apps,
            alt: 'Apps Development',
            description:
                'Development of mobile applications that meet current standards and functionalities'
        },
        {
            id: 2,
            image: cloudComputing,
            alt: 'Cloud Computing',
            description:
                'Use of powerful tools available in cloud for offer you the best infrastructure possible'
        },
        {
            id: 3,
            image: webDesign,
            alt: 'Web Design',
            description:
                'Development websites and custom web systems with the use of innovative tools that optimize product performance'
        }
    ]);
    return (
        <div id="services" className="services-container">
            <h1>Our Services</h1>
            <h3>
                We create technological solutions for our clients, optimizing
                the available resources and using the best tools in the market
            </h3>
            <div className="cards-container">
                { services.map(item => <ServiceItem key={item.id} {...item} />) }
            </div>
        </div>
    );
};

export default Services;

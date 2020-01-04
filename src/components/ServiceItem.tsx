import React from 'react';
import PropTypes from 'prop-types';

interface Props {
    id: number;
    image: string;
    alt: string;
    description: string;
}

const ServiceItem = (props: Props) => {
    return (
        <div className="card">
            <img
                src={props.image}
                alt={props.alt}
                className="services-images"
            />
            <div className="card-content">{props.description}</div>
        </div>
    );
};

ServiceItem.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default ServiceItem;

import React, { useState, Fragment } from 'react';
import '../scss/pages/Contact.scss';

interface FormValues {
    name?: string;
    email?: string;
    city?: string;
}

const Contact: React.FC = () => {
    const [inputFilled, setInputFilled] = useState('');
    const [formValues, setFormValues] = useState<FormValues>({
        name: '',
        email: '',
        city: ''
    });

    const handleLabel = (type: string) => {
        setInputFilled(type);
    };

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <Fragment>
            <div className="contact-container">
                <form onSubmit={handleSubmit}>
                    <h1>Contact Us</h1>
                    <span
                        className={`${
                            inputFilled === 'name' || formValues.name
                                ? 'inputs--filled label'
                                : ''
                        }`}
                    >
                        <label
                            htmlFor="name"
                            className="text-small-uppercase"
                        >
                            Username
                        </label>
                        <input
                            onFocus={() => handleLabel('name')}
                            onChange={handleChange}
                            value={formValues.name}
                            id="name"
                            name="name"
                            type="text"
                            required
                        />
                    </span>
                    <span
                        className={`${
                            inputFilled === 'email' || formValues.email
                                ? 'inputs--filled label'
                                : ''
                        }`}
                    >
                        <label htmlFor="email" className="text-small-uppercase">
                            Email
                        </label>
                        <input
                            onFocus={() => handleLabel('email')}
                            onChange={handleChange}
                            className="text-body"
                            id="email"
                            name="email"
                            type="email"
                            required
                        />
                    </span>
                    <span
                        className={`${
                            inputFilled === 'city' || formValues.city
                                ? 'inputs--filled label'
                                : ''
                        }`}
                    >
                        <label htmlFor="city" className="text-small-uppercase">
                            City
                        </label>
                        <input
                            onFocus={() => handleLabel('city')}
                            onChange={handleChange}
                            className="text-body"
                            id="city"
                            name="city"
                            type="text"
                            required
                        />
                    </span>
                    <input
                        className="text-small-uppercase"
                        id="submit"
                        type="submit"
                        value="Send information"
                    />
                </form>
            </div>
        </Fragment>
    );
};

export default Contact;

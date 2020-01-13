import React, { Fragment } from 'react';
import '../scss/pages/Footer.scss';

const Footer: React.FC = () => {
    return (
        <Fragment>
            <div className="footer-container">
                {/* <div className="site-map">
                    <ul>
                        <li className="site-url">Home</li>
                        <li className="site-url">Services</li>
                        <li className="site-url">Portfolio</li>
                        <li className="site-url">Contact</li>
                    </ul>
                </div> */}
                <div className="contact-info">
                    <div className="contact-item">
                        <h3>Twitter:</h3>
                        <span>@gleycerparra</span>
                        <span>@jthavalera</span>
                    </div>
                    <div className="contact-item">
                        <h3>LinkedIn:</h3>
                        <a
                            href="https://www.linkedin.com/in/gleycer-parra-889913b1"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Gleycer Parra
                        </a>
                        <a
                            href="https://www.linkedin.com/in/gleycer-parra-889913b1"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Jhonnathan Valera
                        </a>
                    </div>
                    <div className="contact-item">
                        <h3>Email:</h3>
                        <span>gleycerparra@gmail.com</span>
                        <span>jthavalera@gmail.com</span>
                    </div>
                    <div className="contact-item">
                        <h3>Whatsapp:</h3>
                        +51 916 677 970
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Footer;

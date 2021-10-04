import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
    const instagramIcon = <FontAwesomeIcon icon={faInstagram} />
    const githubIcon = <FontAwesomeIcon icon={faGithub} />
    return (
        <div className="container-fluid bg-dark p-2">
            <div className="footer py-5 bg-dark d-flex flex-wrap justify-content-around text-center">
                <div className="col-12 col-md-3 text-center">
                    <div className="social-icon mb-3">
                        <h6 className="text-white ms-2">We are social</h6>
                        <a href="https://facebook.com/monirweb.wdd" target="_blank" rel="noopener noreferrer"><span>{facebookIcon}</span></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><span>{instagramIcon}</span></a>
                        <a href="https://github.com/netstermonir/" target="_blank" rel="noopener noreferrer"><span>{githubIcon}</span></a>
                    </div>
                </div>
                <div className="col-12 col-md-4 text-center mb-3">
                    <div className="terms">
                        <h6 className="text-white">Check out Website Terms And Conditions. Save Time, and Find it Here.</h6>
                    </div>
                </div>
                <div className="col-12 col-md-4 text-center">
                    <div className="support">
                        <h6 className="text-white mt-2">24/7 Support</h6>
                        <h6 className="text-white mt-2">Call Me: +880 1747706163</h6>
                    </div>
                </div>
            </div>
            <p className="text text-white text-center lh-lg">&copy; 2021 || All Rights Reserved By Programming.</p>
        </div>
    );
};

export default Footer;
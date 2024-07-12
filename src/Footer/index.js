
import React from 'react';
import './index.css';
import medialogo from './medialogo.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={medialogo} alt="logo" />
                    <svg width="50" height="50" viewBox="0 0 50 50" aria-label="Company logo">
                        <circle cx="25" cy="25" r="20" fill="white" />
                    </svg>
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <h3>Partnership</h3>
                        <ul>
                            <li>Websites</li>
                            <li>Branding</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>About</h3>
                        <ul>
                            <li>Our Projects</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Support</h3>
                        <ul>
                            <li>Support Request</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Connect</h3>
                        <div className="social-icons">
                            <i className="fab fa-linkedin"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-youtube"></i>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col1">
                    <h2>Sona Dhanwani</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/programs">Programs</Link></li>
                        <li><Link to="/insights">Insights</Link></li>
                        <li><Link to="/claim-your-crown">Claim Your Crown</Link></li>
                        <li><Link to="/soul-lounge">Soul Lounge</Link></li>
                        <li><Link to="/get-in-touch">Get In Touch</Link></li>
                    </ul>
                </div>
                <div className="col2"></div>
                <div className="col3">
                    <h3>Contact us</h3>
                    <div className="social-icons">
                        <div>
                            <a
                                href="https://www.instagram.com/lifecoachsonadhanwani?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className="icon" src="/logos/instagram-logo-204.png" alt="Instagram" />
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://www.linkedin.com/in/sona-dhanwani-01a02934a/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className="icon" src="/logos/linkedin-square-logo-204.png" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2025 Sona Dhanwani. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;

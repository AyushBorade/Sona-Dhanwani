import Layout from '../components/Layout';
import AnimatedSection from '../components/AnimatedSection';
import './GetInTouch.css';

function GetInTouch() {
    return (
        <Layout variant="contact">
            <AnimatedSection>
                <div className="contact-form">
                    <h2>Get in Touch</h2>
                    <p>
                        Fill this form with your details and our office will get in touch to
                        book introductory session
                    </p>

                    <div className="form">
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSeSCXbdeiJSZmDQofGYd8dMhwxZHSVdO_ifd9XoNPRMWTC8xw/viewform?embedded=true"
                            width="100%"
                            height="1600"
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                            title="Contact Form"
                        >
                            Loading…
                        </iframe>
                    </div>
                </div>
            </AnimatedSection>
        </Layout>
    );
}

export default GetInTouch;

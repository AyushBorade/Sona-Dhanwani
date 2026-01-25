import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import AnimatedSection from '../components/AnimatedSection';
import './Programs.css';

function Programs() {
    return (
        <Layout variant="programs">
            <section>
                <div className="coaching">
                    <div className="coaching-image">
                        <img src="/images/IMG_2602.JPG" alt="Coaching session" />
                    </div>
                    <div className="coaching-title">
                        <h2>
                            One on one coaching <br />
                            with
                        </h2>
                        <h1>Sona Dhanwani</h1>
                        <br />
                        <p>
                            8 sessions, each of 1 hour <br />
                            <span>Rupees 9999/~</span>
                        </p>
                        <button className="register-now-button">
                            <Link to="/get-in-touch">Register Now</Link>
                        </button>
                    </div>
                </div>
            </section>

            <AnimatedSection>
                <section className="program-details">
                    <div className="session-details">
                        <h1>Session Details</h1>
                        <div className="detail-card-section">
                            <div className="detail-card">
                                <h2>1</h2>
                                <p>
                                    • Each session is 1 hour long. <br />
                                    • Sessions are designed to address specific needs and goals.
                                </p>
                            </div>
                            <div className="detail-card">
                                <h2>2</h2>
                                <p>• Support and check ins via whatsapp to keep you on track.</p>
                            </div>
                            <div className="detail-card">
                                <h2>3</h2>
                                <p>
                                    • A detailed post session report to monitor progress and ensure
                                    effective follow up.
                                </p>
                            </div>
                        </div>
                    </div>

                    <section className="how-it-works">
                        <h2>How It Works</h2>

                        <div className="step">
                            <div className="step-number">01</div>
                            <div className="step-content">
                                <div className="step-title">BOOK A FREE CLARITY CALL.</div>
                                <div className="step-description">
                                    Book a free 30-minute one-on-one call with me and let's find out
                                    together if you will need my service.
                                </div>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number">02</div>
                            <div className="step-content">
                                <div className="step-title">SIGN THE CONTRACT</div>
                                <div className="step-description">
                                    Once you decide to enroll, you will need to sign a contract with
                                    my company.
                                </div>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number">03</div>
                            <div className="step-content">
                                <div className="step-title">PAY YOUR INVESTMENT</div>
                                <div className="step-description">
                                    All modes of payments are available to ease your process of
                                    payment. We take 100% payment before starting the service.
                                </div>
                            </div>
                        </div>

                        <div className="step">
                            <div className="step-number">04</div>
                            <div className="step-content">
                                <div className="step-title">COACHING</div>
                                <div className="step-description">
                                    Once all processes are done, we will begin our coaching journey.
                                    My team will help you schedule calls according to both our
                                    convenient timings.
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </AnimatedSection>

            <AnimatedSection delay={100}>
                <div className="container">
                    <h1>FAQ'S</h1>
                    <div className="pro-para">
                        <p>
                            Do you feel stuck in your personal life, your career or both? <br />
                            <span>
                                My one on one Coaching sessions will give you a customized solution
                                to whatever problems you are facing in your life.
                            </span>
                        </p>
                    </div>

                    <div className="faq-grid">
                        <div className="faq-item">
                            <img src="/images/IMG_2600.JPG" alt="Coaching Session" />
                            <h3>What is one on one Coaching?</h3>
                            <p>
                                • One-on-one coaching is all about you—your goals, challenges, and
                                growth. I help uncover what's holding you back, just like a doctor
                                asks the right questions to diagnose an issue.
                            </p>
                            <p>
                                • In our safe, judgment-free sessions, we'll create practical
                                strategies and a clear plan to help you overcome obstacles and
                                achieve your dreams.
                            </p>
                        </div>
                        <div className="faq-item">
                            <img src="/images/IMG_2603.JPG" alt="Coaching vs Therapy" />
                            <h3>What's the difference between therapy and coaching?</h3>
                            <p>
                                • Therapy focuses on healing the past and addressing emotional
                                challenges, while coaching is about taking action and building a
                                better future.
                            </p>
                            <p>
                                • Therapy asks "why," while coaching asks "how." My coaching sessions
                                are a safe space to identify where you're stuck and create a clear
                                plan to help you move forward.
                            </p>
                        </div>
                        <div className="faq-item">
                            <img src="/images/IMG_0149.png" alt="Coaching Expectations" />
                            <h3>What can I expect to get out of one on one coaching?</h3>
                            <p>
                                • In one-on-one coaching, you'll gain clarity on your true purpose,
                                the courage to pursue it, and the consistency to achieve it.
                                Together, we'll break down your goals, create a step-by-step plan,
                                and ensure accountability throughout.
                            </p>
                            <p>
                                • You'll also learn tools for self-improvement that enhance your
                                relationships, making them more peaceful and fulfilling. Ultimately,
                                you'll leave with a life and career you genuinely love.
                            </p>
                        </div>
                        <div className="faq-item">
                            <img src="/images/IMG_8884.png" alt="Coaching Decision" />
                            <h3>I'm still not sure if this is what I need...</h3>
                            <p>
                                • Not sure if coaching is right for you? Let's chat! Book a
                                30-minute FREE CLARITY CALL by filling out the form below—it's the
                                perfect way to see if one-on-one coaching fits your needs.
                            </p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </Layout>
    );
}

export default Programs;

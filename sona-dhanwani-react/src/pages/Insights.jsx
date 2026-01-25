import Layout from '../components/Layout';
import AnimatedSection from '../components/AnimatedSection';
import './Insights.css';

function Insights() {
    return (
        <Layout variant="home">
            <section>
                <AnimatedSection>
                    <div className="heading">
                        <h1>Core values & Beliefs</h1>
                        <h3>
                            Expert advice and thoughtful perspectives on parenting and personal
                            growth
                        </h3>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={100}>
                    <div className="cards">
                        <div className="insight-card-block">
                            <div className="bg">
                                <img src="/logos/heart-regular-108.png" alt="Heart icon" />
                            </div>
                            <div className="content">
                                <h3>Parenting</h3>
                                <h2>Building resilience in children: a parent's guide</h2>
                                <p>
                                    Learn effective strategies to help your children develop emotional
                                    strength and resilience in today's challenging world.
                                </p>
                            </div>
                        </div>
                        <div className="insight-card-block">
                            <div className="bg">
                                <img src="/logos/icons8-family-100.png" alt="Family icon" />
                            </div>
                            <div className="content">
                                <h3>Personal Growth</h3>
                                <h2>Empowering Women: Finding Your Inner Strength</h2>
                                <p>
                                    Discover powerful techniques for building self-confidence and
                                    embracing your authentic self in all aspects of life.
                                </p>
                            </div>
                        </div>
                        <div className="insight-card-block">
                            <div className="bg">
                                <img src="/logos/smile-regular-132.png" alt="Smile icon" />
                            </div>
                            <div className="content">
                                <h3>Relationships</h3>
                                <h2>Strengthening Family Bonds Through Communication</h2>
                                <p>
                                    Essential tips and techniques for creating meaningful connections
                                    and fostering open dialogue within your family.
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </section>
        </Layout>
    );
}

export default Insights;

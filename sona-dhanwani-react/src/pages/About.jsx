import Layout from '../components/Layout';
import AnimatedSection from '../components/AnimatedSection';
import './About.css';

function About() {
    return (
        <Layout variant="about">
            <AnimatedSection>
                <section className="about-section">
                    <div className="intro-text">
                        <h2>About me</h2>
                        <p>
                            Growing up in a society where women are often expected to balance
                            multiple roles, I've witnessed how self-doubt and societal pressures
                            can silence even the strongest voices. These challenges not only
                            affect women but ripple through families, leaving parents overwhelmed
                            and children feeling unseen. Through my own experiences, I've
                            developed a deep passion for creating meaningful change by empowering
                            women to rediscover their authentic selves while supporting parents in
                            strengthening their bonds with their children. As a life coach, I
                            guide women on their journey of self-love, self-discovery, and
                            personal growth, helping them embrace their true potential. At the
                            same time, I work with parents to foster deeper, more meaningful
                            connections with their children, guiding both to navigate life's
                            challenges with confidence and resilience. With years of personal and
                            professional growth, I've come to believe that transformation is
                            possible for anyone willing to take the step towards it—approached
                            with intention, compassion, and consistent effort. In my work, I
                            combine empathy and strategy to help women reconnect with their inner
                            strength, rediscover their purpose, and thrive in every aspect of
                            their lives. I also help children develop the emotional intelligence
                            and resilience they need to face life's hurdles. It's through these
                            interconnected efforts that I've seen how truly transformative change
                            can happen.
                        </p>
                    </div>
                    <div>
                        <img
                            className="about-image"
                            src="/images/IMG_0311.png"
                            alt="Sona Dhanwani"
                        />
                    </div>
                </section>
            </AnimatedSection>

            <AnimatedSection delay={100}>
                <div className="mission">
                    <p>
                        My mission is to help women and families rewrite their narratives.
                        Whether it's breaking free from limiting beliefs, overcoming parenting
                        challenges, or equipping children with essential life skills, I'm here
                        to walk with you every step of the way. Together, we can create a life
                        where you feel valued, understood, and truly celebrated
                    </p>
                </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
                <div className="got-here">
                    <p>How I got here</p>
                </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
                <section className="intro">
                    <img
                        className="about-image"
                        src="/images/IMG_0171.png"
                        alt="Sona Dhanwani"
                    />
                    <div className="intro-text">
                        <p>
                            Becoming a life, child, and parent coach wasn't just a career
                            choice—it was a calling inspired by my personal experiences and the
                            challenges I've observed in the lives of those around me. For as long
                            as I can remember, I've been deeply curious about the emotional
                            struggles people face, especially women striving to balance their
                            roles and reclaim their identities. Growing up in a culture where
                            societal expectations often silenced self-expression, I witnessed the
                            unspoken burdens carried by women, parents, and children alike. I felt
                            a deep desire to make a difference. My journey began with my own
                            transformation. Like so many others, I've faced moments of self-doubt,
                            navigated challenging relationships, and battled the overwhelming
                            pressure of trying to "get it all right." Over time, I came to realize
                            that the answers weren't always immediate or obvious, but small,
                            intentional steps toward understanding myself and others made all the
                            difference.
                        </p>
                    </div>
                </section>
            </AnimatedSection>
        </Layout>
    );
}

export default About;

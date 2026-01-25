import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import AnimatedSection from '../components/AnimatedSection';
import './SoulLounge.css';

function SoulLounge() {
    return (
        <Layout variant="home">
            <div className="soul-lounge-container">

                {/* Intro Section */}
                <AnimatedSection>
                    <section className="soul-intro">
                        <h1>Soul Lounge</h1>
                        <h2 className="tagline">A space to pause, breathe and be.</h2>

                        <div className="intro-content">
                            <p>
                                Soul Lounge is a safe, warm, and soulful space for women and kids
                                — where you can slow down, breathe deeply, and reconnect with
                                your inner peace.
                            </p>
                            <p>
                                It's a sanctuary for your mind, body, and soul, designed to help you
                                heal, reflect, and grow.
                            </p>
                        </div>
                    </section>
                </AnimatedSection>

                {/* About Sona Section */}
                <AnimatedSection delay={100}>
                    <section className="about-sona">
                        <div className="about-sona-content">
                            <h2>About Sona Dhanwani</h2>
                            <p>
                                Sona Dhanwani is a certified Life Coach, Parenting Coach, NLP Master,
                                Emotional Wellness Mentor, and guide for soulful living.
                            </p>
                            <p>
                                Her approach blends science, spirituality, and self-awareness—helping
                                you uncover the beliefs that hold you back, nurture emotional balance,
                                and lead a life that feels aligned.
                            </p>
                            <p>
                                With over 8+ years of experience in transformational work, Sona's
                                sessions are known for their warmth, depth, and authenticity.
                            </p>
                        </div>
                        <div className="about-image-container">
                            <img src="/images/IMG_0149.png" alt="Sona Dhanwani" className="sona-image" />
                        </div>
                    </section>
                </AnimatedSection>

                {/* Offerings Grid */}
                <AnimatedSection delay={200}>
                    <section className="offerings">
                        <h2>Our Offerings</h2>
                        <div className="offerings-grid">

                            <div className="offering-card">
                                <div className="card-number">01</div>
                                <h3>1-on-1 Soul Sessions for Women</h3>
                                <p>
                                    Personal, heart-centered conversations that guide you toward
                                    emotional balance, clarity, and self-growth.
                                </p>
                                <p>
                                    Here, you can open up freely — without judgment and rediscover
                                    your calm, confidence, and purpose.
                                </p>
                            </div>

                            <div className="offering-card">
                                <div className="card-number">02</div>
                                <h3>Healing & Natural Products</h3>
                                <p>All our products are made with pure, thoughtful ingredients and love:</p>
                                <ul>
                                    <li>Kumkuma oil (glow & balance)</li>
                                    <li>Herbal hair oil</li>
                                    <li>Bath salts for relaxation</li>
                                    <li>Lip balm & Hair packs</li>
                                    <li>Our signature Calming Roll-On - your instant peace in a bottle</li>
                                </ul>
                            </div>

                            <div className="offering-card">
                                <div className="card-number">03</div>
                                <h3>Peaceful Space for Women</h3>
                                <p>
                                    A comforting corner for women who feel lonely, overwhelmed, or
                                    simply need to recharge.
                                </p>
                                <p>
                                    You can sit quietly, journal, sip herbal tea, or just breathe -
                                    this space listens to you.
                                </p>
                            </div>

                            <div className="offering-card">
                                <div className="card-number">04</div>
                                <h3>The Soul Library</h3>
                                <p>
                                    A cozy reading nook with handpicked books for both kids and women
                                    on mindfulness, healing, and inspiration.
                                </p>
                            </div>

                            <div className="offering-card">
                                <div className="card-number">05</div>
                                <h3>Kids Life Skill & Value Sessions (Ages 3-15)</h3>
                                <p>
                                    Fun and interactive sessions that teach confidence, kindness,
                                    gratitude, and positive thinking.
                                </p>
                            </div>

                        </div>
                    </section>
                </AnimatedSection>

                {/* Client Reflections / Testimonials */}
                <AnimatedSection delay={300}>
                    <section className="reflections">
                        <h2>Client Reflections</h2>
                        <div className="reflection-cards">

                            <div className="reflection-card">
                                <p className="testimonial-text">
                                    "The online 9 day transformation session was such a beautiful experience!
                                    Even though it was virtual, it felt festive, sacred, and full of life.
                                    The meditation led by Sona ma'am was on another level — I felt completely
                                    present and connected, as if I were right there with everyone.
                                    Her words stayed with me long after the session ended."
                                </p>
                                <p className="client-name">— Reena</p>
                            </div>

                            <div className="reflection-card">
                                <p className="testimonial-text">
                                    "My 3-year-old absolutely loves Ma'am's classes! Every day he excitedly says,
                                    'Mujhe Ma'am ki class jaana hai!' The biggest change — he's no longer glued
                                    to his phone and now enjoys playing, learning, and exploring. The transformation
                                    has been truly heartwarming!"
                                </p>
                                <p className="client-name">— Mannat</p>
                            </div>

                            <div className="reflection-card">
                                <p className="testimonial-text">
                                    "I'm deeply grateful to Sona Ma'am for sharing such profound knowledge of child
                                    psychology. Her clear explanations and supportive approach have completely
                                    transformed my perspective. Each session reflected her passion and dedication to
                                    teaching."
                                </p>
                                <p className="client-name">— Neha</p>
                            </div>

                            <div className="reflection-card">
                                <p className="testimonial-text">
                                    "Sona Ma'am is an exceptional mentor whose sessions go beyond teaching —
                                    they truly inspire transformation. Her deep understanding of child psychology
                                    and ability to simplify complex ideas with warmth and clarity have completely
                                    changed my perspective as a parent and individual."
                                </p>
                            </div>

                        </div>
                    </section>
                </AnimatedSection>

                {/* Vision & CTA */}
                <AnimatedSection delay={400}>
                    <section className="vision-cta">
                        <div className="vision">
                            <h2>Our Vision</h2>
                            <p>
                                To create a nurturing space where women feel heard, healed, and whole,
                                children learn values that shape their future, and every soul leaves
                                lighter than before.
                            </p>
                        </div>

                        <div className="cta-block">
                            <h3>Your next chapter starts here.</h3>
                            <p className="contact-info">Get in Touch: 7875098919</p>
                            <p className="address">Sindhi colony, near asaram bapu dharamshala</p>
                            <p className="website">sonadhanwani.in</p>
                        </div>
                    </section>
                </AnimatedSection>

            </div>
        </Layout>
    );
}

export default SoulLounge;

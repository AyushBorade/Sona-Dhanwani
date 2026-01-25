import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import AnimatedSection from '../components/AnimatedSection';
import './Home.css';

function Home() {
    return (
        <Layout variant="home">
            <section className="hero">
                <div className="background-circle"></div>
                <h1 className="hero-title">
                    <span className="tagline">Become the most</span>
                    <br />
                    Powerful You !
                </h1>
            </section>

            <AnimatedSection>
                <section className="intro">
                    <img
                        className="about-image"
                        src="/images/IMG_0274.png"
                        alt="Sona Dhanwani"
                    />
                    <div className="intro-text">
                        <h2>
                            Hi, I am
                            <br />
                            <span>Sona Dhanwani</span>
                        </h2>
                        <p>
                            A certified life, child, and parent coach dedicated to helping
                            individuals and families flourish. My journey into coaching stems from
                            a heartfelt desire to support those feeling stuck, lost, or
                            disconnected. Life's challenges can be overwhelming, but together, we
                            can break through barriers and rediscover your true potential.
                        </p>
                    </div>
                </section>
            </AnimatedSection>

            <AnimatedSection delay={100}>
                <section className="About">
                    <div className="intro-text">
                        <h2>About</h2>
                        <p>
                            My mission is to help women and families rewrite their narratives.
                            Whether it's breaking free from limiting beliefs, overcoming parenting
                            challenges, or equipping children with essential life skills, I'm here
                            to walk with you every step of the way. Together, we can create a life
                            where you feel valued, understood, and truly celebrated.
                        </p>
                        <button>
                            <Link to="/about">Know more</Link>
                        </button>
                    </div>
                    <video className="about-video" controls>
                        <source src="/Videos/Sonavideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </section>
            </AnimatedSection>

            <AnimatedSection delay={150}>
                <section className="testimonials">
                    <div className="certifi-head">
                        <div className="stars-left-stars">
                            <img src="/Assets/stars.png" alt="Stars" />
                        </div>
                        <h2>TESTIMONIALS</h2>
                        <div className="stars-right-stars">
                            <img src="/Assets/stars.png" alt="Stars" />
                        </div>
                    </div>
                    <div className="card-block">
                        <div className="card">
                            <div className="stars-5">
                                <img src="/Assets/5stars.png" alt="5 stars" />
                                <p className="card-text-box">
                                    I chose Sona as my personal coach when I was confused and
                                    shattered. <br />
                                    Sona gave me strategies and tools to tackle my issues and work in
                                    my personal life. Sona supported me with lot of handholding. Due
                                    to Sona, my life has changed and I started improving and
                                    overcoming my fear. Your support and guidance helped me a lot.
                                    <br />
                                    You are amazing coach, motivator with a positive attitude. Sona
                                    your techniques work like magic. You have skill to make difference
                                    in someone's life and heal them. <br />
                                    I am filled with hope when I see the remarkable progress in my
                                    life made under your guidance. I am truly grateful for everything
                                    you have done for me. I can't thank you enough for pushing me to
                                    my limits and helping me discover my true potential. Thank you
                                    Sona for everything!
                                </p>
                                <p className="name">~ Reena</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="stars-5">
                                <img src="/Assets/5stars.png" alt="5 stars" />
                                <p className="card-text-box">
                                    I am at a loss for words as how much you have impacted my son's
                                    life & relationship with me!! You can create a magic in everyone's
                                    life as you are gold hearted person & also you have given me
                                    confidence, clarity & tools!! All I wanted was my child should
                                    grow positive & maturely & you made it..... Thank you so much for
                                    your efforts and positive response always!! Thank you for patience
                                    you taught me, would like to recommend each one in need!!!
                                </p>
                                <p className="name">~ Neha</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="stars-5">
                                <img src="/Assets/5stars.png" alt="5 stars" />
                                <p className="card-text-box">
                                    Thank you so much di for such an informative workshop Train the
                                    trainer. I am lucky to have a mentor like you in my journey of
                                    becoming a trainer.. The purpose of my joining this workshop was
                                    to upgrade myself as a soft skills development coach which will
                                    help me upgrade my school kids..but this workshop upgraded me in
                                    many ways like it helped me understand how to maintain emotional
                                    stability and many techniques which help us maintain leadership
                                    which all was required in my daily life.. Thank you so much Sona
                                    di for taking up this workshop and giving me a new identity..
                                    Thank you
                                </p>
                                <p className="name">~ Sneha</p>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            <AnimatedSection delay={200}>
                <div className="ws-title">
                    <h2>Upcoming Workshops</h2>
                </div>
                <section className="workshop">
                    <img
                        className="workshop-image"
                        src="/posters/mk-page-00002.jpg"
                        alt="SoulSister Workshop"
                    />
                    <div className="workshop-title">
                        <h2>Soul Sisters</h2>
                        <p>
                            SoulSister is a transformative program created to empower, inspire,
                            and connect women from all walks of life. Featuring exclusive live
                            sessions every first Monday of the month, it offers a safe space for
                            personal growth, meaningful conversations, and actionable insights.
                            Through expert-led discussions and a supportive community, SoulSister
                            helps women rediscover their strength, build resilience, and nurture
                            connections with like-minded individuals. It's not just a program—it's
                            a sisterhood that uplifts and celebrates every woman's journey toward
                            self-discovery and success. Join SoulSister and take the first step
                            toward a more empowered you.
                        </p>
                    </div>
                    <div className="workshop-title">
                        <h2>One on One coaching</h2>
                        <p>
                            One-on-one coaching is a personalized journey designed to help you
                            unlock your full potential and achieve the life you've always
                            envisioned. It's a safe, non-judgmental space where we work together
                            to identify your challenges, clarify your goals, and create a clear,
                            actionable plan tailored to your needs. Through meaningful
                            conversations, practical strategies, and consistent support, I'll
                            guide you in overcoming obstacles, building confidence, and
                            cultivating the skills needed to thrive in every aspect of your life.
                            Whether it's your career, relationships, or personal growth,
                            one-on-one coaching is your path to meaningful transformation.
                        </p>
                    </div>
                    <img
                        className="workshop-image"
                        src="/posters/IMG_2358.JPG"
                        alt="One on One Coaching"
                    />
                </section>
            </AnimatedSection>
        </Layout>
    );
}

export default Home;

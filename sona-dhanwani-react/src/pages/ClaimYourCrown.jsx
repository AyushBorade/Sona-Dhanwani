import Layout from '../components/Layout';
import AnimatedSection from '../components/AnimatedSection';
import './ClaimYourCrown.css';

function ClaimYourCrown() {
    return (
        <Layout variant="crown">
            <div className="crown-container">
                <header className="crown-header">
                    <h1>Claim Your Crown</h1>
                    <p className="subtitle">
                        The sacred movement for the woman who's done playing small.
                    </p>
                </header>

                <AnimatedSection>
                    <section className="crown-intro">
                        <p>
                            You were never too much. You were never not enough.
                            <br />
                            You were simply waiting for this moment —<br />
                            To remember who you are.
                            <br />
                            To reclaim your worth.
                            <br />
                            To rise as the woman you were born to be.
                        </p>
                        <p>
                            <strong>Claim Your Crown™</strong> is a 90-day soul-led transformation
                            for the woman who's ready to stop shrinking herself to fit the world —
                            and start leading it instead.
                        </p>
                        <p className="highlight">
                            This is not just a program.
                            <br />
                            It's a homecoming.
                            <br />
                            A deep remembering.
                            <br />
                            A reclamation of your voice, power, presence, and possibility.
                        </p>
                    </section>
                </AnimatedSection>

                <AnimatedSection delay={100}>
                    <section className="for-you">
                        <h2>This is for you if…</h2>
                        <ul>
                            <li>
                                You've spent your life being everything for everyone… and lost
                                yourself along the way.
                            </li>
                            <li>
                                You constantly overgive, overthink, and override your own needs.
                            </li>
                            <li>
                                You crave a life where you feel grounded, powerful, and
                                unapologetically you.
                            </li>
                            <li>
                                You want to break cycles, heal wounds, and rise into the version of
                                yourself your younger self dreamed of.
                            </li>
                            <li>
                                You're done settling for less and ready to step into your feminine
                                power, clarity, and self-worth.
                            </li>
                        </ul>
                    </section>
                </AnimatedSection>

                <AnimatedSection delay={150}>
                    <section className="inside">
                        <h2>Inside Claim Your Crown™</h2>
                        <ul className="features">
                            <li>
                                <strong>Inner Safety Reset™</strong>
                                <br />
                                Where mindset shifts begin with nervous system healing.
                                <br />
                                Calm your inner chaos. Anchor into peace.
                            </li>
                            <li>
                                <strong>Self-Worth Revival</strong>
                                <br />
                                Say goodbye to guilt, people-pleasing & proving.
                                <br />
                                Rewire your beliefs. Set soul-led boundaries.
                            </li>
                            <li>
                                <strong>Goddess Embodiment</strong>
                                <br />
                                Remember the woman who moves with magic, grace, and power.
                                <br />
                                She's already within you.
                            </li>
                            <li>
                                <strong>Mirrorwork & Healing Rituals</strong>
                                <br />
                                Activate your confidence, sensuality, and sacred presence.
                                <br />
                                See yourself. Honor yourself. Crown yourself.
                            </li>
                            <li>
                                <strong>Manifestation Magic (the Feminine Way)</strong>
                                <br />
                                Aligned action + energetic congruence = magnetic results.
                                <br />
                                Not hustle. Just harmony.
                            </li>
                        </ul>
                    </section>
                </AnimatedSection>

                <AnimatedSection delay={200}>
                    <section className="what-you-get">
                        <h2>What You Get</h2>
                        <ul>
                            <li>12 missions</li>
                            <li>6 modules</li>
                            <li>2 one on one sessions</li>
                            <li>Ritual & Reflection Journal Prompts</li>
                            <li>Access to the Claim Your Crown Portal</li>
                            <li>Private Support Group</li>
                            <li>Bonuses worth 12000+</li>
                            <li>Lifetime Sisterhood Access</li>
                        </ul>
                    </section>
                </AnimatedSection>

                <AnimatedSection delay={250}>
                    <section className="love-notes">
                        <h2>Love Notes from Future You</h2>
                        <blockquote>
                            "I no longer beg for love, time, or approval. I AM the source now."
                        </blockquote>
                        <blockquote>
                            "I stopped doubting myself. I started being myself."
                        </blockquote>
                        <blockquote>
                            "I didn't just find my voice. I became a woman who can't be silenced."
                        </blockquote>
                    </section>
                </AnimatedSection>

                <AnimatedSection delay={300}>
                    <section className="transformation">
                        <h2>What Happens When You Join</h2>
                        <ul>
                            <li>You start walking differently.</li>
                            <li>You stop apologizing for existing.</li>
                            <li>You become a woman who chooses herself — and means it.</li>
                            <li>
                                You no longer chase your crown…
                                <br />
                                You claim it.
                            </li>
                        </ul>
                    </section>
                </AnimatedSection>

                <AnimatedSection delay={350}>
                    <section className="cta">
                        <h2>Ready to Rise?</h2>
                        <p>
                            Your soul didn't bring you here by accident.
                            <br />
                            If your heart's whispering "Yes…"
                            <br />— it's time.
                        </p>
                        <p className="final">
                            Your crown was never lost.
                            <br />
                            It was just waiting for you to remember.
                        </p>
                    </section>
                </AnimatedSection>
            </div>
        </Layout>
    );
}

export default ClaimYourCrown;

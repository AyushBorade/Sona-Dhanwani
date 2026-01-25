import { useState, useEffect, useRef, useCallback } from 'react';
import './ParallaxBackground.css';

function ParallaxBackground({ variant = 'home' }) {
    const [scrollY, setScrollY] = useState(0);
    const rafRef = useRef(null);
    const lastScrollY = useRef(0);

    // Optimized scroll handler using requestAnimationFrame
    const handleScroll = useCallback(() => {
        if (rafRef.current) return; // Skip if already scheduled

        rafRef.current = requestAnimationFrame(() => {
            const currentScrollY = window.scrollY;
            // Only update if scroll changed significantly (reduces repaints)
            if (Math.abs(currentScrollY - lastScrollY.current) > 1) {
                setScrollY(currentScrollY);
                lastScrollY.current = currentScrollY;
            }
            rafRef.current = null;
        });
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [handleScroll]);

    const getBackgroundConfig = () => {
        switch (variant) {
            case 'about':
                return {
                    leftLeaf: '/Assets/leafleft.png',
                    rightLeaf: '/Assets/about-left-leaf.png',
                    wavy: '/Assets/wavy-about.png',
                    bgColor: 'transparent'
                };
            case 'programs':
                return {
                    leftLeaf: '/Assets/leafleft.png',
                    rightLeaf: '/Assets/Leafright.png',
                    wavy: '/Assets/programs-wavy.png',
                    bgColor: 'transparent'
                };
            case 'crown':
                return {
                    leftLeaf: '/Assets/leafleft.png',
                    rightLeaf: '/Assets/about-left-leaf.png',
                    wavy: '/Assets/wavy-about.png',
                    bgColor: '#f9e79f'
                };
            case 'contact':
                return {
                    leftLeaf: '/Assets/leafleft.png',
                    rightLeaf: '/Assets/Leafright.png',
                    wavy: '/Assets/wavytouch.png',
                    bgColor: '#f9e79f'
                };
            default: // home
                return {
                    leftLeaf: '/Assets/leafleft.png',
                    rightLeaf: '/Assets/Leafright.png',
                    wavy: '/Assets/wavy.png',
                    bgColor: 'transparent'
                };
        }
    };

    const config = getBackgroundConfig();

    return (
        <div className="parallax-container" style={{ backgroundColor: config.bgColor }}>
            {/* Left side leaves - staggered positioning */}
            <div
                className="parallax-layer left-leaf left-leaf-1"
                style={{
                    backgroundImage: `url(${config.leftLeaf})`,
                    transform: `translate3d(0, ${scrollY * 0.08}px, 0)` // GPU accelerated
                }}
            />
            <div
                className="parallax-layer left-leaf left-leaf-2"
                style={{
                    backgroundImage: `url(${config.leftLeaf})`,
                    transform: `translate3d(0, ${scrollY * 0.18}px, 0)`
                }}
            />
            <div
                className="parallax-layer left-leaf left-leaf-3"
                style={{
                    backgroundImage: `url(${config.leftLeaf})`,
                    transform: `translate3d(0, ${scrollY * 0.12}px, 0) rotate(25deg)` // Rotated bottom leaf
                }}
            />

            {/* Right side leaves - staggered positioning */}
            <div
                className="parallax-layer right-leaf right-leaf-1"
                style={{
                    backgroundImage: `url(${config.rightLeaf})`,
                    transform: `translate3d(0, ${scrollY * 0.05}px, 0)`
                }}
            />
            <div
                className="parallax-layer right-leaf right-leaf-2"
                style={{
                    backgroundImage: `url(${config.rightLeaf})`,
                    transform: `translate3d(0, ${scrollY * 0.22}px, 0)`
                }}
            />
            <div
                className="parallax-layer right-leaf right-leaf-3"
                style={{
                    backgroundImage: `url(${config.rightLeaf})`,
                    transform: `translate3d(0, ${scrollY * 0.15}px, 0) rotate(-20deg)` // Rotated bottom leaf
                }}
            />

            {/* Wavy background - very subtle movement */}
            <div
                className="parallax-layer wavy-bg"
                style={{
                    backgroundImage: `url(${config.wavy})`,
                    transform: `translate3d(0, ${scrollY * 0.03}px, 0)`
                }}
            />
        </div>
    );
}

export default ParallaxBackground;

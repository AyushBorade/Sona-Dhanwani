import Header from './Header';
import Footer from './Footer';
import ParallaxBackground from './ParallaxBackground';

function Layout({ children, variant = 'home' }) {
    return (
        <>
            <ParallaxBackground variant={variant} />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Layout({ children }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main style={{ flex: 1, padding: '24px 40px' }}>
                {children}
            </main>
            <Footer />
        </div>
    );
}
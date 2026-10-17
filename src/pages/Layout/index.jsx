import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Layout({ children }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F9F8FE' }}>
            <Header />
            <main
                style={{
                    flex: 1,
                    width: '100%',
                    maxWidth: '1240px',
                    margin: '0 auto',
                    padding: '0 20px 60px',
                    boxSizing: 'border-box'
                }}
            >
                {children}
            </main>
            <Footer />
        </div>
    );
}
import React from 'react';

export default function Logo({ light = false }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
                src="/logo.svg"
                alt="Digital Store Logo"
                style={{
                    width: '253px',
                    height: '44px',
                    objectFit: 'contain',
                    filter: light ? 'brightness(0) invert(1)' : 'none'
                }}
                onError={(e) => {
                    // Fallback visual caso o SVG ainda não esteja em public/
                    e.target.style.display = 'none';
                }}
            />
            {/* Texto de suporte caso a imagem ainda não exista */}
            <span style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: light ? 'var(--white)' : 'var(--primary)',
                letterSpacing: '1px'
            }}>
                Digital Store
            </span>
        </div>
    );
}
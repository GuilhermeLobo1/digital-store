import React from 'react';
import logoHeader from '../../assets/logo-header.svg';
import logoFooter from '../../assets/logo-footer.svg';

export default function Logo({ light = false }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
                src={light ? logoFooter : logoHeader}
                alt="Digital Store Logo"
                style={{
                    width: '253px',
                    height: '44px',
                    objectFit: 'contain'
                }}
            />
        </div>
    );
}
import React from 'react';
import { Link } from 'react-router-dom';

export default function Section({ title, titleAlign = 'left', link, children }) {
    const isCentered = titleAlign === 'center';

    return (
        <section style={{ margin: '40px 0', width: '100%' }}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: isCentered ? 'center' : 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px',
                    position: 'relative'
                }}
            >
                <h3
                    style={{
                        fontSize: '24px',
                        color: 'var(--dark-gray-2)',
                        fontWeight: '700',
                        textAlign: titleAlign
                    }}
                >
                    {title}
                </h3>

                {link && !isCentered && (
                    <Link
                        to={link.href}
                        style={{
                            color: 'var(--primary)',
                            fontSize: '18px',
                            textDecoration: 'none',
                            fontWeight: '500'
                        }}
                    >
                        {link.text} →
                    </Link>
                )}
            </div>

            <div>{children}</div>
        </section>
    );
}
import React from 'react';

export default function ProductCard({ image, name, price, priceDiscount }) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '292px',
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
                backgroundColor: 'var(--white)',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
            }}
        >
            {/* Imagem do Produto */}
            <div
                style={{
                    width: '292px',
                    height: '321px',
                    backgroundColor: '#E2E3FF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                }}
            >
                <img
                    src={image}
                    alt={name}
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain'
                    }}
                    onError={(e) => {
                        e.target.src = 'https://placehold.co/292x321?text=Produto';
                    }}
                />
            </div>

            {/* Informações */}
            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '12px', color: 'var(--light-gray)', fontWeight: 'bold' }}>
                    Tênis
                </span>
                <h4
                    style={{
                        fontSize: '16px',
                        color: 'var(--dark-gray-2)',
                        fontWeight: '500',
                        lineHeight: '22px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}
                >
                    {name}
                </h4>

                {/* Preços */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '4px' }}>
                    {priceDiscount ? (
                        <>
                            <span
                                style={{
                                    fontSize: '16px',
                                    color: 'var(--light-gray)',
                                    textDecoration: 'line-through'
                                }}
                            >
                                ${price}
                            </span>
                            <span
                                style={{
                                    fontSize: '24px',
                                    color: 'var(--dark-gray)',
                                    fontWeight: '700'
                                }}
                            >
                                ${priceDiscount}
                            </span>
                        </>
                    ) : (
                        <span
                            style={{
                                fontSize: '24px',
                                color: 'var(--dark-gray)',
                                fontWeight: '700'
                            }}
                        >
                            ${price}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
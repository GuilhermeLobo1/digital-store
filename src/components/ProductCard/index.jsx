import React from 'react';

export default function ProductCard({ image, name, price, priceDiscount, discountTag = '30% OFF' }) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '292px',
                cursor: 'pointer',
                backgroundColor: 'var(--white)',
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative',
                transition: 'transform 0.2s ease'
            }}
        >
            {/* Tag de Desconto (quando houver priceDiscount) */}
            {priceDiscount && (
                <span
                    style={{
                        position: 'absolute',
                        top: '16px',
                        left: '16px',
                        backgroundColor: '#E7FF86',
                        color: 'var(--dark-gray-2)',
                        fontSize: '12px',
                        fontWeight: '700',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        zIndex: 2
                    }}
                >
                    {discountTag}
                </span>
            )}

            {/* Imagem do Produto */}
            <div
                style={{
                    width: '292px',
                    height: '321px',
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                }}
            >
                <img
                    src={image}
                    alt={name}
                    style={{
                        maxWidth: '85%',
                        maxHeight: '85%',
                        objectFit: 'contain'
                    }}
                    onError={(e) => {
                        e.target.src = 'https://placehold.co/292x321?text=Produto';
                    }}
                />
            </div>

            {/* Informações */}
            <div style={{ padding: '16px 8px 12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '12px', color: 'var(--light-gray)', fontWeight: 'bold' }}>
                    Tênis
                </span>
                <h4
                    style={{
                        fontSize: '18px',
                        color: 'var(--dark-gray-2)',
                        fontWeight: '400',
                        lineHeight: '24px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}
                >
                    {name}
                </h4>

                {/* Preços */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '4px' }}>
                    {priceDiscount ? (
                        <>
                            <span
                                style={{
                                    fontSize: '18px',
                                    color: 'var(--light-gray)',
                                    textDecoration: 'line-through'
                                }}
                            >
                                ${price}
                            </span>
                            <span
                                style={{
                                    fontSize: '22px',
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
                                fontSize: '22px',
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
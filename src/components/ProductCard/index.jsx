import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ id = 1, image, name, price, priceDiscount, discountTag = '30% OFF' }) {
    return (
        <Link
            to={`/product/${id}`}
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                textDecoration: 'none',
                cursor: 'pointer',
                backgroundColor: 'transparent',
                position: 'relative',
                transition: 'transform 0.2s ease'
            }}
        >
            {/* Tag de Desconto */}
            {priceDiscount && (
                <span
                    style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
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

            {/* Caixa Branca da Imagem */}
            <div
                style={{
                    width: '100%',
                    aspectRatio: '292 / 321',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '4px',
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

            {/* Textos e Preços */}
            <div style={{ padding: '12px 4px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontSize: '12px', color: 'var(--light-gray)', fontWeight: '700' }}>
                    Tênis
                </span>
                <h4
                    style={{
                        fontSize: '16px',
                        color: 'var(--dark-gray-2)',
                        fontWeight: '400',
                        lineHeight: '22px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        margin: 0
                    }}
                >
                    {name}
                </h4>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
                    {priceDiscount ? (
                        <>
                            <span
                                style={{
                                    fontSize: '16px',
                                    color: 'var(--light-gray)',
                                    textDecoration: 'line-through'
                                }}
                            >
                                R$ {price}
                            </span>
                            <span
                                style={{
                                    fontSize: '18px',
                                    color: 'var(--dark-gray)',
                                    fontWeight: '700'
                                }}
                            >
                                R$ {priceDiscount}
                            </span>
                        </>
                    ) : (
                        <span
                            style={{
                                fontSize: '18px',
                                color: 'var(--dark-gray)',
                                fontWeight: '700'
                            }}
                        >
                            R$ {price}
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
}
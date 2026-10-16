import React from 'react';

export default function BuyBox({
    name,
    reference,
    stars = 4.7,
    rating = 90,
    price,
    priceDiscount,
    description,
    children
}) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '480px' }}>
            {/* Título do Produto */}
            <h1
                style={{
                    fontSize: '32px',
                    fontWeight: '700',
                    color: 'var(--dark-gray)',
                    lineHeight: '38px'
                }}
            >
                {name}
            </h1>

            {/* Referência */}
            <span style={{ fontSize: '12px', color: 'var(--dark-gray-3)' }}>
                {reference}
            </span>

            {/* Estrelas + Tag de Média */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ display: 'flex', gap: '2px', color: '#F6AA1C', fontSize: '15px' }}>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span style={{ color: '#E2E3FF' }}>★</span>
                </div>

                <div
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        backgroundColor: 'var(--warning)',
                        color: 'var(--white)',
                        borderRadius: '4px',
                        padding: '2px 8px',
                        fontSize: '13px',
                        fontWeight: '700'
                    }}
                >
                    <span>{stars}</span>
                    <span style={{ fontSize: '11px' }}>★</span>
                </div>

                <span style={{ fontSize: '14px', color: 'var(--light-gray)' }}>
                    ({rating} avaliações)
                </span>
            </div>

            {/* Preço */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', margin: '4px 0' }}>
                {priceDiscount ? (
                    <>
                        <span style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--dark-gray-2)' }}>R$</span>
                        <span
                            style={{
                                fontSize: '32px',
                                fontWeight: '700',
                                color: 'var(--dark-gray-2)',
                                letterSpacing: '-0.5px'
                            }}
                        >
                            {priceDiscount.toFixed(2).replace('.', ',')}
                        </span>
                        <span
                            style={{
                                fontSize: '16px',
                                color: 'var(--light-gray-2)',
                                textDecoration: 'line-through',
                                marginLeft: '6px'
                            }}
                        >
                            {price.toFixed(2).replace('.', ',')}
                        </span>
                    </>
                ) : (
                    <span style={{ fontSize: '32px', fontWeight: '700', color: 'var(--dark-gray-2)' }}>
                        R$ {price.toFixed(2).replace('.', ',')}
                    </span>
                )}
            </div>

            {/* Descrição */}
            <div>
                <h4 style={{ fontSize: '14px', color: 'var(--light-gray)', marginBottom: '6px', fontWeight: '600' }}>
                    Descrição do produto
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--dark-gray-2)', lineHeight: '22px' }}>
                    {description}
                </p>
            </div>

            {/* Opções (Tamanho / Cor) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '6px 0' }}>
                {children}
            </div>

            {/* Botão de Compra */}
            <button
                type="button"
                style={{
                    width: '220px',
                    height: '48px',
                    backgroundColor: 'var(--warning)',
                    color: 'var(--white)',
                    fontWeight: '700',
                    fontSize: '16px',
                    borderRadius: '6px',
                    marginTop: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                }}
            >
                COMPRAR
            </button>
        </div>
    );
}
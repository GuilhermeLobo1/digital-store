import React, { useState } from 'react';
import Layout from '../Layout';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import FilterGroup from '../../components/FilterGroup';

export default function ProductListingPage() {
    const [sortOrder, setSortOrder] = useState('menor');

    const todosProdutos = [
        { name: 'K-Swiss V8 - Masculino', image: '/product-thumb-1.jpeg', price: 200, priceDiscount: 149.9 },
        { name: 'K-Swiss V8 - Feminino', image: '/product-thumb-2.jpeg', price: 180, priceDiscount: 129.9 },
        { name: 'K-Swiss Casual', image: '/product-thumb-3.jpeg', price: 150, priceDiscount: null },
        { name: 'K-Swiss Running Pro', image: '/product-thumb-4.jpeg', price: 320, priceDiscount: 249.9 },
        { name: 'K-Swiss Urban Street', image: '/product-thumb-5.jpeg', price: 210, priceDiscount: 179.9 },
        { name: 'K-Swiss V8 Preto', image: '/product-thumb-1.jpeg', price: 250, priceDiscount: null },
        { name: 'K-Swiss Sport Edition', image: '/product-thumb-2.jpeg', price: 199, priceDiscount: 159.9 },
        { name: 'K-Swiss Classic 90s', image: '/product-thumb-3.jpeg', price: 280, priceDiscount: 219.9 },
        { name: 'K-Swiss Retro Runner', image: '/product-thumb-4.jpeg', price: 230, priceDiscount: 189.9 }
    ];

    const marcas = [
        { text: 'Adidas', value: 'adidas' },
        { text: 'Calenciaga', value: 'balenciaga' },
        { text: 'K-Swiss', value: 'k-swiss' },
        { text: 'Nike', value: 'nike' },
        { text: 'Puma', value: 'puma' }
    ];

    const categorias = [
        { text: 'Esporte e lazer' },
        { text: 'Casual' },
        { text: 'Utilitário' },
        { text: 'Corrida' }
    ];

    const genero = [
        { text: 'Masculino' },
        { text: 'Feminino' },
        { text: 'Unissex' }
    ];

    const estado = [
        { text: 'Novo' },
        { text: 'Usado' }
    ];

    return (
        <Layout>
            <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
                {/* Barra Lateral: Ordenação e Filtros */}
                <aside style={{ width: '308px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {/* 6.1 - Ordenar Por */}
                    <div
                        style={{
                            backgroundColor: 'var(--white)',
                            borderRadius: '4px',
                            padding: '12px 16px',
                            border: '1px solid var(--light-gray-2)',
                            minHeight: '60px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            boxSizing: 'border-box'
                        }}
                    >
                        <label
                            htmlFor="ordenar"
                            style={{ fontSize: '14px', color: 'var(--dark-gray-2)', fontWeight: 'bold', marginBottom: '6px' }}
                        >
                            Ordenar por
                        </label>
                        <select
                            id="ordenar"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            style={{
                                border: 'none',
                                outline: 'none',
                                fontSize: '14px',
                                color: 'var(--dark-gray-2)',
                                backgroundColor: 'transparent',
                                cursor: 'pointer'
                            }}
                        >
                            <option value="menor">Menor preço</option>
                            <option value="maior">Maior preço</option>
                        </select>
                    </div>

                    {/* 6.2 - Filtrar Por */}
                    <div
                        style={{
                            backgroundColor: 'var(--white)',
                            borderRadius: '4px',
                            padding: '24px',
                            boxSizing: 'border-box'
                        }}
                    >
                        <h3
                            style={{
                                fontSize: '16px',
                                color: 'var(--dark-gray-2)',
                                fontWeight: '700',
                                marginBottom: '12px'
                            }}
                        >
                            Filtrar por
                        </h3>
                        <hr style={{ borderColor: 'var(--light-gray-2)', borderWidth: '0.5px', marginBottom: '20px' }} />

                        <FilterGroup title="Marca" inputType="checkbox" options={marcas} />
                        <FilterGroup title="Categoria" inputType="checkbox" options={categorias} />
                        <FilterGroup title="Gênero" inputType="checkbox" options={genero} />
                        <FilterGroup title="Estado" inputType="radio" options={estado} />
                    </div>
                </aside>

                {/* 6.3 - Listagem Principal */}
                <main style={{ flex: 1 }}>
                    <Section
                        title={`Resultados para "Tênis" - ${todosProdutos.length} produtos`}
                        titleAlign="left"
                    >
                        <ProductListing products={todosProdutos} />
                    </Section>
                </main>
            </div>
        </Layout>
    );
}
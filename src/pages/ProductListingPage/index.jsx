import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../Layout';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import FilterGroup from '../../components/FilterGroup';

export default function ProductListingPage() {
    const [searchParams] = useSearchParams();
    const termoFiltroUrl = searchParams.get('filter') || '';

    const [sortOrder, setSortOrder] = useState('menor-preco');
    const [marcasSelecionadas, setMarcasSelecionadas] = useState([]);
    const [estadoSelecionado, setEstadoSelecionado] = useState('');
    const [filtroMobileAberto, setFiltroMobileAberto] = useState(false);

    const baseProdutos = [
        { id: 1, name: 'K-Swiss V8 - Masculino', brand: 'k-swiss', isNew: true, image: '/product-thumb-1.jpeg', price: 200, priceDiscount: 100 },
        { id: 2, name: 'Nike Air Max - Feminino', brand: 'nike', isNew: true, image: '/product-thumb-2.jpeg', price: 250, priceDiscount: 180 },
        { id: 3, name: 'Adidas Classic', brand: 'adidas', isNew: false, image: '/product-thumb-3.jpeg', price: 150, priceDiscount: null },
        { id: 4, name: 'Puma Running Pro', brand: 'puma', isNew: true, image: '/product-thumb-4.jpeg', price: 320, priceDiscount: 249.9 },
        { id: 5, name: 'Nike Revolution 6', brand: 'nike', isNew: true, image: '/product-thumb-5.jpeg', price: 299.9, priceDiscount: 219.9 },
        { id: 6, name: 'Adidas Street Wear', brand: 'adidas', isNew: false, image: '/product-thumb-1.jpeg', price: 220, priceDiscount: null },
        { id: 7, name: 'K-Swiss Sport Edition', brand: 'k-swiss', isNew: true, image: '/product-thumb-2.jpeg', price: 199, priceDiscount: 159.9 },
        { id: 8, name: 'Puma Urban 90s', brand: 'puma', isNew: false, image: '/product-thumb-3.jpeg', price: 280, priceDiscount: 219.9 }
    ];

    const handleBrandChange = (val) => {
        setMarcasSelecionadas((prev) =>
            prev.includes(val) ? prev.filter((item) => item !== val) : [...prev, val]
        );
    };

    const produtosExibidos = useMemo(() => {
        const filtrados = baseProdutos.filter((item) => {
            const passaMarca = marcasSelecionadas.length === 0 || marcasSelecionadas.includes(item.brand);
            const passaEstado =
                !estadoSelecionado ||
                (estadoSelecionado === 'novo' && item.isNew) ||
                (estadoSelecionado === 'usado' && !item.isNew);
            const passaBusca =
                !termoFiltroUrl ||
                item.name.toLowerCase().includes(termoFiltroUrl.toLowerCase()) ||
                item.brand.toLowerCase().includes(termoFiltroUrl.toLowerCase());

            return passaMarca && passaEstado && passaBusca;
        });

        return [...filtrados].sort((a, b) => {
            const precoA = a.priceDiscount ?? a.price;
            const precoB = b.priceDiscount ?? b.price;
            return sortOrder === 'menor-preco' ? precoA - precoB : precoB - precoA;
        });
    }, [marcasSelecionadas, estadoSelecionado, sortOrder, termoFiltroUrl]);

    const conteudoFiltros = (
        <>
            <FilterGroup
                title="Marca"
                inputType="checkbox"
                selectedValues={marcasSelecionadas}
                onChange={handleBrandChange}
                options={[
                    { text: 'Adidas', value: 'adidas' },
                    { text: 'K-Swiss', value: 'k-swiss' },
                    { text: 'Nike', value: 'nike' },
                    { text: 'Puma', value: 'puma' }
                ]}
            />
            <FilterGroup
                title="Estado"
                inputType="radio"
                selectedValues={estadoSelecionado}
                onChange={(val) => setEstadoSelecionado(val)}
                options={[
                    { text: 'Novo', value: 'novo' },
                    { text: 'Usado', value: 'usado' }
                ]}
            />
        </>
    );

    return (
        <Layout>
            {/* Topo da Listagem: Resultados + Ordenar por */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '16px',
                    marginBottom: '28px'
                }}
            >
                <div style={{ fontSize: '16px', color: 'var(--dark-gray-2)' }}>
                    <strong>Resultados para "{termoFiltroUrl || 'Tênis'}"</strong> - {produtosExibidos.length} produtos
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            border: '1px solid var(--dark-gray-2)',
                            borderRadius: '4px',
                            padding: '0 16px',
                            height: '60px',
                            backgroundColor: 'var(--white)'
                        }}
                    >
                        <label htmlFor="ordenar-select" style={{ fontSize: '16px', fontWeight: '700', color: 'var(--dark-gray-2)' }}>
                            Ordenar por:
                        </label>
                        <select
                            id="ordenar-select"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            style={{
                                border: 'none',
                                background: 'transparent',
                                fontSize: '16px',
                                color: 'var(--dark-gray-2)',
                                outline: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            <option value="menor-preco">Menor preço</option>
                            <option value="maior-preco">Maior preço</option>
                        </select>
                    </div>

                    {/* Botão Filtro Mobile */}
                    <button
                        type="button"
                        className="mobile-only"
                        onClick={() => setFiltroMobileAberto(true)}
                        style={{
                            width: '60px',
                            height: '60px',
                            backgroundColor: 'var(--primary)',
                            color: 'var(--white)',
                            border: 'none',
                            borderRadius: '4px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '22px',
                            cursor: 'pointer'
                        }}
                        aria-label="Abrir filtros"
                    >
                        ⏳
                    </button>
                </div>
            </div>

            {/* Área Principal: Coluna Lateral de Filtros + Grid de Produtos */}
            <div style={{ display: 'flex', gap: '28px', alignItems: 'flex-start' }}>
                <aside
                    className="desktop-only"
                    style={{
                        width: '308px',
                        flexShrink: 0,
                        backgroundColor: 'var(--white)',
                        padding: '30px',
                        borderRadius: '4px',
                        flexDirection: 'column'
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--dark-gray-2)', margin: 0 }}>
                            Filtrar por
                        </h3>
                        {(marcasSelecionadas.length > 0 || estadoSelecionado) && (
                            <button
                                type="button"
                                onClick={() => {
                                    setMarcasSelecionadas([]);
                                    setEstadoSelecionado('');
                                }}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: 'var(--primary)',
                                    fontSize: '12px',
                                    cursor: 'pointer',
                                    textDecoration: 'underline'
                                }}
                            >
                                Limpar
                            </button>
                        )}
                    </div>
                    <hr style={{ border: 'none', borderTop: '1px solid var(--light-gray-2)', margin: '16px 0' }} />
                    {conteudoFiltros}
                </aside>

                <div style={{ flex: 1, width: '100%' }}>
                    <Section title={`${produtosExibidos.length} produtos encontrados`} titleAlign="left">
                        <ProductListing products={produtosExibidos} />
                    </Section>
                </div>
            </div>

            {/* Gaveta de Filtros Mobile */}
            {filtroMobileAberto && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        zIndex: 999,
                        display: 'flex'
                    }}
                    onClick={() => setFiltroMobileAberto(false)}
                >
                    <div
                        style={{
                            width: '300px',
                            maxWidth: '85%',
                            height: '100%',
                            backgroundColor: 'var(--white)',
                            padding: '24px',
                            overflowY: 'auto'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--dark-gray-2)', margin: 0 }}>
                                Filtrar por
                            </h3>
                            <button
                                type="button"
                                onClick={() => setFiltroMobileAberto(false)}
                                style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}
                            >
                                ✕
                            </button>
                        </div>
                        <hr style={{ border: 'none', borderTop: '1px solid var(--light-gray-2)', margin: '16px 0' }} />
                        {conteudoFiltros}
                    </div>
                </div>
            )}
        </Layout>
    );
}
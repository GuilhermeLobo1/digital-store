import React, { useState, useMemo } from 'react';
import Layout from '../Layout';
import ProductListing from '../../components/ProductListing';
import FilterGroup from '../../components/FilterGroup';

export default function ProductListingPage() {
    const [sortOrder, setSortOrder] = useState('mais-relevantes');
    const [filtrosAbertos, setFiltrosAbertos] = useState(false);
    const [marcasSelecionadas, setMarcasSelecionadas] = useState([]);
    const [estadoSelecionado, setEstadoSelecionado] = useState('');

    const baseProdutos = [
        { id: 1, name: 'K-Swiss V8 - Masculino', brand: 'k-swiss', image: '/product-thumb-1.jpeg', price: 200, priceDiscount: 100, isNew: true },
        { id: 2, name: 'Adidas Grand Court - Feminino', brand: 'adiddas', image: '/product-thumb-2.jpeg', price: 220, priceDiscount: 150, isNew: true },
        { id: 3, name: 'Nike Revolution Casual', brand: 'nike', image: '/product-thumb-3.jpeg', price: 280, priceDiscount: 200, isNew: false },
        { id: 4, name: 'Puma Runner Pro', brand: 'puma', image: '/product-thumb-4.jpeg', price: 190, priceDiscount: 130, isNew: true },
        { id: 5, name: 'Calenciaga Track Style', brand: 'calenciaga', image: '/product-thumb-5.jpeg', price: 600, priceDiscount: 450, isNew: false },
        { id: 6, name: 'K-Swiss V8 Preto', brand: 'k-swiss', image: '/product-thumb-1.jpeg', price: 210, priceDiscount: 160, isNew: true },
        { id: 7, name: 'Adidas Classic Edition', brand: 'adiddas', image: '/product-thumb-2.jpeg', price: 250, priceDiscount: 180, isNew: false },
        { id: 8, name: 'Nike Air Urban 90s', brand: 'nike', image: '/product-thumb-3.jpeg', price: 340, priceDiscount: 290, isNew: true }
    ];

    const opcoesMarcas = [
        { text: 'Adiddas', value: 'adiddas' },
        { text: 'Calenciaga', value: 'calenciaga' },
        { text: 'K-Swiss', value: 'k-swiss' },
        { text: 'Nike', value: 'nike' },
        { text: 'Puma', value: 'puma' }
    ];

    const opcoesEstado = [
        { text: 'Novo', value: 'novo' },
        { text: 'Usado', value: 'usado' }
    ];

    const alternarMarca = (marca) => {
        setMarcasSelecionadas((anteriores) =>
            anteriores.includes(marca)
                ? anteriores.filter((m) => m !== marca)
                : [...anteriores, marca]
        );
    };

    // Filtragem e ordenação dinâmica dos produtos
    const produtosExibidos = useMemo(() => {
        let lista = baseProdutos.filter((item) => {
            const passaMarca = marcasSelecionadas.length === 0 || marcasSelecionadas.includes(item.brand);
            const passaEstado =
                !estadoSelecionado ||
                (estadoSelecionado === 'novo' && item.isNew) ||
                (estadoSelecionado === 'usado' && !item.isNew);

            return passaMarca && passaEstado;
        });

        if (sortOrder === 'menor-preco') {
            lista.sort((a, b) => (a.priceDiscount || a.price) - (b.priceDiscount || b.price));
        } else if (sortOrder === 'maior-preco') {
            lista.sort((a, b) => (b.priceDiscount || b.price) - (a.priceDiscount || a.price));
        }

        return lista;
    }, [marcasSelecionadas, estadoSelecionado, sortOrder]);

    const BlocoFiltros = () => (
        <>
            <FilterGroup
                title="Marka"
                inputType="checkbox"
                options={opcoesMarcas}
                selectedValues={marcasSelecionadas}
                onChange={alternarMarca}
            />
            <FilterGroup
                title="Estado"
                inputType="radio"
                options={opcoesEstado}
                selectedValues={estadoSelecionado}
                onChange={(val) => setEstadoSelecionado(val)}
            />
        </>
    );

    return (
        <Layout>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '16px',
                    marginBottom: '32px'
                }}
            >
                <span style={{ fontSize: '16px', color: 'var(--dark-gray-2)' }}>
                    <strong>Resultados para “Tênis”</strong> - {produtosExibidos.length} produtos
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid var(--dark-gray-2)',
                            borderRadius: '4px',
                            padding: '10px 16px',
                            backgroundColor: 'var(--white)'
                        }}
                    >
                        <span style={{ fontSize: '14px', color: 'var(--dark-gray-2)', fontWeight: '700', marginRight: '6px' }}>
                            Ordernar por:
                        </span>
                        <select
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
                            <option value="mais-relevantes">mais relevantes</option>
                            <option value="menor-preco">menor preço</option>
                            <option value="maior-preco">maior preço</option>
                        </select>
                    </div>

                    <button
                        type="button"
                        className="mobile-only"
                        onClick={() => setFiltrosAbertos(true)}
                        style={{
                            backgroundColor: 'var(--primary)',
                            color: 'var(--white)',
                            border: 'none',
                            borderRadius: '4px',
                            width: '44px',
                            height: '44px',
                            cursor: 'pointer',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '20px'
                        }}
                        title="Abrir filtros"
                    >
                        ⚡
                    </button>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
                <aside
                    className="desktop-only"
                    style={{
                        width: '308px',
                        flexShrink: 0,
                        backgroundColor: 'var(--white)',
                        borderRadius: '4px',
                        padding: '24px',
                        flexDirection: 'column',
                        boxSizing: 'border-box'
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <h3 style={{ fontSize: '16px', color: 'var(--dark-gray-2)', fontWeight: '700', margin: 0 }}>
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
                    <hr style={{ borderColor: 'var(--light-gray-3)', borderWidth: '0.5px', marginBottom: '20px' }} />
                    <BlocoFiltros />
                </aside>

                <main style={{ flex: 1 }}>
                    <ProductListing products={produtosExibidos} />
                </main>
            </div>

            {filtrosAbertos && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 999,
                        display: 'flex'
                    }}
                    onClick={() => setFiltrosAbertos(false)}
                >
                    <div
                        style={{
                            width: '320px',
                            maxWidth: '85%',
                            height: '100%',
                            backgroundColor: 'var(--white)',
                            padding: '24px',
                            overflowY: 'auto',
                            boxSizing: 'border-box'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <h3 style={{ fontSize: '16px', color: 'var(--dark-gray-2)', fontWeight: '700', margin: 0 }}>
                                Filtrar por
                            </h3>
                            <button
                                type="button"
                                onClick={() => setFiltrosAbertos(false)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '20px',
                                    cursor: 'pointer',
                                    color: 'var(--dark-gray-2)'
                                }}
                            >
                                ✕
                            </button>
                        </div>
                        <hr style={{ borderColor: 'var(--light-gray-3)', borderWidth: '0.5px', marginBottom: '20px' }} />
                        <BlocoFiltros />
                    </div>
                </div>
            )}
        </Layout>
    );
}
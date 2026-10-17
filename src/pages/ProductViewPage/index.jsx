import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Layout';
import Gallery from '../../components/Gallery';
import BuyBox from '../../components/BuyBox';
import ProductOptions from '../../components/ProductOptions';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';

export default function ProductViewPage() {
    const { id } = useParams();

    // Faz a página subir para o topo sempre que abrir um produto
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const imagensGaleria = [
        { src: '/produc-image-1.jpeg' },
        { src: '/produc-image-2.jpeg' },
        { src: '/produc-image-3.jpeg' },
        { src: '/produc-image-4.jpeg' },
        { src: '/produc-image-5.jpeg' }
    ];

    // Extensões corrigidas para .jpeg
    const produtosRecomendados = [
        { id: 1, name: 'K-Swiss V8 - Masculino', image: '/product-thumb-1.jpeg', price: 200, priceDiscount: 100 },
        { id: 2, name: 'K-Swiss V8 - Feminino', image: '/product-thumb-2.jpeg', price: 200, priceDiscount: 100 },
        { id: 3, name: 'K-Swiss Casual', image: '/product-thumb-3.jpeg', price: 200, priceDiscount: null },
        { id: 4, name: 'K-Swiss Running Pro', image: '/product-thumb-4.jpeg', price: 200, priceDiscount: 100 }
    ];

    return (
        <Layout>
            {/* Breadcrumb */}
            <div style={{ fontSize: '14px', color: 'var(--dark-gray-2)', marginBottom: '24px' }}>
                <strong>Home</strong> / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino
            </div>

            {/* Área Principal: Galeria + BuyBox */}
            <div
                style={{
                    display: 'flex',
                    gap: '40px',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    marginBottom: '60px'
                }}
            >
                <div style={{ flex: '1', minWidth: '300px', maxWidth: '700px' }}>
                    <Gallery
                        images={imagensGaleria}
                        showThumbs
                        width={700}
                        height={570}
                        radius="4px"
                    />
                </div>

                <div style={{ flex: '1', minWidth: '300px' }}>
                    <BuyBox
                        name="Tênis Nike Revolution 6 Next Nature Masculino"
                        reference="Casual | Nike | REF:38416711"
                        stars={4.7}
                        rating={90}
                        price={299.9}
                        priceDiscount={219.9}
                        description="O amortecimento revolucionário suporta cada passada sua com espuma macia para que corra com o máximo conforto."
                    >
                        <div>
                            <span style={{ fontSize: '14px', color: 'var(--light-gray)', fontWeight: '700', display: 'block', marginBottom: '8px' }}>
                                Tamanho
                            </span>
                            <ProductOptions
                                options={['39', '40', '41', '42', '43']}
                                shape="square"
                                radius="4px"
                                type="text"
                            />
                        </div>

                        <div>
                            <span style={{ fontSize: '14px', color: 'var(--light-gray)', fontWeight: '700', display: 'block', marginBottom: '8px' }}>
                                Cor
                            </span>
                            <ProductOptions
                                options={['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7']}
                                shape="circle"
                                type="color"
                            />
                        </div>
                    </BuyBox>
                </div>
            </div>

            {/* Produtos Recomendados */}
            <Section
                title="Produtos recomendados"
                titleAlign="left"
                link={{ text: 'Ver todos', href: '/produtos' }}
            >
                <ProductListing products={produtosRecomendados} />
            </Section>
        </Layout>
    );
}
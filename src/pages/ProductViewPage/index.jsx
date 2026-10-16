import React from 'react';
import Layout from '../Layout';
import Gallery from '../../components/Gallery';
import BuyBox from '../../components/BuyBox';
import ProductOptions from '../../components/ProductOptions';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';

export default function ProductViewPage() {
    const imagensGaleria = [
        { src: '/produc-image-1.jpeg' },
        { src: '/produc-image-2.jpeg' },
        { src: '/produc-image-3.jpeg' },
        { src: '/produc-image-4.jpeg' },
        { src: '/produc-image-5.jpeg' }
    ];

    const tamanhos = ['39', '40', '41', '42', '43'];
    const cores = ['#6FEEFF', '#FF6969', '#5D5D5D', '#6D70B7'];

    const recomendados = [
        { name: 'K-Swiss V8 - Masculino', image: '/product-thumb-1.png', price: 200, priceDiscount: 149.9 },
        { name: 'K-Swiss V8 - Feminino', image: '/product-thumb-2.png', price: 180, priceDiscount: 129.9 },
        { name: 'K-Swiss Casual', image: '/product-thumb-3.png', price: 150, priceDiscount: null },
        { name: 'K-Swiss Running Pro', image: '/product-thumb-4.png', price: 320, priceDiscount: 249.9 }
    ];

    return (
        <Layout>
            {/* Breadcrumb visual */}
            <nav style={{ fontSize: '14px', color: 'var(--dark-gray-2)', marginBottom: '24px' }}>
                <strong>Home</strong> / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino
            </nav>

            {/* Secção Principal: Galeria + BuyBox lado a lado */}
            <div
                style={{
                    display: 'flex',
                    gap: '40px',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    marginBottom: '60px'
                }}
            >
                <div style={{ flex: '1 1 500px', maxWidth: '700px' }}>
                    <Gallery
                        images={imagensGaleria}
                        width={700}
                        height={570}
                        radius="4px"
                        showThumbs
                    />
                </div>

                <div style={{ flex: '1 1 400px' }}>
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
                            <span style={{ fontSize: '14px', color: 'var(--light-gray)', display: 'block', marginBottom: '8px' }}>
                                Tamanho
                            </span>
                            <ProductOptions options={tamanhos} shape="square" radius="4px" type="text" />
                        </div>

                        <div>
                            <span style={{ fontSize: '14px', color: 'var(--light-gray)', display: 'block', marginBottom: '8px' }}>
                                Cor
                            </span>
                            <ProductOptions options={cores} shape="circle" type="color" />
                        </div>
                    </BuyBox>
                </div>
            </div>

            {/* Produtos recomendados */}
            <Section
                title="Produtos recomendados"
                titleAlign="left"
                link={{ text: 'Ver todos', href: '/produtos' }}
            >
                <ProductListing products={recomendados} />
            </Section>
        </Layout>
    );
}
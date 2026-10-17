import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Layout';
import Gallery from '../../components/Gallery';
import BuyBox from '../../components/BuyBox';
import ProductOptions from '../../components/ProductOptions';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';

const catalogoProdutos = {
    1: { name: 'K-Swiss V8 - Masculino', reference: 'Casual | K-Swiss | REF:1001', stars: 4.8, rating: 120, price: 200, priceDiscount: 100, mainImage: '/product-thumb-1.jpeg' },
    2: { name: 'Nike Air Max - Feminino', reference: 'Esporte | Nike | REF:1002', stars: 4.9, rating: 85, price: 250, priceDiscount: 180, mainImage: '/product-thumb-2.jpeg' },
    3: { name: 'Adidas Classic Casual', reference: 'Casual | Adidas | REF:1003', stars: 4.6, rating: 64, price: 150, priceDiscount: null, mainImage: '/product-thumb-3.jpeg' },
    4: { name: 'Puma Running Pro', reference: 'Corrida | Puma | REF:1004', stars: 4.7, rating: 92, price: 320, priceDiscount: 249.9, mainImage: '/product-thumb-4.jpeg' },
    5: { name: 'Nike Revolution 6', reference: 'Casual | Nike | REF:38416711', stars: 4.7, rating: 90, price: 299.9, priceDiscount: 219.9, mainImage: '/product-thumb-5.jpeg' },
    6: { name: 'Adidas Street Wear', reference: 'Casual | Adidas | REF:1006', stars: 4.5, rating: 48, price: 220, priceDiscount: null, mainImage: '/product-thumb-1.jpeg' },
    7: { name: 'K-Swiss Sport Edition', reference: 'Esporte | K-Swiss | REF:1007', stars: 4.8, rating: 73, price: 199, priceDiscount: 159.9, mainImage: '/product-thumb-2.jpeg' },
    8: { name: 'Puma Urban 90s', reference: 'Casual | Puma | REF:1008', stars: 4.6, rating: 55, price: 280, priceDiscount: 219.9, mainImage: '/product-thumb-3.jpeg' }
};

export default function ProductViewPage() {
    const { id } = useParams();
    const produtoAtual = catalogoProdutos[id] || catalogoProdutos[1];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // A 1ª foto da galeria agora é exatamente a foto do card clicado!
    const imagensGaleria = [
        { src: produtoAtual.mainImage },
        { src: '/produc-image-1.jpeg' },
        { src: '/produc-image-2.jpeg' },
        { src: '/produc-image-3.jpeg' },
        { src: '/produc-image-4.jpeg' }
    ];

    const produtosRecomendados = [
        { id: 1, name: 'K-Swiss V8 - Masculino', image: '/product-thumb-1.jpeg', price: 200, priceDiscount: 100 },
        { id: 2, name: 'Nike Air Max - Feminino', image: '/product-thumb-2.jpeg', price: 250, priceDiscount: 180 },
        { id: 3, name: 'Adidas Classic Casual', image: '/product-thumb-3.jpeg', price: 150, priceDiscount: null },
        { id: 4, name: 'Puma Running Pro', image: '/product-thumb-4.jpeg', price: 320, priceDiscount: 249.9 }
    ];

    return (
        <Layout>
            <div style={{ fontSize: '14px', color: 'var(--dark-gray-2)', marginBottom: '24px' }}>
                <strong>Home</strong> / Produtos / Tênis / {produtoAtual.name}
            </div>

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
                        name={produtoAtual.name}
                        reference={produtoAtual.reference}
                        stars={produtoAtual.stars}
                        rating={produtoAtual.rating}
                        price={produtoAtual.price}
                        priceDiscount={produtoAtual.priceDiscount}
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
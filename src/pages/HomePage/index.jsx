import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import Gallery from '../../components/Gallery';
import heroImg from '../../assets/hero.png';

export default function HomePage() {
    const [categoriaAtiva, setCategoriaAtiva] = useState(0);

    const slidesHome = [
        {
            src: heroImg,
            subtitle: 'Melhores ofertas personalizadas',
            title: 'Queima de estoque Nike 🔥',
            description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
            filter: 'none'
        },
        {
            src: heroImg,
            subtitle: 'Novidades da estação',
            title: 'Coleção Air Force Blue ⚡',
            description: 'Modelos exclusivos com amortecimento Air e acabamento premium para o seu dia a dia.',
            filter: 'hue-rotate(210deg)'
        },
        {
            src: heroImg,
            subtitle: 'Edição limitada',
            title: 'Estilo Urbano Street 🔥',
            description: 'Descontos especiais em toda a linha casual e desportiva por tempo limitado.',
            filter: 'hue-rotate(110deg)'
        },
        {
            src: heroImg,
            subtitle: 'Oferta da semana',
            title: 'Clássicos em Promoção 👟',
            description: 'Aproveite até 30% de desconto nos modelos mais procurados da Digital Store.',
            filter: 'hue-rotate(290deg)'
        }
    ];
    const colecoesDestaque = [
        { title: 'Novo drop\nSupreme', image: '/collection-1.png' },
        { title: 'Coleção\nAdidas', image: '/collection-2.png' },
        { title: 'Novo\nBeats Bass', image: '/collection-3.png' }
    ];

    const categoriasIcones = [
        {
            name: 'Camisetas',
            svg: (color) => (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
                </svg>
            )
        },
        {
            name: 'Calças',
            svg: (color) => (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2h12l1 20h-5l-2-11-2 11H5L6 2z" />
                    <path d="M6 6h12" />
                </svg>
            )
        },
        {
            name: 'Bonés',
            svg: (color) => (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 15a8 8 0 0 1 16 0H4z" />
                    <path d="M4 15h18c1 0 1 2 0 2H4v-2z" />
                    <circle cx="12" cy="6" r="1" />
                </svg>
            )
        },
        {
            name: 'Headphones',
            svg: (color) => (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
            )
        },
        {
            name: 'Tênis',
            svg: (color) => (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 16l2-6 5 2 6-4 5 5v5H3v-2z" />
                    <path d="M3 18h18" />
                </svg>
            )
        }
    ];

    const produtosEmAlta = [
        { id: 1, name: 'K-Swiss V8 - Masculino', image: '/product-thumb-1.jpeg', price: 200, priceDiscount: 100 },
        { id: 2, name: 'Nike Air Max - Feminino', image: '/product-thumb-2.jpeg', price: 250, priceDiscount: 180 },
        { id: 3, name: 'Adidas Classic Casual', image: '/product-thumb-3.jpeg', price: 150, priceDiscount: null },
        { id: 4, name: 'Puma Running Pro', image: '/product-thumb-4.jpeg', price: 320, priceDiscount: 249.9 },
        { id: 5, name: 'Nike Revolution 6', image: '/product-thumb-5.jpeg', price: 299.9, priceDiscount: 219.9 },
        { id: 6, name: 'Adidas Street Wear', image: '/product-thumb-1.jpeg', price: 220, priceDiscount: null },
        { id: 7, name: 'K-Swiss Sport Edition', image: '/product-thumb-2.jpeg', price: 199, priceDiscount: 159.9 },
        { id: 8, name: 'Puma Urban 90s', image: '/product-thumb-3.jpeg', price: 280, priceDiscount: 219.9 }
    ];

    return (
        <Layout>
            {/* 5.1 - Slide de Imagens */}
            <Gallery images={slidesHome} width={1440} height={681} radius="4px" />

            {/* 5.2 - Coleções em Destaque */}
            <Section title="Coleções em destaque" titleAlign="left">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '16px'
                    }}
                >
                    {colecoesDestaque.map((col, index) => (
                        <div
                            key={index}
                            style={{
                                position: 'relative',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                backgroundColor: '#D8E3F2',
                                aspectRatio: '405 / 251',
                                padding: '14px 30px 24px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                boxSizing: 'border-box'
                            }}
                        >
                            <img
                                src={col.image}
                                alt={col.title}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    height: '100%',
                                    width: '100%',
                                    objectFit: 'contain',
                                    objectPosition: 'right center',
                                    zIndex: 1
                                }}
                            />

                            {/* Tag 30% OFF posicionada acima do título */}
                            <div style={{ position: 'relative', zIndex: 2 }}>
                                <span
                                    style={{
                                        backgroundColor: '#E7FF86',
                                        color: 'var(--dark-gray-2)',
                                        fontSize: '12px',
                                        fontWeight: '700',
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                        display: 'inline-block'
                                    }}
                                >
                                    30% OFF
                                </span>
                            </div>

                            {/* Botão Comprar posicionado abaixo do título */}
                            <div style={{ position: 'relative', zIndex: 2 }}>
                                <Link
                                    to="/produtos"
                                    style={{
                                        backgroundColor: 'var(--light-gray-3)',
                                        color: 'var(--primary)',
                                        fontWeight: '700',
                                        fontSize: '14px',
                                        padding: '10px 32px',
                                        borderRadius: '8px',
                                        textDecoration: 'none',
                                        display: 'inline-block'
                                    }}
                                >
                                    Comprar
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 5.3 - Produtos em Alta */}
            <Section
                title="Produtos em alta"
                titleAlign="left"
                link={{ text: 'Ver todos', href: '/produtos' }}
            >
                <ProductListing products={produtosEmAlta} />
            </Section>

            {/* 5.4 - Banner de Oferta Especial (Air Jordan) */}
            <section
                style={{
                    backgroundColor: 'var(--white)',
                    borderRadius: '8px',
                    padding: '60px 40px',
                    marginTop: '60px',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '60px',
                    flexWrap: 'wrap'
                }}
            >
                {/* Círculo Lilás + Imagem do Ténis */}
                <div
                    style={{
                        position: 'relative',
                        width: '466px',
                        maxWidth: '100%',
                        height: '400px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            width: '380px',
                            height: '380px',
                            borderRadius: '50%',
                            background: 'linear-gradient(180deg, rgba(66, 0, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%)',
                            zIndex: 1
                        }}
                    />
                    <img
                        src="/produc-image-1.jpeg"
                        alt="Air Jordan edição de colecionador"
                        style={{
                            position: 'relative',
                            zIndex: 2,
                            width: '320px',
                            height: '320px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
                        }}
                    />
                </div>

                {/* Texto da Oferta Especial */}
                <div style={{ maxWidth: '500px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
                    <span
                        style={{
                            color: 'var(--primary)',
                            fontSize: '14px',
                            fontWeight: '700'
                        }}
                    >
                        Oferta especial
                    </span>

                    <h2
                        style={{
                            fontSize: '42px',
                            fontWeight: '700',
                            color: 'var(--dark-gray-2)',
                            lineHeight: '48px',
                            margin: 0
                        }}
                    >
                        Air Jordan edição de colecionador
                    </h2>

                    <p
                        style={{
                            fontSize: '16px',
                            color: 'var(--dark-gray-2)',
                            lineHeight: '26px',
                            margin: '4px 0 8px'
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    </p>

                    <Link
                        to="/product/1"
                        style={{
                            backgroundColor: 'var(--primary)',
                            color: 'var(--white)',
                            fontWeight: '700',
                            fontSize: '14px',
                            padding: '12px 48px',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            display: 'inline-block'
                        }}
                    >
                        Ver Oferta
                    </Link>
                </div>
            </section>
        </Layout>
    );
}
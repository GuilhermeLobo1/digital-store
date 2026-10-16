import Layout from '../Layout';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import Gallery from '../../components/Gallery';

export default function HomePage() {
    const slidesHome = [
        { src: '/home-slide-1.jpeg' },
        { src: '/home-slide-2.jpeg' }
    ];

    const produtosEmAlta = [
        { name: 'K-Swiss V8 - Masculino', image: '/product-thumb-1.jpeg', price: 200, priceDiscount: 149.9 },
        { name: 'K-Swiss V8 - Feminino', image: '/product-thumb-2.jpeg', price: 180, priceDiscount: 129.9 },
        { name: 'K-Swiss Casual', image: '/product-thumb-3.jpeg', price: 150, priceDiscount: null },
        { name: 'K-Swiss Running Pro', image: '/product-thumb-4.jpeg', price: 320, priceDiscount: 249.9 },
        { name: 'K-Swiss Urban Street', image: '/product-thumb-5.jpeg', price: 210, priceDiscount: 179.9 },
        { name: 'K-Swiss V8 Preto', image: '/product-thumb-1.jpeg', price: 250, priceDiscount: null },
        { name: 'K-Swiss Sport Edition', image: '/product-thumb-2.jpeg', price: 199, priceDiscount: 159.9 },
        { name: 'K-Swiss Classic 90s', image: '/product-thumb-3.jpeg', price: 280, priceDiscount: 219.9 }
    ];

    return (
        <Layout>
            {/* 5.1 - Slide de Imagens */}
            <Gallery images={slidesHome} width={1440} height={681} radius="4px" />

            {/* 5.2 - Coleções em Destaque */}
            <Section title="Coleções em destaque" titleAlign="center">
                <div
                    style={{
                        display: 'flex',
                        gap: '20px',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}
                >
                    {['/collection-1.png', '/collection-2.png', '/collection-3.png'].map((col, index) => (
                        <div
                            key={index}
                            style={{
                                borderRadius: '4px',
                                overflow: 'hidden',
                                backgroundColor: '#D8E3F2',
                                width: '320px',
                                height: '180px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                            }}
                        >
                            <img
                                src={col}
                                alt={`Coleção ${index + 1}`}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                onError={(e) => {
                                    e.target.src = `https://placehold.co/320x180?text=Colecao+${index + 1}`;
                                }}
                            />
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
        </Layout>
    );
}
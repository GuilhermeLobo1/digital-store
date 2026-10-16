import Layout from '../Layout';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';

export default function HomePage() {
    const produtosExemplo = [
        { name: 'K-Swiss V8 - Masculino', image: '/product-thumb-1.png', price: 200, priceDiscount: 149.9 },
        { name: 'K-Swiss V8 - Feminino', image: '/product-thumb-2.png', price: 180, priceDiscount: 129.9 },
        { name: 'K-Swiss Casual', image: '/product-thumb-3.png', price: 150, priceDiscount: null },
        { name: 'K-Swiss Running Pro', image: '/product-thumb-4.png', price: 320, priceDiscount: 249.9 },
        { name: 'K-Swiss Urban Street', image: '/product-thumb-5.png', price: 210, priceDiscount: 179.9 },
        { name: 'K-Swiss V8 Preto', image: '/product-thumb-6.png', price: 250, priceDiscount: null },
        { name: 'K-Swiss Sport Edition', image: '/product-thumb-7.png', price: 199, priceDiscount: 159.9 },
        { name: 'K-Swiss Classic 90s', image: '/product-thumb-8.png', price: 280, priceDiscount: 219.9 }
    ];

    return (
        <Layout>
            <Section
                title="Produtos em alta"
                titleAlign="left"
                link={{ text: 'Ver todos', href: '/produtos' }}
            >
                <ProductListing products={produtosExemplo} />
            </Section>
        </Layout>
    );
}
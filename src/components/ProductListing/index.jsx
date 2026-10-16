import React from 'react';
import ProductCard from '../ProductCard';

export default function ProductListing({ products = [] }) {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(292px, 1fr))',
                gap: '24px',
                justifyItems: 'center',
                width: '100%'
            }}
        >
            {products.map((item, index) => (
                <ProductCard
                    key={index}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    priceDiscount={item.priceDiscount}
                />
            ))}
        </div>
    );
}
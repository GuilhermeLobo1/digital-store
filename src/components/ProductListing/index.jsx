import React from 'react';
import ProductCard from '../ProductCard';

export default function ProductListing({ products = [] }) {
    return (
        <div className="product-grid">
            {products.map((product, index) => (
                <ProductCard
                    key={product.id || index}
                    id={product.id || 1}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    priceDiscount={product.priceDiscount}
                />
            ))}
        </div>
    );
}
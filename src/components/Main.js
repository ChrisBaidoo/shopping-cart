import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd, localStockLevels } = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.name} product={product} onAdd={onAdd} localStockLevels={localStockLevels} ></Product>
        ))}
      </div>
    </main>
  );
}

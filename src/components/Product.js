import React from 'react';

export default function Product(props) {
  const { product, onAdd, localStockLevels
  } = props;
  return (
    <div key={product.name}>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>£{product.price}</div>
      {localStockLevels[product.name] === 0 ? <p className="outOfStock">Out of Stock</p> : <p>In Stock</p>}
      <div>
        <button onClick={() => onAdd(product)}
          disabled={localStockLevels[product.name] === 0}
          className="product">Add To Basket</button>
      </div>
    </div>
  );
}

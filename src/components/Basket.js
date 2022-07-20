import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove, localStockLevels } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const totalPrice = itemsPrice;
  return (
    <aside className="basket col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.name} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>
              <button disabled={localStockLevels[item.name] === 0}
                onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x £{item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Sub total</div>
              <div className="col-1 text-right">£{itemsPrice.toFixed(2)}</div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>£{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}

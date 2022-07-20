import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import { products, stockLevels } from './data';
import { onAdd, onRemove } from './functions/cartLogic'
import { useState, useEffect } from 'react';
import useLocalStorage from "./functions/useLocalStorage"

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [localStockLevels, setLocalStockLevels] = useLocalStorage('stocks', stockLevels);
  const addCart = (product) => onAdd(product, cartItems, setCartItems, localStockLevels, setLocalStockLevels);
  const removeCart = (product) => onRemove(product, cartItems, setCartItems, localStockLevels, setLocalStockLevels);


  const onRefreshGetCartItemsFromLocalStorage = () => {
    let cartItems = [];
    Object.keys(localStockLevels).forEach(key => {
      let qty = stockLevels[key] - localStockLevels[key];
      if (qty > 0) {
        let product = products.find((x) => x.name === key);
        cartItems.push({ ...product, qty });
      }
    });
    setCartItems(cartItems);
  }

  useEffect(() => {
    onRefreshGetCartItemsFromLocalStorage();
  }, [])

  return (
    <div className="App">
      <Header />
      <div className="row">
        <Main
          products={products}
          onAdd={addCart}
          localStockLevels={localStockLevels}
        />
        <Basket
          cartItems={cartItems}
          onAdd={addCart}
          onRemove={removeCart}
          localStockLevels={localStockLevels}

        />
      </div>
    </div>
  );
}

export default App;

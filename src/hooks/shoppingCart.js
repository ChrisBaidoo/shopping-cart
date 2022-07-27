
import { useState, useEffect } from 'react';
import { products, stockLevels } from '../data'
import { onAdd, onRemove } from '../functions/cartLogic'
import useLocalStorage from "../hooks/useLocalStorage"

const useShoppingCart = (initialCartItems = []) => {

    const [cartItems, setCartItems] = useState(initialCartItems);
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

    return {
        products,
        localStockLevels,
        cartItems,
        addCart,
        removeCart,
    }
}

export default useShoppingCart
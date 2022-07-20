
const addStock = (productName, localStockLevels, setLocalStockLevels, qty) => {
    let quantity = qty
    if (localStockLevels !== null && localStockLevels[productName] > 0) {
        Object.keys(localStockLevels).forEach(key => {
            if (productName === key) {
                localStockLevels[key] = localStockLevels[productName] - 1;
                quantity = quantity + 1;

                setLocalStockLevels({ ...localStockLevels });

                return quantity;
            }
        });

    }
    return quantity;
}

const removeStock = (productName, localStockLevels, setLocalStockLevels, qty) => {
    let quantity = qty

    if (localStockLevels !== null && quantity > 0) {
        Object.keys(localStockLevels).forEach(key => {
            if (productName === key) {
                localStockLevels[key] = localStockLevels[productName] + 1;
                quantity = quantity - 1;

                setLocalStockLevels({ ...localStockLevels });

                return quantity;
            }
        });
    }
    return quantity;
}



export const onAdd = (product, cartItems, setCartItems, localStockLevels, setLocalStockLevels) => {
    const exist = cartItems.find((x) => x.name === product.name);
    if (exist) {
        setCartItems(
            cartItems.map((x) =>
                x.name === product.name ? { ...exist, qty: addStock(product.name, localStockLevels, setLocalStockLevels, exist.qty) } : x
            )
        );
    } else {
        setCartItems([...cartItems, { ...product, qty: addStock(product.name, localStockLevels, setLocalStockLevels, 0) }]);
    }
};

export const onRemove = (product, cartItems, setCartItems, localStockLevels, setLocalStockLevels,) => {
    const exist = cartItems.find((x) => x.name === product.name);
    if (exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.name !== product.name));
        removeStock(product.name, localStockLevels, setLocalStockLevels, 1);
    } else {
        setCartItems(
            cartItems.map((x) =>
                x.name === product.name ? { ...exist, qty: removeStock(product.name, localStockLevels, setLocalStockLevels, exist.qty) } : x
            )
        );
    }
};


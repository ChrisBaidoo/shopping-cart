import Header from './Header';
import Main from './Main';
import Basket from './Basket';
import useShoppingCart from '../hooks/shoppingCart'

const Layout = () => {

    const { products, addCart, removeCart, cartItems, localStockLevels } = useShoppingCart()

    return (
        <>
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

        </>



    )

}

export default Layout
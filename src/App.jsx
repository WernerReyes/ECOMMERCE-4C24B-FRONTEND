import CartPage from "./cart/pages/CartPage"
//import ShopPage from "./shop/pages/ShopPage"


function App() {

  return (
    < >
     {/* <ShopPage /> */}
     {/* <CartPage /> */}
     <switch>
        <Route path="/cart" component={CartPage} />
        <Route path="/shop" component={ShopPage} />
     </switch>
    </>
  )
}

export default App

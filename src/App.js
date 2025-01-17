import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Contexts
import ProductContext from './contexts/ProductContext.js';
import CartContext from './contexts/CartContext.js';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	return (
		<div className="App">
      <CartContext.Provider value={cart}>
        <Navigation />

        <ProductContext.Provider value={{ products, addItem }}>
		  <Route 
			  exact path="/" 
			  component={Products} 
		  />

		  <Route 
			  path="/cart" 
			  component={ShoppingCart} 
		  />
        </ProductContext.Provider>
      </CartContext.Provider>
    </div>
  );
}

export default App;

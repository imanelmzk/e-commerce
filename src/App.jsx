import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import About from './pages/About.jsx';
import Navbar from './components/Navbar.jsx';

function App(){
  const [cart, setCart] = useState([]);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  function addToCart(product){
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);

      if(existing){
        return prevCart.map((item) => 
          item.id === product.id
          ?{...item, quantity: item.quantity + 1}
          : item
        );
    }
    return [...prevCart, {...product, quantity:1}];
    });
  }

  /*function removeFromCart(productId) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }*/
 // * Cette fonction gère la suppression d'un produit du panier.
 // * Si la quantité est supérieure à 1, elle diminue la quantité de 1. 
 // *Sinon, elle supprime complètement le produit du panier.
 function decreaseQ(product){
  setCart((prevCart) => {
    const existing = prevCart.find((item) => item.id === product.id);

    //* Si l'article n'existe pas (Sécurité), on ne fait rien:
    if(!existing) return prevCart;

    //* Si la quantité est plus grande que 1, on décrémente la "Q":
    if(existing.quantity >1){
      return prevCart.map((item) => 
        item.id === product.id
        ? {...item, quantity: item.quantity - 1}
        : item
      );
    }

    // * Sinon, on supprime l'article du panier:
    return prevCart.filter((item) => item.id !== product.id);
  });
 }
  return(
    <>
      <Navbar cartCount={totalItems}/>
      
      <Routes>
        <Route path='/' element={<Home onAddToCart = {addToCart}/>}/>
        <Route path='/cart' element={<Cart cart={cart} onDecrease={decreaseQ}/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>

    </>
  )
}
export default App
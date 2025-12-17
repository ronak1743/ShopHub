import { useState } from "react";
import Sidebar from "../Sidebar";
import TopBar from "../TopBar";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Wireless Bluetooth Headphones", price: 149.99, quantity: 2, img: "https://via.placeholder.com/80" },
    { id: 2, name: "Portable Power Bank", price: 49.99, quantity: 1, img: "https://via.placeholder.com/80" },
  ]);

  const increment = (id) => {
    setCartItems(cartItems.map(i => i.id === id ? { ...i, quantity: i.quantity + 1 } : i));
  };

  const decrement = (id) => {
    setCartItems(cartItems.map(i => i.id === id && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(i => i.id !== id));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
     
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <p className="mb-6">{cartItems.length} items in your cart</p>

        <div className="space-y-4">
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onIncrement={increment}
              onDecrement={decrement}
              onRemove={removeItem}
            />
          ))}
        </div>

        <CartSummary total={total} />
        </>
  );
};

export default CartPage;

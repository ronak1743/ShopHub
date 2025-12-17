import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const CartPage = () => {

  const fetchCart=async ()=>{
    const x=[];
    await fetch("http://localhost:8888/getCart",{
      credentials: "include",
    })
    .then((res)=>res.json())
    .then(res=>
      {
        res.forEach(element => {
          const item={
            id:element.id,
            name:element.name,
            price:element.price,
            quantity:element.quantity,
            img:element.imgUrl,
          }
          x.push(item);
        });
    })
    .then(()=>{setCartItems(x)});
  }

  useEffect(()=>{fetchCart()},[]);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Wireless Bluetooth Headphones", price: 149.99, quantity: 2, img: "https://via.placeholder.com/80" },
    { id: 2, name: "Portable Power Bank", price: 49.99, quantity: 1, img: "https://via.placeholder.com/80" },
  ]);

  const updateItem=async(id,qty)=>{
    await fetch("http://localhost:8888/updatecart", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ id, qty }),
    });
    fetchCart();
  }

  const deleteItem = async (id) => {
    await fetch(`http://localhost:8888/deletecart/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    fetchCart(); 
};

  const increment = (id) => {
    let qty=0;
    let item=cartItems.filter(el=>el.id==id);
    item.forEach(el=>qty=el.quantity);
    updateItem(id,qty+1);
  };

  const decrement = (id) => {
    let qty=0;
    let item=cartItems.filter(el=>el.id==id);
    item.forEach(el=>qty=el.quantity);
    if(qty>1){
      updateItem(id,qty-1);
    }
  };

  const removeItem = (id) => {
    deleteItem(id);
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

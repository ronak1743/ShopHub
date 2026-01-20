import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const CartPage = () => {
  // MOVED: useState must be at the top level of the component, not inside fetchCart
  const [cartItems, setCartItems] = useState([]);

  const fetchCart=async ()=>{
    // REMOVED: Initial state declaration from here
    const x=[];
    await fetch("https://shophub-production-82e2.up.railway.app/getCart",{
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
 
  const updateItem=async(id,qty)=>{
    await fetch("https://shophub-production-82e2.up.railway.app/updatecart", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ id, qty }),
    });
    fetchCart();
  }

  const deleteItem = async (id) => {
    await fetch(`https://shophub-production-82e2.up.railway.app/deletecart/${id}`, {
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

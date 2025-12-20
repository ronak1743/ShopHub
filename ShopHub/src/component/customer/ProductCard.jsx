import { useState } from "react";

function ProductCard({ product}) {
  const [quantity, setQuantity] = useState(1);
  
  const addOrder=async()=>{
      await fetch("http://localhost:8888/addorder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ pid:product.id }),
      });
     
    }
  const addToCart = async () => {
    
    try {
      const response = await fetch("http://localhost:8888/addtocart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", 
        
        body: JSON.stringify({ 
          id: product.id, 
          qty: quantity 
        }), 
      });

      if (response.ok) {
        alert("Product added to cart!");
      } else {
        const errorMsg = await response.text();
        alert("Error: " + errorMsg);
      }
    } catch (error) {
      console.error("Connection error:", error);
    }
  };
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
      

      <div className="h-65 w-full bg-gray-100 flex items-center justify-center overflow-hidden rounded-t-2xl">
        <img src={product.imgUrl} alt={product.name} className="h-full w-full object-contain bg-white"/>
      </div>


      <div className="p-5">
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          {product.description}
        </p>


        <div className="text-xl font-bold text-blue-600 mb-4">
          ₹{product.price}
        </div>


        <div className="flex gap-3">
          

          <button className="
            flex-1
            border border-blue-600
            text-blue-600
            bg-white
            rounded-lg
            py-2
            text-sm
            font-medium
            transition
            hover:bg-blue-600
            hover:text-white
          " onClick={addToCart}>
            Add to Cart
          </button>


          <button className="
            flex-1
            flex
            items-center
            justify-center
            gap-1
            bg-orange-500
            text-white
            rounded-lg
            py-2
            text-sm
            font-medium
            hover:bg-orange-600
            transition
          " onClick={()=>addOrder()}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}





export default ProductCard;
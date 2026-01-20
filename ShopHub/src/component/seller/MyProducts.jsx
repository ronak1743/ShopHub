import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function MyProducts({setActivePage}){

    const [products,setProduct] =useState([]);
    const [change,setChange]=useState(false);

    useEffect(()=>{
    
          const fetchData = async () => {
            try {
    
              const res = await fetch("https://shophub-production-82e2.up.railway.app/myproduct", {
                credentials: "include",
              });
              const data = await res.json();
              setProduct(data);

            } 
            catch (err) {
    
              console.error("Fetch error:", err);

            }
          };
          
          fetchData();
        
        },[change]);

    const addnewproduct=()=>{
      setActivePage("Add Product");
    }

    return(
    <main className="flex-1 bg-gray-50 p-6">

      <div className="flex items-center justify-between mb-6">
        <div>

          <h1 className="text-2xl font-bold text-gray-900">
            My Products
          </h1>

          <p className="text-sm text-gray-500">
            Manage your product listings
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700" onClick={addnewproduct}>
          <span className="text-lg">+</span>
          Add Product
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 b-15 overflow-y-auto pb-15" style={{ maxHeight: 'calc(100vh - 150px)' }}>

        {products.map((product) => (
          <ProductCard key={product.id} product={product} setChange={setChange} change={change} />
        ))}

      </div>

    </main>
    )
}



export default MyProducts;
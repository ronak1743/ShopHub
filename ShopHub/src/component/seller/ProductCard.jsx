import React from "react";

function ProductCard({ product, setChange, change }) {
  const deleteproduct = async (id) => {
    await fetch(`http://localhost:8888/delete/product/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    
    alert("Product Deleted");
    setChange(!change);
  };

    return (
    <div className="rounded-xl bg-white shadow-sm border border-gray-100 overflow-hidden">
      
      <div className="h-65 w-full bg-gray-100 flex items-center justify-center overflow-hidden rounded-t-2xl">
        <img src={product.imgUrl} alt={product.name} className="h-full w-full object-contain bg-white"/>
      </div>

      
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-gray-900">
          {product.name}
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-indigo-600">
            ₹{product.price}
          </span>
          <span className="text-sm text-gray-500">
            Stock: {product.stock}
          </span>
        </div>

        <p className="text-xs text-gray-400">
          Created At: {product.createdAt.slice(0,10).split('-').reverse().join('-')}
        </p>

        
        <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-red-500 py-2 text-sm font-medium text-white hover:bg-red-600" onClick={() => deleteproduct(product.id)}>
          🗑 Delete
        </button>
      </div>
    </div>
    );
}




export default ProductCard;
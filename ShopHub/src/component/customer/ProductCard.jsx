function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
      
      {/* IMAGE */}
      <div className="h-56 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-400">Product Image</span>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* PRICE */}
        <div className="text-xl font-bold text-blue-600 mb-4">
          ₹{product.price}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3">
          
          {/* ADD TO CART */}
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
          ">
            Add to Cart
          </button>

          {/* BUY NOW */}
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
          ">
            {/* <BoltIcon className="w-4 h-4" /> */}
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}





export default ProductCard;
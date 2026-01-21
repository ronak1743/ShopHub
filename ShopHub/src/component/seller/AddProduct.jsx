import React, { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    desc: "",
    price: "",
    stock: "",
    image: null,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);   

    const formData = new FormData();
    Object.entries(product).forEach(([key, value]) =>
      formData.append(key, value)
    );

    try {
      const res = await fetch("https://shophub-kmq7.onrender.com/addproduct", {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      if (!res.ok) throw new Error("Failed");

      alert("Product Added!");

      setProduct({
        name: "",
        desc: "",
        price: "",
        stock: "",
        image: null,
      });
    } catch (err) {
      alert("Something went wrong");
    } finally {
      setLoading(false);   
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">

        <h2 className="text-3xl font-bold text-gray-800">
          Add New Product
        </h2>

        <p className="text-gray-500 mt-1">
          Fill the details below to add a new product
        </p>

        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Product Name
            </label>
            <input
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="Enter product name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 
              focus:ring-2 focus:ring-blue-500 outline-none"
              required
              disabled={loading}
            />
          </div>

          
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              name="desc"
              rows="4"
              value={product.desc}
              onChange={handleChange}
              placeholder="Describe your product"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 
              focus:ring-2 focus:ring-blue-500 outline-none"
              required
              disabled={loading}
            />
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Price (₹)
              </label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                placeholder="0.00"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 
                focus:ring-2 focus:ring-blue-500 outline-none"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Stock
              </label>
              <input
                type="number"
                name="stock"
                value={product.stock}
                onChange={handleChange}
                placeholder="0"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 
                focus:ring-2 focus:ring-blue-500 outline-none"
                required
                disabled={loading}
              />
            </div>
          </div>

          
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Product Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 
              focus:ring-2 focus:ring-blue-500 outline-none bg-white"
              required
              disabled={loading}
            />

            {product.image && (
              <p className="text-sm text-gray-500 mt-2">
                Selected: <span className="font-medium">{product.image.name}</span>
              </p>
            )}
          </div>

         
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-semibold 
            bg-gradient-to-r from-blue-500 to-purple-500 
            transition
            ${loading ? "opacity-60 cursor-not-allowed" : "hover:opacity-90"}`}
          >
            {loading ? (
              <div className="flex justify-center items-center gap-2">
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Processing...
              </div>
            ) : (
              "Add Product"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};





export default AddProduct;

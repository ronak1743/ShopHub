import ProductCard from "./ProductCard";
import EmptyState from "./EmptyState";

function BrowseProducts({ products }) {
  return (
    <section className="mt-4">
      <h1 className="text-3xl font-bold">Browse Products</h1>
      <p className="text-gray-500 mt-1 mb-6">
        Discover amazing products from our sellers
      </p>

      <input
        type="text"
        placeholder="Search products..."
        className="w-full max-w-3xl mb-8 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {products.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}



export default BrowseProducts;
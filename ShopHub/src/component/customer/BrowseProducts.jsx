import ProductCard from "./ProductCard";
import EmptyState from "./EmptyState";

function BrowseProducts({ products }) {
  return (
    <section className="mt-4">
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
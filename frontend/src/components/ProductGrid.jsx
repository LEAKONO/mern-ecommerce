import { ProductCard } from "./ProductCard";

export function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="fade-in">
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
}

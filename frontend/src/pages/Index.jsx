import { ProductGrid } from "../components/ProductGrid";

// Temporary mock data until we connect to MongoDB
const mockProducts = [
  {
    id: "1",
    name: "Premium Leather Bag",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    category: "Accessories",
  },
  {
    id: "2",
    name: "Classic Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Watches",
  },
  {
    id: "3",
    name: "Designer Sunglasses",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Accessories",
  },
  {
    id: "4",
    name: "Premium Headphones",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    category: "Electronics",
  },
  {
    id: "5",
    name: "Wireless Mouse",
    description: "High-quality wireless Mouse",
    image:
      "https://images.unsplash.com/photo-1586349906319-48d20e9d17e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8V2lyZWxlc3MlMjBNb3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    price: 79.99,
    category: "Electronics",
  },
  {
    id: "6",
    name: "Smart Watch",
    description: "Feature-rich smart watch",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1517502474097-f9b30659dadb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Electronics",
  },
  {
    id: "7",
    name: "Laptop Cooling Pad",
    description: "Keep your laptop cool with this USB-powered cooling pad.",
    price: 19.99,
    image:
      "https://plus.unsplash.com/premium_photo-1680371834671-26c3d8f0e0d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGFwdG9wJTIwQ29vbGluZyUyMFBhZHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Accessories",
  },
  {
    id: "8",
    name: "Gaming Headset",
    description:
      "Immersive sound and a noise-canceling mic for an enhanced gaming experience.",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1713707343787-94c85c3ec8b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8R2FtaW5nJTIwSGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Accessories",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-muted">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Hero"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in">
            Discover Premium Products
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto fade-in opacity-90">
            Curated collection of luxury items for the discerning customer
          </p>
          <button size="lg" className="rounded-full fade-in">
            Shop Now
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground">
            Discover our handpicked selection of premium products
          </p>
        </div>
        <ProductGrid products={mockProducts} />
      </section>
    </div>
  );
};

export default Index;

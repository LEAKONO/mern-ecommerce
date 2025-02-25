import { useEffect, useState } from "react";
import API from "../api";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    const token = localStorage.getItem("token");
    API.get("/products", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const productData = { title, description, price, image, category };

    if (editId) {
      API.put(`/products/${editId}`, productData, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(() => {
          fetchProducts();
          resetForm();
        })
        .catch((err) => console.error("Error updating product:", err));
    } else {
      API.post("/products", productData, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(() => {
          fetchProducts();
          resetForm();
        })
        .catch((err) => console.error("Error creating product:", err));
    }
  };

  const handleEdit = (product) => {
    setTitle(product.title);
    setDescription(product.description);
    setPrice(product.price);
    setImage(product.image);
    setCategory(product.category);
    setEditId(product._id);
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem("token");
    API.delete(`/products/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => fetchProducts())
      .catch((err) => console.error("Error deleting product:", err));
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setPrice("");
    setImage("");
    setCategory("");
    setEditId(null);
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center text-black- mb-6">Admin Dashboard</h1>

      {/* Product Form */}
      <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg shadow-md max-w-lg mx-auto mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">{editId ? "Edit Product" : "Add New Product"}</h2>
        <input 
          type="text" 
          placeholder="Title" 
          className="border p-2 w-full rounded-md mb-3 bg-gray-800 text-white" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Description" 
          className="border p-2 w-full rounded-md mb-3 bg-gray-800 text-white" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
        <input 
          type="number" 
          placeholder="Price" 
          className="border p-2 w-full rounded-md mb-3 bg-gray-800 text-white" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Image URL" 
          className="border p-2 w-full rounded-md mb-3 bg-gray-800 text-white" 
          value={image} 
          onChange={(e) => setImage(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Category" 
          className="border p-2 w-full rounded-md mb-3 bg-gray-800 text-white" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          required 
        />
        <button 
          type="submit" 
          className="bg-green-600 hover:bg-green-700 text-white p-2 w-full rounded-md"
        >
          {editId ? "Update Product" : "Add Product"}
        </button>
      </form>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-gray-800 text-white rounded-xl shadow-lg p-4 flex flex-col items-center">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-3">{product.title}</h2>
            <p className="text-sm text-gray-300">{product.description}</p>
            <p className="text-gray-400 font-bold">${product.price}</p>
            <p className="text-sm text-gray-500 italic">Category: {product.category}</p>
            <div className="flex gap-2 mt-3 w-full">
              <button 
                onClick={() => handleEdit(product)} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full"
              >
                Edit
              </button>
              <button 
                onClick={() => handleDelete(product._id)} 
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md w-full"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;

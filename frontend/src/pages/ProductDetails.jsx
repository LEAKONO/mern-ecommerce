import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Product Details - {id}</h1>
      <p>Product information will be displayed here.</p>
    </div>
  );
};

export default ProductDetails;

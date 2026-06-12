import { Link } from "react-router-dom";
import React from "react";

interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
}
        
const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  image,
  price,
}) => {
  return (
    <div className="border p-4 rounded">
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt={title}
          className="w-full  object-cover mb-2"
        />
        <h2 className="font-bold">{title}</h2>
        <p>${price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;

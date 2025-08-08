//import
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

export default function ProductCard({ product }) {
  //  no longer need the 'onAdd' prop since dispatch is handled here
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.[0] || ""
  );

  const isOutOfStock = product.stock === 0;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // Correctly combine the product and selected variant into a single object
    const productToAdd = {
      ...product,
      selectedVariant: selectedVariant,
    };
    // Dispatch the product object to the Redux action
    dispatch(addCart(productToAdd));
  };

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.image}
        className="card-img-top p-3"
        alt={product.name}
        style={{ height: "200px", objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted mb-2">${product.price.toFixed(2)}</p>

        {product.variants && product.variants.length > 0 && (
          <select
            className="form-select mb-3"
            value={selectedVariant}
            onChange={(e) => setSelectedVariant(e.target.value)}
            disabled={isOutOfStock}
          >
            {product.variants.map((v, idx) => (
              <option key={idx} value={v}>
                {v}
              </option>
            ))}
          </select>
        )}

        <button
          className={`btn mt-auto ${
            isOutOfStock ? "btn-secondary" : "btn-primary"
          }`}
          onClick={handleAddToCart} // Call the new handler function
          disabled={isOutOfStock}
        >
          {isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
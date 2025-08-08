



import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

export default function ProductCard({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.[0] || ""
  );

  // ✅ 1. Add a new state for the current image
  const [currentImage, setCurrentImage] = useState(product?.image);

  const isOutOfStock = product.stock === 0;
  const dispatch = useDispatch();

  // ✅ 2. Create a handler function for variant changes
  const handleVariantChange = (e) => {
    const newVariant = e.target.value;
    setSelectedVariant(newVariant);

    // Check if there's a specific image for the selected variant and update the state
    if (product.variantImages && product.variantImages[newVariant]) {
      setCurrentImage(product.variantImages[newVariant]);
    } else {
      // Fallback to the default image if no specific variant image exists
      setCurrentImage(product.image);
    }
  };

  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      selectedVariant: selectedVariant,
    };
    dispatch(addCart(productToAdd));
  };

  return (
    <div className="card h-100 shadow-sm">
      <img
        // ✅ 3. Use the currentImage state in the src attribute
        src={currentImage}
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
            // ✅ 4. Use the new handler for onChange
            onChange={handleVariantChange}
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
          onClick={handleAddToCart}
          disabled={isOutOfStock}
        >
          {isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}


// export default Home;



import React from "react";
import ProductCard from "./ProductCard";

// Base images
import productImg1 from "../images/img1.jpg";
import productImg2 from "../images/img2.jpg";
import productImg3 from "../images/img3.jpg"; // For Ceramic Mug
import productImg4 from "../images/img4.jpg"; // For Smart Watch
import productImg5 from "../images/img5.jpg"; // For "with black cover" and "Silver with black cape"
import productImg6 from "../images/img6.jpg";
import productImg7 from "../images/img7.jpg";

const demoProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 49.99,
    image: productImg1,
    stock: 5,
    variants: ["Black", "Brown"],
  },
  {
    id: 2,
    name: "Leather Wallet",
    price: 129.99,
    image: productImg2,
    stock: 0,
    variants: ["Black", "White"],
  },
  {
    id: 3,
    name: "Coffee Mug",
    price: 14.99,
    image: productImg3, // Default image
    stock: 15,
    variants: ["Ceramic", "with black cover"],
    // ✅ This is correctly set up to do what you requested.
    variantImages: {
      Ceramic: productImg3,
      "with black cover": productImg5,
    },
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 199.99,
    image: productImg4, // Default image
    stock: 2,
    variants: ["Silver", "Gold", "Silver with black cape"],
    variantImages: {
      "Silver with black cape": productImg5,
    },
  },
  {
    id: 5,
    name: "Towel", 
    price: 79.99,
    image: productImg6,
    stock: 10,
    variants: ["Blue", "Red"],
  },
  {
    id: 6,
    name: "Rain coat", 
    price: 69.99,
    image: productImg7,
    stock: 3,
    variants: ["Black", "Green"],
  },
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="New Season Arrivals"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">
                New Season Arrivals
              </h5>
              <p className="card-text fs-5 d-none d-sm-block">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="container py-5">
        <h4 className="mb-4">Featured Products</h4>
        <div className="row g-4">
          {demoProducts.map((p) => (
            <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <ProductCard
                product={p}
                onAdd={(prod) => alert(`Added ${prod.name} to cart`)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;



// import React from "react";
// import ProductCard from "./ProductCard";

// // Correctly import each image to a unique variable
// import productImg1 from "../images/img1.jpg";
// import productImg2 from "../images/img2.jpg";
// import productImg3 from "../images/img3.jpg";
// import productImg4 from "../images/img4.jpg";
// import productImg5 from "../images/img5.jpg";
// import productImg6 from "../images/img6.jpg";
// import productImg7 from "../images/img7.jpg";

// const demoProducts = [
//   {
//     id: 1,
//     name: "Wireless Headphones",
//     price: 49.99,
//     image: productImg1, 
//     stock: 5,
//     variants: ["Black", "Brown"],
//   },
//   {
//     id: 2,
//     name: " Leather Wallet",
//     price: 129.99,
//     image: productImg2, 
//     stock: 0,
//     variants: ["Black", "White"],
//   },
//   {
//     id: 3,
//     name: "Ceramic Coffee Mug",
//     price: 14.99,
//     image: productImg3, 
//     stock: 15,
//     variants: ["Small", "Large"],
//   },
//   // add more products 
//   {
//     id: 4,
//     name: "Smart Watch",
//     price: 199.99,
//     image: productImg4,
//     stock: 2,
//     variants: ["Silver", "Gold"],
//   },
// ];

// const Home = () => {
//   return (
//     <>
//       {/* Hero Section */}
//       <div className="hero border-1 pb-3">
//         <div className="card bg-dark text-white border-0 mx-3">
//           <img
//             className="card-img img-fluid"
//             src="./assets/main.png.jpg"
//             alt="New Season Arrivals"
//             height={500}
//           />
//           <div className="card-img-overlay d-flex align-items-center">
//             <div className="container">
//               <h5 className="card-title fs-1 text fw-lighter">
//                 New Season Arrivals
//               </h5>
//               <p className="card-text fs-5 d-none d-sm-block">
//                 This is a wider card with supporting text below as a natural
//                 lead-in to additional content.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Product Section */}
//       <div className="container py-5">
//         <h4 className="mb-4">Featured Products</h4>
//         <div className="row g-4">
//           {demoProducts.map((p) => (
//             <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
//               <ProductCard
//                 product={p}
//                 onAdd={(prod) => alert(`Added ${prod.name} to cart`)}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;


import React from "react";
import ProductCard from "./ProductCard";

// Correctly import only the images that are being used.
import productImg1 from "../images/img1.jpg";
import productImg2 from "../images/img2.jpg";
import productImg3 from "../images/img3.jpg";
import productImg4 from "../images/img4.jpg";

// ❌ REMOVE these unused imports
// import productImg5 from "../images/img5.jpg";
// import productImg6 from "../images/img6.jpg";
// import productImg7 from "../images/img7.jpg";

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
    name: " Leather Wallet",
    price: 129.99,
    image: productImg2,
    stock: 0,
    variants: ["Black", "White"],
  },
  {
    id: 3,
    name: "Ceramic Coffee Mug",
    price: 14.99,
    image: productImg3,
    stock: 15,
    variants: ["Small", "Large"],
  },
  // add more products
  {
    id: 4,
    name: "Smart Watch",
    price: 199.99,
    image: productImg4,
    stock: 2,
    variants: ["Silver", "Gold"],
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
            src="../../../assets/main.png.jpg"
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
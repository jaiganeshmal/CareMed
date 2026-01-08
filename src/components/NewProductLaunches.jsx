import React from "react";

const products = [
  {
    id: 1,
    name: "Advanced Surgical Scalpel",
    description: "High-precision scalpel for minimal tissue damage.",
    image: "https://images.pexels.com/photos/3862131/pexels-photo-3862131.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    name: "Modern Suturing Kit",
    description: "Complete suturing set for safe wound closure.",
    image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    name: "Sterile Surgical Gloves",
    description: "Comfortable and safe gloves for all procedures.",
    image: "https://images.pexels.com/photos/3845767/pexels-photo-3845767.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

const NewProductLaunches = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
        {/* Section title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#25a9f1] mb-4">
          New Product Launches
        </h2>
        <p className="text-gray-600 mb-10">
          Discover our latest surgical products designed for precision, safety, and reliability.
        </p>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              {/* Product Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-[#25a9f1] mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewProductLaunches;

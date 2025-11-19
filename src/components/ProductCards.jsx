import React from "react";

const ProductCards = ({ subcategory, onBack }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 flex-wrap gap-3">
          <h2 className="text-3xl font-bold text-[#3BB8FD]">
            {subcategory.name}
          </h2>
          <button
            onClick={onBack}
            className="text-[#3BB8FD] font-semibold hover:underline transition-all"
          >
            ← Back to Subcategories
          </button>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {subcategory.products.map((prod, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border shadow-md hover:shadow-xl p-6 transition-all duration-300 text-center hover:-translate-y-1"
            >
              {/* Product Title */}
              <h3 className="text-lg font-semibold text-[#21297f] mb-4">
                {prod.title}
              </h3>

              {/* PDF Button using anchor */}
              <a
                href={prod.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#25a9f1] text-white px-6 py-2 rounded-full font-medium hover:bg-[#3BB8FD] transition-all duration-300"
              >
                View PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;

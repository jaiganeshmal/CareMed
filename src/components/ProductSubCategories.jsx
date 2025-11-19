import React from "react";
import { FaFilePdf } from "react-icons/fa";

const ProductSubCategories = ({ category, onBack, onSelectSub }) => {
  const handleClick = (sub) => {
    if (sub.pdf) {
      // 🟢 Direct PDF open
      window.open(sub.pdf, "_blank");
    } else {
      // 🟣 Go deeper to show its products
      onSelectSub(sub);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#f3f7ff] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#3BB8FD]">
            {category.name}
          </h2>
          <button
            onClick={onBack}
            className="text-[#3BB8FD] font-semibold hover:text-[#25a9f1] transition-all duration-300 text-base"
          >
            ← Back to Categories
          </button>
        </div>

        {/* Subcategory Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8">
          {category.subcategories.map((sub) => (
            <div
              key={sub.id}
              onClick={() => handleClick(sub)}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={
                    sub.image ||
                    "https://img.freepik.com/free-vector/modern-flat-design-illustration-product-presentation_23-2149142645.jpg"
                  }
                  alt={sub.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Subcategory Name */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-lg font-semibold drop-shadow-md">
                  {sub.name}
                  {sub.pdf && <FaFilePdf className="text-red-400 text-xl" />}
                </div>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#3BB8FD] mb-2 group-hover:text-[#25a9f1] transition-colors duration-300">
                  {sub.name}
                </h3>
                {sub.description && (
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {sub.description}
                  </p>
                )}

                {sub.pdf && (
                  <p className="mt-3 text-[#00DAF0] text-xs font-medium">
                    📄 Opens PDF directly
                  </p>
                )}
              </div>

              {/* Hover Accent Line */}
              <div className="h-[4px] bg-[#25a9f1] w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSubCategories;

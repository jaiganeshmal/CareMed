import React from "react";

const ProductSubCategories = ({ category, onBack, onSelectSub }) => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#212121]">
            {category.name}
          </h2>
          <button
            onClick={onBack}
            className="text-[#00BCD4] font-semibold hover:text-[#004D40] transition-all duration-300 text-base"
          >
            ← Back to Categories
          </button>
        </div>

        {/* Subcategory Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8">
          {category.subcategories.map((sub) => (
            <div
              key={sub.id}
              onClick={() => onSelectSub(sub)}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={
                    sub.image ||
                    "https://img.freepik.com/free-photo/medical-tools_23-2148165906.jpg" // fallback image
                  }
                  alt={sub.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow-md">
                  {sub.name}
                </div>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#004D40] mb-2 group-hover:text-[#00BCD4] transition-colors duration-300">
                  {sub.name}
                </h3>
                {sub.description && (
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {sub.description}
                  </p>
                )}
              </div>

              {/* Hover Accent */}
              <div className="h-[4px] bg-[#00BCD4] w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSubCategories;

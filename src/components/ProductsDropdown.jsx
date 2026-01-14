import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductsDropdown = ({ categories }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  
  const handleSubClick = (category, sub) => {
    setOpen(false);

    // agar direct PDF ho
    if (sub.pdf) {
      window.open(sub.pdf, "_blank");
      return;
    }

    // warna products page pe cards show
    navigate("/products", {
      state: {
        category,
        subcategory: sub,
      },
    });
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => {
        setOpen(false);
        setActiveCategory(null);
        setActiveSubCategory(null);
      }}
    >
      {/* BUTTON */}
      <button onClick={() => navigate('/products')} className="flex items-center gap-2 px-4 py-2 bg-[#25a9f1] text-white rounded">
        Products
        <svg className="w-4 h-4" viewBox="0 0 24 24">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </button>

      {/* LEVEL 1 */}
      {open && (
        <div className="absolute -left-30 w-52 bg-white border shadow-lg rounded z-50">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="relative"
              onMouseEnter={() => {
                setActiveCategory(cat);
                setActiveSubCategory(null);
              }}
            >
              <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                {cat.name}
                {cat.subcategories && (
                  <span className="text-gray-400">›</span>
                )}
              </div>

              {/* LEVEL 2 */}
              {activeCategory?.id === cat.id && cat.subcategories && (
                <div className="absolute top-2 left-36 z-10 w-52 bg-white border shadow-lg rounded">
                  {cat.subcategories.map((sub) => (
                    <div
                      key={sub.id}
                      className="relative"
                      onMouseEnter={() => setActiveSubCategory(sub)}
                    >
                      <div
                      onClick={() => handleSubClick(cat, sub)} 
                      className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        {sub.name}
                        {sub.products && (
                          <span className="text-gray-400">›</span>
                        )}
                      </div>

                      {/* LEVEL 3 */}
                      {activeSubCategory?.id === sub.id && sub.products && (
                        <div className="absolute top-8 left-20 z-20 w-48 bg-white border shadow-lg rounded">
                          {sub.products.map((prod, i) => (
                            <a
                              key={i}
                              href={prod.pdf}
                              target="_blank"
                              className="block px-4 py-2 hover:bg-gray-100 text-sm"
                            >
                              {prod.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsDropdown;

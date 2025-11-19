import React from "react";

const ProductCategories = ({ categories, onSelect }) => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-[#3BB8FD] mb-10">
                    Product Categories
                </h2>

                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            onClick={() => onSelect(cat)}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group border-b-4 border-transparent hover:border-[#25a9f1]"
                        >
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="w-full h-56 object-contain group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="p-6 text-left">
                                <h3 className="text-xl font-semibold text-[#3BB8FD] mb-2 group-hover:text-[#25a9f1] transition-colors">
                                    {cat.name}
                                </h3>
                                <p className="text-gray-600 text-sm">{cat.description}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCategories;

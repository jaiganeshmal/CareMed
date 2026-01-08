import React from "react";

const BlogHero = () => {
  return (
    <section className="min-h-[90vh] flex items-center bg-[#f9fbfd]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-[#0a8ddf] bg-[#e6efff] rounded-full">
            Company Blog & News
          </span>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-[#0a8ddf] leading-tight mb-6">
            Insights from the <br /> Surgical Industry
          </h1>

          <p className="text-gray-700 text-lg mb-8 max-w-xl">
            Discover new product launches, medical exhibitions, industry
            updates, and professional insights shaping the future of surgical
            solutions.
          </p>

          <div className="flex gap-4">
            <button className="bg-[#0a8ddf] hover:bg-[#3BB8FD] text-white px-7 py-3 rounded-md font-semibold transition">
              Explore Blog
            </button>

            <button className="border border-[#0a8ddf] text-[#0a8ddf] px-7 py-3 rounded-md font-semibold hover:bg-[#0a8ddf] hover:text-white transition">
              Industry Updates
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">
          {/* Main card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 relative z-10">
            <h3 className="text-lg font-bold text-[#0a8ddf] mb-4">
              What we share
            </h3>

            <ul className="space-y-4 text-gray-700 ">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-[#0a8ddf] rounded-full"></span>
                New surgical product launches
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-[#0a8ddf] rounded-full"></span>
                Medical exhibitions & conferences
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-[#0a8ddf] rounded-full"></span>
                Industry & technology updates
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-[#0a8ddf] rounded-full"></span>
                Professional surgeon insights
              </li>
            </ul>
          </div>

          {/* Decorative blocks */}
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#3BB8FD]/20 rounded-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#0B3D91]/10 rounded-full"></div>
        </div>

      </div>
    </section>
  );
};

export default BlogHero;

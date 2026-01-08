import React from "react";

const updates = [
  {
    id: 1,
    title: "New Minimally Invasive Surgical Techniques",
    description:
      "Recent advancements in laparoscopic and robotic surgeries are transforming patient recovery times and outcomes.",
    date: "Jan 5, 2026",
    image:
      "https://images.pexels.com/photos/3845768/pexels-photo-3845768.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    title: "Global Medical Device Market Trends",
    description:
      "The surgical tools market is projected to grow 7% annually, driven by innovations in precision instruments.",
    date: "Feb 12, 2026",
    image:
      "https://images.pexels.com/photos/3861968/pexels-photo-3861968.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    title: "AI in Surgery: Improving Outcomes",
    description:
      "Artificial Intelligence is being integrated into surgical procedures to enhance precision, planning, and safety.",
    date: "Mar 20, 2026",
    image:
      "https://www.softude.com/wp-content/uploads/67120e20e6eee3924c1cf7a5_robot-doctor-performing-surgery-patient-operating-room-generative-ai-p-1080-1024x597.webp",
  },
];

const Industry = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-[#F0FAFF] to-[#E0F4FF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#25a9f1] mb-4">
            Industry Updates
          </h2>
          <p className="text-gray-600 md:max-w-2xl">
            Stay informed about the latest trends, research, and insights in the surgical and medical industry.
          </p>
        </div>

        {/* Updates Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {updates.map((update) => (
            <div
              key={update.id}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition cursor-pointer bg-white"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden rounded-t-2xl">
                <img
                  src={update.image}
                  alt={update.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Overlay Content */}
              <div className="p-6 flex flex-col justify-between relative">
                <div>
                  <h3 className="text-xl font-semibold text-[#25a9f1] mb-2 group-hover:text-[#0a8ddf] transition">
                    {update.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{update.description}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400 text-sm">{update.date}</p>
                  <button className="bg-[#3BB8FD] hover:bg-[#0a8ddf] text-white px-4 py-2 rounded-md text-sm font-medium transition">
                    Read More
                  </button>
                </div>
              </div>

              {/* Accent Circle */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-[#3BB8FD]/30 rounded-full animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industry;

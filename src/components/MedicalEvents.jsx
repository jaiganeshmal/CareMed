import React from "react";

const events = [
  {
    id: 1,
    title: "International Surgical Expo 2026",
    date: "March 15-17, 2026",
    location: "Dubai, UAE",
    image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    title: "Global Medical Conference",
    date: "April 10-12, 2026",
    location: "London, UK",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    title: "Advanced Surgery Workshop",
    date: "May 5, 2026",
    location: "New York, USA",
    image: "https://images.pexels.com/photos/3845767/pexels-photo-3845767.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const MedicalEvents = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-[#F7FBFF] to-[#E0F4FF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#25a9f1] mb-4">
            Medical Exhibitions & Conferences
          </h2>
          <p className="text-gray-600 md:max-w-2xl">
            Explore upcoming medical events and conferences to stay connected with cutting-edge surgical innovations and global networking opportunities.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition cursor-pointer border border-transparent hover:border-[#3BB8FD]"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden rounded-t-2xl">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Overlay Content */}
              <div className="p-6 flex flex-col justify-between relative">
                <div>
                  <h3 className="text-2xl font-bold text-[#25a9f1] mb-2 group-hover:text-[#3BB8FD] transition">
                    {event.title}
                  </h3>
                  <p className="text-gray-500 mb-1">{event.date}</p>
                  <p className="text-gray-500 mb-3">{event.location}</p>
                </div>
                <button className="self-start bg-gradient-to-r from-[#3BB8FD] to-[#0a8ddf] hover:from-[#0a8ddf] hover:to-[#3BB8FD] text-white px-5 py-2 rounded-lg font-medium transition">
                  Learn More
                </button>
              </div>

              {/* Decorative Accent */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-[#3BB8FD]/30 rounded-full animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalEvents;

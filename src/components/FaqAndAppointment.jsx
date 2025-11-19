import React, { useState } from "react";

const faqs = [
  {
    question: "What are your shipping  hours?",
    answer:
      "Our shipping  operates from Monday to Saturday, 9:00 AM to 7:00 PM. Emergency services are available 24/7.",
  },
  {
    question: "Do I need an appointment to visit?",
    answer:
      "contact  are recommended, but we also accept walk-in patients based on availability.",
  },
  {
    question: "Which insurance providers do you accept?",
    answer:
      "We accept a wide range of health insurance plans. Please contact our reception for details.",
  },
];

const FaqAndAppointment = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-10 bg-[#f8fafc]">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* 🔹 LEFT: FAQ SECTION */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#3BB8FD] relative inline-block">
            Have Some Questions?
            {/* <span className="absolute -top-3 left-0 w-1/2 h-[3px] bg-[#00DAF0] rounded-full"></span> */}
          </h2>

          <div className="space-y-5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`border border-gray-200 rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-md ${
                    isOpen ? "border-[#20D34A]" : ""
                  }`}
                >
                  <button
                    className="w-full flex justify-between items-center p-5 text-left font-medium text-[#21297f] hover:text-[#3BB8FD] transition"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`text-2xl font-bold transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-[#3BB8FD]" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isOpen ? "max-h-40 p-5 pt-0" : "max-h-0 p-0"
                    }`}
                  >
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 🔹 RIGHT: APPOINTMENT FORM */}
        <div className="bg-[#3BB8FD] text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
          {/* Decorative green circle glow */}
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#20D34A]/30 rounded-full blur-3xl"></div>

          <h2 className="text-3xl font-bold mb-3 relative z-10">
            Make An Shipping Details
          </h2>

          <form className="space-y-4 relative z-10">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-md border border-white/20 bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-[#00DAF0] transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-md border border-white/20 bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-[#00DAF0] transition"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-4 rounded-md border border-white/20 bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-[#00DAF0] transition resize-none"
            ></textarea>

            {/* Fancy animated button */}
            <button
              type="submit"
              className="relative overflow-hidden px-10 py-3 font-semibold rounded-md transition-all duration-500 group bg-white"
            >
              <span className="relative z-10 text-black group-hover:text-[#21297f] transition-colors duration-300">
                SUBMIT
              </span>
              <span className="absolute inset-0 bg-sky-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FaqAndAppointment;

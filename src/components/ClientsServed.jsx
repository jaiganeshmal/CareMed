import React from "react";

const clients = [
    { id: 1, name: "CMH", logo: "https://images.seeklogo.com/logo-png/17/1/cmh-group-logo-png_seeklogo-177892.png" },
    { id: 2, name: "Shaukat Khanum", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcIIFSASxtF95q_GLJOrh5YuFvw4HW9uBItQ&s" },
    { id: 3, name: "HMC", logo: "https://static.vecteezy.com/system/resources/previews/027/426/541/non_2x/hmc-logo-design-inspiration-for-a-unique-identity-modern-elegance-and-creative-design-watermark-your-success-with-the-striking-this-logo-vector.jpg" },
    { id: 4, name: "Shifa International", logo: "https://images.seeklogo.com/logo-png/34/1/shifa-international-logo-png_seeklogo-343032.png" },
    { id: 5, name: "Shifa Eye Trust", logo: "https://pbs.twimg.com/profile_images/692218647796924417/A1A28b_z_400x400.png" },
    { id: 6, name: "Patel Hospital", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSX6jET06TqVeuri81USGOUXnFychku8DKmw&s" },
];

const ClientsServed = () => {
    return (
        <section className="py-10 bg-[#F7FBFF]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a8ddf]">
                        Hospitals & Clients We’ve Served
                    </h2>
                    <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                        Trusted by leading hospitals and healthcare institutions across the region.
                    </p>
                </div>

                {/* Logos Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
                    {clients.map((client) => (
                        <div
                            key={client.id}
                            className="group flex items-center justify-center bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="max-w-24 object-contain transition-all duration-300"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsServed;

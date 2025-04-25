import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const OurPartnerCompany = [
    { name: "Goodreads", type: "Book Community" },
    { name: "LibraryThing", type: "Book Cataloging" },
    { name: "Book Riot", type: "Literary Website" },
    { name: "Publishers Weekly", type: "Industry News" },
    { name: "IndieBound", type: "Independent Bookstores" },
    { name: "OverDrive", type: "Digital Library" }
];

const About = () => {
    return (
        <div className="bg-white py-16 md:py-24">
            <Helmet>
                <title>Boi Poka | About</title>
            </Helmet>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 sm:px-6 lg:px-8">
                {/* Left Image Section */}
                <div className="relative rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <img
                        src="/src/assets/books.jpg"  // Replace with your actual image path.  Use a placeholder for now.
                        alt="People reading books"
                        className="w-full h-auto rounded-lg object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-blue-600 p-3 rounded-full cursor-pointer
                                    hover:scale-110 transition-transform duration-200
                                    shadow-md hover:shadow-lg">
                        <ArrowUpRight className="text-white w-6 h-6" />
                    </div>
                </div>

                {/* Right Text Section */}
                <div className='space-y-6'>
                    <p className="text-xl text-[#0A1F44] font-semibold mb-2 text-blue-600">Our Partners</p>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Montserrat'] leading-tight mb-4
                                   bg-gradient-to-r from-purple-900 to-blue-900 text-transparent bg-clip-text
                                   animate-text-gradient">
                        Connecting Book <br /> Enthusiasts
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg">
                        We collaborate with key players in the literary world to bring you the best book reviews,
                        recommendations, and author insights.  Discover your next favorite read with our trusted partners.
                    </p>

                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4 '>
                        {OurPartnerCompany.map((Company, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-3 py-2 border-t border-gray-200
                                             transition-all duration-300
                                             hover:bg-gray-50/50 rounded-md px-2 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
                            >
                                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center
                                              animate-pulse-opacity">
                                    <span className="text-xs text-gray-500">
                                        {/* You could put the first letter of the company here, or a small icon */}
                                        {Company.name.charAt(0)}
                                    </span>
                                </div>
                                <span className="text-lg font-medium text-[#0A1F44] hover:text-blue-700 transition-colors">
                                    {Company.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx global>{`
                @keyframes animate-text-gradient {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
                .animate-text-gradient {
                    background-size: 200% 200%;
                    animation: animate-text-gradient 5s ease infinite;
                }
                .group:hover .animate-text-gradient {
                    animation: none;
                }
            `}</style>
        </div>
    );
};

export default About;
import React from "react"; // Import React

export default function Hero() {
    // Remove unused state variable and useState
    // const [state, setState] = useState(false);

    // Remove unused navigation variable
    // const navigation = [
    //     { title: "Partners", path: "/partners" },
    //     { title: "Customers", path: "/customers" },
    //     { title: "Team", path: "/team" },
    // ];

    return (
        <>
            <section className="py-16 md:py-32">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-600">
                    <div className="md:flex md:items-center md:justify-between animate-fade-in">
                        <div className="space-y-8 md:max-w-2xl lg:max-w-3xl">
                            <h1 className="text-2xl text-[#2F4B79] font-medium">
                            From Law to Learning: The SPN Experience
                            </h1>
                            <h2 className="text-5xl sm:text-6xl lg:text-7xl text-gray-800 font-extrabold">
                            Navigating the Legal Landscape: Insights from SPN Laws
                            </h2>
                            <p className="text-xl sm:text-2xl lg:text-3xl">
                            Stay updated on the latest legal developments with SPN Laws, offering expert insights and practical advice for legal professionals and enthusiasts alike.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-8">
                                <a href="/lets-get-started" className="block w-full sm:w-auto py-2 no-underline px-10 text-center text-white font-medium bg-[#2F4B79] duration-150 hover:bg-[#2F4B79] active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none transform hover:scale-105 transition-transform">
                                    About-Us
                                </a>
                                <a href="/get-access" className="flex items-center justify-center gap-x-4 py-2  no-underline px-10 w-full sm:w-auto text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg transform hover:scale-105 transition-transform">
                                    Contact-Us
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                                        <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="mt-16 md:mt-0 md:max-w-2xl lg:max-w-3xl animate-slide-in">
                            <img
                                src="https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
                                className="w-full rounded-lg md:rounded-tl-[108px]"
                                alt="Hero"
                            />
                        </div>
                    </div>
                    <div className="mt-20">
                        <p className="text-center text-xl text-gray-700 font-semibold">Explore Our Blogs: Insights and Updates from SPN Laws</p>
                        <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-8 mt-8">
                            {/* Add company logos or other content here */}
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                @keyframes slide-in {
                    from {
                        transform: translateY(20px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                .animate-fade-in {
                    animation: fade-in 1.5s ease-out;
                }
                .animate-slide-in {
                    animation: slide-in 1.5s ease-out;
                }
            `}</style>
        </>
    );
}

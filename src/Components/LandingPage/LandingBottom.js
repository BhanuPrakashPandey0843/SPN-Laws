import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const LandingBottom = () => {
    const cases = [
        {   
            img: "/Images/oooo.jpg",
            date: "29 June, 2024",
            incident: "Vishaka v. State of Rajasthan (1997)",
            title: "Vanguard case establishes workplace guidelines against sexual harassment.",
            info: "Vishaka v. State of Rajasthan (1997) - Landmark case establishing guidelines against sexual harassment in the workplace.",
            link: "/"
        },
        {   
            img: "/Images/OIP (1).jpeg",
            date: "29 June, 2024",
            incident: "Indira Gandhi v. Raj Narain (1975)",
            title: "Vital electoral dispute questions legitimacy of Prime Minister's victory.",
            info: "Indira Gandhi v. Raj Narain (1975) - Election dispute case challenging the validity of the Prime Minister's election.",
            link: "/"
        },
        {   
            img: "/Images/carCrash.jpg",
            date: "29 June, 2024",
            incident: "Strange Accident Happened",
            title: "A.K. Gopalan v. State of Madras (1950)",
            info: "A.K. Gopalan v. State of Madras (1950) - Constitutional case challenging preventive detention laws and individual liberties.",
            link: "/"
        },
        {   
            img: "/images/OIP.png",
            date: "29 June, 2024",
            incident: "K.M. Nanavati v. State of Maharashtra (1959)",
            title: "Volatile trial unfolds as naval officer's verdict ignites public debate.",
            info: "K.M. Nanavati v. State of Maharashtra (1959) - Landmark case involving the jury trial and subsequent pardon of a naval officer accused of murder.",
            link: "/"
        }
    ];

    return (
        <div className="p-4 pt-14 md:px-28 md:pt-20 bg-[#2F4B79] pb-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-white mb-8">Recent Case Uncovered</h1>
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {cases.map((caseItem, index) => (
                        <motion.div 
                            key={index} 
                            className={`flex flex-col lg:flex-row gap-4 pb-8 ${index === cases.length - 1 ? '' : 'border-b border-gray-300 border-solid border-opacity-50'}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="w-60 h-60 overflow-hidden">
                                <img src={caseItem.img} alt="CaseImage" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <p className="text-sm font-extralight text-white">{caseItem.date}</p>
                                    <h2 className="text-xl font-semibold text-white mt-2">{caseItem.incident}</h2>
                                    <h3 className="text-sm font-extralight text-white mt-1">{caseItem.title}</h3>
                                    <p className="text-sm mt-2 font-extralight text-white">{caseItem.info}</p>
                                </div>
                                <div className="text-right mt-4 lg:mt-0">
                                    <a href={caseItem.link} className="bg-[#CEA252] p-2 rounded-full inline-block hover:bg-yellow-400 h-fit transition duration-300 ease-in-out">
                                        <MdArrowOutward className="text-white text-xl" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex justify-center"
                >
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#CEA252] h-fit text-white flex text-sm md:text-base items-center p-2 px-4 rounded-full gap-1.5"
                    >
                        <span>View All Case Studies</span>
                        <MdArrowOutward className="text-xl" />
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default LandingBottom;

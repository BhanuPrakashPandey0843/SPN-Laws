import "./scroller.css";
import { useRef } from "react";
export default function App() {
    const ref = useRef(null);

    return (
        <>
            <div className="forscroller overflow-x-auto whitespace-nowrap py-4 bg-[#2F4B79] lg:pt- w-full px-2 lg:px-24 ">
                <div ref={ref} className="lists_main container overflow-x-scroll ">
                    <div className="lists  flex flex-row space-x-5  justify-between">
                        <video controls className="w-fit h-96 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105  shadow-lg bg-white border-2 border-gray-700">
                            <source src="Videos/video1.mp4" type="video/mp4" />
                        </video>
                        <video controls className="w-fit h-96 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg bg-white border-2 border-gray-700">
                            <source src="Videos/video1.mp4" type="video/mp4" />
                        </video>
                        <video controls className="w-fit h-96 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg bg-white border-2 border-gray-700">
                            <source src="Videos/video1.mp4" type="video/mp4" />
                        </video>
                        <video controls className="w-fit h-96 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg bg-white border-2 border-gray-700">
                            <source src="Videos/video1.mp4" type="video/mp4" />
                        </video>
                        <video controls className="w-fit h-96 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg bg-white border-2 border-gray-700">
                            <source src="Videos/video1.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </>
    );
}
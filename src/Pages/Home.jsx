import React from "react";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
const Home = () =>{
    return (
        <div>

        
        <section className="text-center py-10 px-5 bg-blue-100 h-full w-full">
            <h1 className="text-4xl font-bold text-gray-800">Connecting People Across Faiths & Interests</h1>
            <p className="text-gray-600 mt-3 ">A platform to bring people together through meaningful events, fostering community and connection.</p>
        </section>

        <section className="grid md:grid-cols-3 gap-5 px-15 py-5 bg-blue-100">
            <div>
            <img src={image1} alt="image" className="rounded-full shadow-lg p-2  hover:shadow-black 
            hover:transform hover:translate-y-[-10px] hover:transition hover:duration-300"/>
            <h3 className="py-3 text-xl sans-serif">Best way to find yourself</h3>
            </div>

            <div>
            <img src={image2} alt="image" className="rounded-full shadow-lg p-2 hover:shadow-black 
            hover:transform hover:translate-y-[-10px] hover:transition hover:duration-300"/>
            <h3 className="py-3 text-xl sans-serif">Share Ideas And Grow</h3>
            </div>

            <div>
            <img src={image3} alt="image" className="rounded-full shadow-lg p-2 hover:shadow-black 
            hover:transform hover:translate-y-[-10px] hover:transition hover:duration-300"/>
            <h3 className="py-3 text-xl sans-serif">Join with Us</h3>
            </div>
                
        </section>

        </div>
        
    )
}

export default Home;
import React from "react";
import { FaFacebook , FaTwitter , FaInstagram , FaYoutube ,  FaRegCopyright } from "react-icons/fa";

const Footer = ()=>{
    return <div className="bg-gradient-to-r from-blue-400 to-emerald-100 text-black py-10">
        <div className="max-w-7xl mx-auto px-6 md:flex md:justify-between">
            <div className="md:w-1/3">
                <h2 className="text-2xl font-bold ">CommunionHub</h2>
                <p className="mt-2 text-gray-800" > Discover People </p>
                <div className="flex space-x-4 mt-4">
                    <a href="#" className="text-gray-800 hover:text-black text-xl">
                    <FaFacebook />
                    </a>
                    <a href="#" className="text-gray-800   hover:text-black text-xl">
                    <FaTwitter />
                    </a>
                    <a href="#" className="text-gray-800   hover:text-black text-xl">
                    <FaInstagram />
                    </a>
                    <a href="#"  className="text-gray-800   hover:text-black text-xl">
                    <FaYoutube />
                    </a>
                </div>
            </div>

            <div className="mt-6 md:mt-0 md-w-1/3">
                <h3 className="text-lg font-semibold ">
                    compony
                </h3>
                <ul className="mt-2 space-y-2 text-gray-800">
                    <li><a href="#" className="hover:text-black">Home</a></li>
                    <li><a href="#" className="hover:text-black">Events</a></li>
                </ul>
            </div>

            <div className="mt-6 md:mt-0 md:w-1/3">
                <h3 className="text-lg font-semibold">Contact</h3>
                <p className="mt-2 text-gray-800 hover:cursor-pointer">contact@communionHub.org</p>
            </div>

        </div>

        <div className="border-t border-blue-700 mt-6 pt-4 text-center text-gray-800 text-sm hover:cursor-pointer">
            <p>Copyright <FaRegCopyright /> 2025. All right reserved to Communion</p>
            <div className="mt-2">
                <a href="#" className="hover:text-gray-700 mx-2 hover:cursor-pointer">Privacy Policy</a>
                <a href="#" className="hover:text-gray-700 mx-2 hover:cursor-pointer">Terms And Condition</a>
            </div>
        </div>
    </div>
}

export default Footer;
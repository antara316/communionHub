import React from "react";
import { IoMenu } from "react-icons/io5"
import { Link } from "react-router-dom";

const Header = () =>{
    // const [isMenuOpen , setIsMenuOpen] = useState(false)
    return (
        <div className="w-full h-full bg-transparent bg-gradient-to-r from-blue-400 to-emerald-100">
        <header className="flex justify-between items-center text-black py-8 px-8 md:px-32 bg-blue-50 drop-shadow-md">
            <a href="#">
                <h4 className="text-4xl ">communionHub</h4>
            </a>

            <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
                <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all
                hover:cursor-pointer">
                    <Link to="/" >Home</Link>
                </li>
                {/* <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all
                hover:cursor-pointer">About</li> */}
                <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all
                hover:cursor-pointer">
                    <Link to="/Event" >Event</Link>
                </li>
            </ul>

            
            {/* <IoMenu className="bx bx-menu xl:hidden block text-5xl cursor-pointer"
            onClick={()=> setIsMenuOpen(!isMenuOpen)}/>  */}
          

            {/* <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold 
                text-lg transform transition-transform ${isMenuOpen ? "opacity-100 " : "opacity-0"}`}
                style={{transition : "transform 0.3s ease , opacity 0.3s ease"}}>
                    <li className="list-none w-full text-center p-4 hover:bg-sky-400
                     hover:text-white transition-all cursor-pointer">Home</li>
                     <li className="list-none w-full text-center p-4 hover:bg-sky-400
                     hover:text-white transition-all cursor-pointer">About</li>
                     <li className="list-none w-full text-center p-4 hover:bg-sky-400
                     hover:text-white transition-all cursor-pointer">Event</li>
                     
                </div> */}

        </header>
        
    </div>
    )
    
}

export default Header;
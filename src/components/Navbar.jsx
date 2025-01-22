import { BsCart , BsPerson } from "react-icons/bs";
import logo from "../assets/images/logoLA.png";
import { Link, NavLink } from "react-router-dom";

function Navbar(){
    return(
        <> 
        <section>
            <div className="Navbar mt-5 flex justify-evenly h-{108} w-full ">
                <div className="">
                 <a href="/"> <img className="mt-2" src={logo} alt="logo" />  </a>
                </div>
                <div className=" w-[60%] text-lg flex justify-evenly gap-2">

                    <NavLink to="/" className=" hover:text-blue-700 hover:font-bold" >Home</NavLink>
                    <NavLink to="/shop" className=" hover:text-blue-700 hover:font-bold" >Shop</NavLink>
                    <NavLink to="/collections" className=" hover:text-blue-700 hover:font-bold" >Collections</NavLink>
                    <NavLink to="/aitools" className=" hover:text-blue-700 hover:font-bold" >AI-Powered Personalization</NavLink>
                    <NavLink to="/about" className=" hover:text-blue-700 hover:font-bold" >About Us</NavLink>
                    <NavLink to="/support" className=" hover:text-blue-700 hover:font-bold" >Support</NavLink>
                </div>
                <div className="flex gap-8">
                    <BsPerson size={32} color="" className="border-2 rounded-md" ></BsPerson>
                    <BsCart size={32} color="" className="border-2 rounded-md " ></BsCart>
                </div>
            </div>
        </section>
        </>
    )
}
export default Navbar;
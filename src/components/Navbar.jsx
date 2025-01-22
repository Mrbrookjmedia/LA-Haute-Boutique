import { BsCart , BsPerson } from "react-icons/bs";

function Navbar(){
    return(
        <> 
        <section>
            <div className="Navbar mt-5 flex justify-evenly h-{108} w-full ">
                <div className="">
                    <a href=""> La-Haute Boutique</a>
                </div>
                <div className=" w-[60%] text-lg flex justify-evenly gap-2">
                    <a href="" className=" hover:text-blue-700 hover:font-bold">Home</a>
                    <a href="" className=" hover:text-blue-700 hover:font-bold">Shop</a>
                    <a href="" className=" hover:text-blue-700 hover:font-bold">Collections</a>
                    <a href="" className=" hover:text-blue-700 hover:font-bold">AI-Powered Personalization</a>
                    <a href="" className=" hover:text-blue-700 hover:font-bold">About Us</a>
                    <a href="" className=" hover:text-blue-700 hover:font-bold">Support</a>
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
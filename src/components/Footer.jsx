"use client";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { BsPlus, BsDash } from "react-icons/bs";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function Footer() {
    const [isOpen, setIsOpen] = useState(false);

// categories for the footer element product categories

    const categories = [
        "Electronics",
        "Clothing",
        "Home Appliances",
        "Books",
        "Sports Equipment",
    ];


    return (
        <>
            <section class="py-10 bg-[#2f342f] sm:pt-16 lg:pt-24">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

                {/* Need help, company , more info and newsletter section   */}

                    <div class="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">


                        <div>
                            <p class="text-lg font-extrabold tracking-widest text-white uppercase">Need Help</p>

                            <ul class="mt-6 space-y-4">
                                <li>
                                    <a href="#" title="" class="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Contact Us </a>
                                </li>

                                <li>
                                    <a href="#" title="" class="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Track Order </a>
                                </li>

                                <li>
                                    <a href="#" title="" class="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Returns and Refunds </a>
                                </li>

                                <li>
                                    <a href="#" title="" class="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> FAQ's </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p class="text-lg font-extrabold tracking-widest text-white uppercase">Company</p>

                            <ul class="mt-6 space-y-4">
                                <li>
                                    <a href="#" title="" class="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About Us </a>
                                </li>

                                <li>
                                    <a href="#" title="" class="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Blog </a>
                                </li>

                            </ul>
                        </div>

                        <div>
                            <p class="text-lg font-extrabold  tracking-widest text-white uppercase">More Info</p>

                            <ul class="mt-6 space-y-4">
                                <li>
                                    <a href="#" title="" class="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Terms and conditions </a>
                                </li>

                                <li>
                                    <a href="#" title="" class="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Privacy policy </a>
                                </li>

                                <li>
                                    <a href="#" title="" class="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Shipping Policy </a>
                                </li>

                                <li>
                                    <a href="#" title="" class="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Site Map </a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                            <p class="text-lg font-bold tracking-widest text-white uppercase">Subscribe to newsletter</p>

                            <form action="#" method="POST" class="mt-6">
                                <div>
                                    <label for="email" class="sr-only">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Enter your email" class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>

                                <button type="submit" class="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700">Subscribe</button>
                            </form>
                        </div>
                    </div>

                    <div className=" flex mt-10">
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <a href=""><BsFacebook size={30} color="white" /></a>
                            <a href=""><BsInstagram size={30} color="white" /></a>
                            <a href=""><BsGithub size={30} color="white" /></a>
                            <a href=""><BsTwitter size={30} color="white" /></a>
                        </div>

                    </div>

                    <hr class="mt-5  border-gray-200" />

                    {/* product categories  */}

                    <div>
                        <div className="  p-6 bg-[#2f342f] shadow-lg">

                            <div
                                className="flex items-center justify-between cursor-pointer text-white"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <h3 className="text-xl font-semibold">Product Categories</h3>
                                {isOpen ? (
                                    <BsDash className="text-xl text-gray-300" />
                                ) : (
                                    <BsPlus className="text-xl text-gray-300" />
                                )}
                            </div>

                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="mt-4"
                                    >
                                        <ul className="space-y-2">
                                            {categories.map((category, index) => (
                                                <li
                                                    key={index}
                                                    className="p-3 bg-[#2f342f]  rounded-md text-white hover:bg-[#252a25]"
                                                >
                                                    {category}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>


                    <hr class="mt-2 mb-10 border-gray-200" />

                    <p class="text-sm text-center text-white">© Copyright @ LA-Haute Boutique 2025</p>
                </div>
            </section>
        </>
    )
}

export default Footer
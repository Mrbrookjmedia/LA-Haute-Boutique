import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import 'bootstrap-icons/font/bootstrap-icons.css';


import imgShop2 from "../assets/images/imgShop2.png";
import imgShop3 from "../assets/images/imgShop3.png";
import imgShop7 from "../assets/images/imgShop7.png";
import imgShop13 from "../assets/images/imgShop13.png";



import featureImage1 from "../assets/images/featured1.png"
import featureImage2 from "../assets/images/featured2.png"

import joggers from "../assets/images/joggers.png"
import sweaters from "../assets/images/sweaters.png"
import clutches from "../assets/images/cluthes.png"
import tots from "../assets/images/tots.png"

import NewArrivalCard from "./NewArrivalCard";
import EverydayfashionBanner from "./EverdayFashionBanner";
import ProductCard from "./ProductCard";
import FeedbackCarosel from "./FeedbackCarousel";

import Star from "./ui/Star";
import BigSavingZone from "./BigSavingZone";

function Home() {
    return (
        <section className=" ">
            <Banner> </Banner>

            {/* freatured content */}
            <div className="w-full h-96 overflow-hidden">

                <div className="featured_content mt-20 mb-20 flex gap-16 w-full h-[500px] translate-x-48 ">

                    {/* First Featured Content */}

                    <div className="rounded-lg relative w-[35%] h-[70%]">
                        <div className="absolute inset-0 z-[-1]">
                            <img src={featureImage1} alt="" className="w-full h-full object-cover rounded-md" />
                        </div>
                        <div className=" rounded-lg absolute inset-0 z-[1] bg-gradient-to-r from-gray-700 to-transparent ">

                        </div>
                        <div className="absolute inset-0 flex items-center justify-start z-[2] pl-5">
                            <h1 className="text-white font-bold text-4xl  px-4 py-2 rounded-md">
                                "Winter Luxe <br /> Stay Chic in the Chill"
                            </h1>
                        </div>
                    </div>

                    {/* Second Featured Content */}

                    <div className="rounded-2xl relative w-[35%] h-[70%]">
                        <div className="absolute inset-0 z-[-1]">
                            <img src={featureImage2} alt="" className="w-full h-full object-cover rounded-md" />
                        </div>
                        <div className=" rounded-lg absolute inset-0 z-[1] bg-gradient-to-r from-gray-700 to-transparent ">

                        </div>

                        <div className="absolute inset-0 flex items-center justify-start z-[2] pl-5">
                            <h1 className="text-white font-bold text-3xl  px-4 py-2 rounded-md">
                                The Eterna Collection—luxury handbags crafted with sustainable materials
                            </h1>
                        </div>
                    </div>
                </div>

            </div>


            {/* featured content ends here */}


            {/* new arrival section */}

            <div className=" m-16 h-auto  ">
                <h1 className=" m-5 ml-24 font-bold text-2xl">
                SHOP OUR LATEST COLLECTIONS
                <Link to="shop">    <i className="bi bi-arrow-right ml-2 text-blue-600 "></i> </Link>
                </h1>

                {/*div containing the cards and the arrows for the new arrival  */}

                <div className=" m-5  flex h-full justify-evenly">
                    {/* left arrow */}
                    <div className="flex items-center justify-center ">
                        <i className="bi bi-arrow-left "></i> 
                    </div>

                    {/* CARDs */}

                   <Link to="/shop"> <div className=" flex overflow-hidden w-[90%]">
                        <NewArrivalCard image={imgShop2} text="Bags" />
                        <NewArrivalCard image={imgShop3} text="Shoes" />
                        <NewArrivalCard image={imgShop7} text="Apparel" />
                        <NewArrivalCard image={imgShop13} text="Accessories" />
                    </div>  </Link>
                    {/* right arrow */}
                    <div className=" flex items-center justify-center">
                        <i className="bi bi-arrow-right "></i>
                    </div>

                </div>

            </div>

            {/* new arrival section ends here */}

            {/* Big Saving Zone */}
            <BigSavingZone></BigSavingZone>

            {/* Big Saving Zone ends here */}



            {/* Everyday fashion banner */}

            <EverydayfashionBanner></EverydayfashionBanner>


            {/* Everyday fashion banner ends here */}

            {/* products */}
            <div className=" m-16 h-auto  ">
                <h1 className="  ml-24 font-bold text-2xl">
                    In The Limelight
                    <i className="bi bi-arrow-right ml-2 text-blue-600 "></i>
                </h1>

                {/*div containing the cards and the arrows for product  */}

                <div className=" flex h-full justify-evenly">
                    {/* left arrow */}
                    <div className="flex items-center justify-center ">
                        <i className="bi bi-arrow-left "></i>
                    </div>

                    {/* CARDs */}

                    <div className=" flex overflow-hidden w-[90%]">
                        <ProductCard></ProductCard>
                    </div>
                    {/* right arrow */}
                    <div className=" flex items-center justify-center">
                        <i className="bi bi-arrow-right "></i>
                    </div>

                </div>

            </div>



            {/* Feedback carousel */}

            <h1 className="  ml-36 mb-10 font-bold text-2xl">
                Feedback
                <i className="bi bi-arrow-right ml-2 text-blue-600 "></i>
            </h1>

            <div className=" flex items-center justify-center w-full mb-10" >
                <FeedbackCarosel> </FeedbackCarosel>
            </div>



        </section>

    )
}
export default Home;

'use client'
import EverydayfashionLeft from "../assets/images/EverdayFashionLeft.png"
import EverydayfashionRight from "../assets/images/EverydayFashionRight.png"

export default function EverydayfashionBanner() {

    return (
        <>
            <div className="m-[6%]">

                <div className=" w-full h-[615px]  bg-black flex  ">
                    <div className="w-[50%] h-full relative ">
                        <img src={EverydayfashionLeft} className=" absolute h-full w-full" alt="" />


                        <div className=" absolute text-white h-full w-full flex justify-center items-center flex-col">
                            <div className=" w-[70%]">

                                <h1 className=" text-3xl font-bold " >WE MADE YOUR EVERYDAY FASHION BETTER!</h1>
                                <h1 className=" mt-2" >In our journey to improve everyday fashion, La Haute Boutique presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7 </h1>

                                <h1><a
                                    href="#"
                                    className="mt-8 inline-block rounded-md bg-white px-5 py-2 text-lg font-semibold text-black shadow-md hover:bg-indigo-500"
                                >
                                    Shop Now
                                </a></h1>
                            </div>
                        </div>
                    </div>





                    <div className="w-[50%] h-full">
                        <img src={EverydayfashionRight} className="h-full w-full" alt="" />
                    </div>


                </div>
            </div>

        </>
    )
}

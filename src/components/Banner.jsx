'use client'
import bannerImaege from "../assets/images/shopHero.svg"




export default function Banner() {

    return (
        <div className="mt-5 relative w-full h-[716px]">
            <div className="absolute top-0 left-0 z-[1] w-full h-full "></div>

            {/* Background Image */}
            <div className="absolute z-[-1] w-full h-full">
                <img
                    src={bannerImaege}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                {/* <img src="../assets/images/herobanner.jpg"  alt=""></img> */}
            </div>

            {/* Text Content */}
            <div className="relative z-[2] flex items-center justify-start h-full px-6 sm:px-12 lg:px-24">
                <div className="max-w-2xl text-white">
                    <p className=" sm:text-5xl">Welcome to <b>La Haute Boutique </b>, The pinnacle of luxury fashion.</p>
                    <p className="mt-6 text-lg sm:text-xl leading-relaxed">
                        Immerse yourself in a world of opulent design, where every piece tells a story of craftsmanship, elegance, and sophistication.
                    </p>
                    <p className="mt-4 text-lg sm:text-xl leading-relaxed">
                        Discover our curated selection of <b>bags, shoes, apparel, and accessories</b> that redefine style. Experience personalized shopping with our cutting-edge AI tools tailored to your taste.
                    </p>
                    <a
                        href="#"
                        className="mt-8 inline-block rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-indigo-500"
                    >
                        Shop Now
                    </a>
                </div>
            </div>
        </div>

    )
}

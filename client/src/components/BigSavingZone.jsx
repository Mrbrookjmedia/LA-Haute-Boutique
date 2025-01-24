import React from 'react'
import BSZ1 from "../assets/images/BSZ1.png"
import BSZ2 from "../assets/images/BSZ2.png"
import BSZ3 from "../assets/images/BSZ3.png"
import BSZ4 from "../assets/images/BSZ4.png"
import BSZ5 from "../assets/images/BSZ5.png"



const BigSavingZone = () => {
    return (
        <div className=" m-16 h-auto  ">
            <h1 className="  ml-24 font-bold text-2xl">
                Big Saving Zone
                <i className="bi bi-arrow-right ml-2 text-blue-600 "></i>
            </h1>

            <div className=" flex flex-col gap-3  items-center mt-10 w-full h-[900px]">
                <div className=" flex gap-2">
                    <a href=""><img src={BSZ1} alt="" ></img></a>
                    <a href=""><img src={BSZ2} alt="" ></img></a>
                    <a href=""><img src={BSZ3} alt="" ></img></a>

                </div>
                <div className=" flex gap-2" >
                    <a href=""><img src={BSZ4} alt="" ></img></a>
                    <a href=""><img src={BSZ5} alt="" ></img></a>
                </div>

            </div>


        </div>
    )
}

export default BigSavingZone
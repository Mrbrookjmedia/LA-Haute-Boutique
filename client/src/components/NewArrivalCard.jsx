import React from 'react';

const NewArrivalCard = ({ image, text, prop = {} }) => {
    return (
        <div
            style={prop}
            className="new-arrival-card m-3 overflow-hidden  w-[300px] h-[320px] "
        >
            {/* Background Image */}
            <div className=''>


                <img src={image} alt="New Arrival" className=" w-[300px] h-[250px] mb-5 object-cover rounded-md" />

                {/* Text Overlay */}
                <div className=" inset-0 flex items-end justify-center">
                    <h2 className=" text-lg font-bold  px-4 py-2 rounded-md ">
                        {text}
                    </h2>
                </div>
            </div>
        </div>
    );
};


export default NewArrivalCard;

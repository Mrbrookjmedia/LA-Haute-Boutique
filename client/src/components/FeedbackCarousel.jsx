import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import feedbackImage1 from "../assets/images/feedback1.jpg"
import feedbackImage2 from "../assets/images/feedback2.jpg"
import feedbackImage3 from "../assets/images/feedback3.jpg"
import feedbackImage4 from "../assets/images/feedback4.jpg"
import feedbackImage5 from "../assets/images/feedback5.jpg"


import { Card, CardContent } from "./ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import Star from "./ui/Star"

const data = [
  {
    image: feedbackImage1,
    stars: 5,
    name: "Hollis Lucetta",
    feedback: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit,",
  },
  {
    image: feedbackImage2,
    stars: 4,
    name: "Ronald Richards",
    feedback: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    image: feedbackImage3,
    stars: 4.5,
    name: "Savannah Nguyen",
    feedback: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia. ",
  },
  {
    image: feedbackImage4,
    stars: 5,
    name: "Floyd Miles",
    feedback: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  },
  {
    image: feedbackImage5,
    stars: 4.5,
    name: "Jennica Pen",
    feedback: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },

]


export default function FeedbackCarosel() {

  // const plugin = React.useRef(
  //   Autoplay({ delay: 2000, stopOnInteraction: true })
  // )


  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[Autoplay({
        delay: 4000,
      }),]}
      className="w-full max-w-7xl h-auto max-h-96"


    >
      {/* <CarouselPrevious/> */}
      <CarouselContent >

        {data.map((ele, index) => (
          <CarouselItem key={index} className=" flex  justify-around items-center md:basis-1/2 lg:basis-1/3 ">
            <div className="p-1">

              {/*  main div for the feedback */}
              <div className="w-96 h-72 border-2 border-gray-500  b- flex flex-col m-5 p-5 gap-5 overflow-hidden   rounded-lg shadow-md ">
                
                
                <div className="flex  justify-between ">
                  <div className=" ">
                    <img src={ele.image} className=" rounded-sm h-20 w-20 " alt="" />
                  </div>
                  <Star star={ele.stars}  ></Star>
                </div>

                {/* div for name and feedback */}
                <div className="text-">
                  <p className="text-2xl mb-5" > {ele.name} </p>
                  <p className="text-[0.8rem] mb-5" >{ele.feedback}</p>
                </div>

              </div>

            </div>
          </CarouselItem>
        ))}



      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

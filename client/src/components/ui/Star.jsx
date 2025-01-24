import React from 'react'
import { BsStar, BsStarFill , BsStarHalf } from 'react-icons/bs'

const Star = ( {star} ) => {

  const starRating = Array.from({length:5},(element , index )=>{
     let number = index + 0.5 ;

     return ( 
      <span key={index}>
        {
          star>=index+1 ? <BsStarFill size={20} className=' ' /> : star >= number ? <BsStarHalf size={20} className=' '/> : <BsStar size={20} className=' '/>

        }

      </span>
     )

  })


  return (
    <div className='flex gap-1 text-3xl text-yellow-500 '> {starRating}
    </div>
  )
}

export default Star
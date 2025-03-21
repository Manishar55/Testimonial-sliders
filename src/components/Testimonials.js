
import React, { useState } from 'react'
import Card from './Card'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'


function Testimonials(props) {
  let reviews=props.reviews;
  const[index, setIndex]=useState(0);

  function leftShiftHandler(){
    if(index-1 < 0){
        setIndex(reviews.length-1);
    }
    else{
        setIndex(index-1);
    }
  }
  function rightShiftHandler(){
    if(index+1 >= reviews.length){
        setIndex(0);
    } 
    else{
        setIndex(index+1);
    }
  }
  function SurprizeHandler(){
    let randomIndex=  Math.floor(Math.random()*reviews.length);
    setIndex(randomIndex);
  }
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex-col justify-center items-center mt-10 p-10 transition-all duration-700 place-items-center shadow-xl rounded-md'>
        <Card reviews={reviews[index]}/>

        <div className=' flex text-3xl gap-3 mt-5 text-violet-400 font-bold mb-5'>
        <button 
        onClick={leftShiftHandler} 
        className='cursor-pointer hover:text-violet-500'><FiChevronLeft/></button>

        <button 
        onClick={rightShiftHandler}
        className='cursor-pointer hover:text-violet-500'><FiChevronRight/> </button>
      </div>

      <div className=''>
        <button
        onClick={SurprizeHandler}
        className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 px-10 py-2 rounded-md font-bold text-white text-lg cursor-pointer'>
          Surprize Me
        </button>
      </div>

    </div>
  )
}

export default Testimonials
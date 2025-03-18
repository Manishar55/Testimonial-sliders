
import React from 'react'
import Card from './Card'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'


function Testimonials(props) {
  let reviews=props.reviews;

  function leftShiftHandler(){

  }
  function rightShiftHandler(){

  }
  function SurprizeHandler(){

  }
  return (
    <div className=''>
        <Card reviews={reviews[0]}/>

        <div className=' flex text-3xl gap-3 mt-5 text-violet-400 font-bold mx-auto'>
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
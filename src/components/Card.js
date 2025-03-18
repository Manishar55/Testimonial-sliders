import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'


function Card({reviews}) {
  // let review = props.review;
  return (
    <div>
      {/* <div>
        <img alt='imgg' src={reviews.image}/>
      </div> */}

      <div>
        <p>{reviews.name}</p>
      </div>

      <div>
        <p>{reviews.job}</p>
      </div>

      <div>
        <FaQuoteLeft/>
      </div>

      <div>
        {reviews.text}
      </div>

      <div>
        <FaQuoteRight/>
      </div>

      <div>
        <button>+</button>
        <button>-</button>
      </div>

      <div>
        <button>
          Surprize Me...
        </button>
      </div>
    </div>
  )
}

export default Card
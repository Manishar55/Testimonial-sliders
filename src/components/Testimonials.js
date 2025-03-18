
import React from 'react'
import Card from './Card'

function Testimonials(props) {
    let reviews=props.reviews;
  return (
    <div>
        <Card reviews={reviews[0]}/>
    </div>
  )
}

export default Testimonials
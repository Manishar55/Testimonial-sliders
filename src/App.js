import React from "react";
import Testimoals from "./components/Testimonials"
import reviews from "./data"

const App = () => {
  return (
    <div>
      <div>
        <h1>Our Testimonials</h1>
        <div></div>
      </div>
      <Testimoals reviews={reviews}/>

    </div>
  )
};

export default App;

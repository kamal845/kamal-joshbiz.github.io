import React from "react";
import imagine3 from "/Users/ved/Desktop/kamal react js/joshbiz/joshbiz/src/images/shape1.png";
import imagine4 from "/Users/ved/Desktop/kamal react js/joshbiz/joshbiz/src/images/shape2.png";
import imagine100 from"/Users/ved/Desktop/kamal react js/joshbiz/joshbiz/src/images/shape3.png";
const Plan =() =>{
    return(
        <div className="plan">
      <div className="container">
         <div className="plan2">
           <h4>Pick your plan</h4>
            <figcaption><img src={imagine100} alt="alternative" className="imagine100"></img></figcaption>
         </div>
       <div className="row">
           <div className="col-md-6">
            <img src={imagine3} alt="imagine3" className="imagine3"></img>
        </div>
        <div className="col-md-6">
            <img src={imagine4} alt="imagine4" className="imagine4"></img>
        </div>
    </div>
    <p>Your plan auto-renews at the end of 30 days from the 1st day you signed-up.</p>
</div>
</div>
    )
}
export default Plan;
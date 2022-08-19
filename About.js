import React from "react";
import imagine2 from "/Users/ved/Desktop/kamal react js/joshbiz/joshbiz/src/images/project20.png";
const About=()=>{
    return(
<div class="container-fluid">
  <div class="row">
    <div class="col-md-5">
        <div className="about1">
        <h3>Look good without<br></br> leaving your house</h3>
         <p>Upbox is the easiest way to look your best without
         having to hunt for the perfect makeup combination.
         Our stylists curate the latest trends and send 
         them directly to your door every month.
        </p>
        <div className="hat">
        <button>Sign up ></button>
        </div>
        </div>
        </div>
        <div class="col-md-7">
        <img src={imagine2} alt="imagine2" className="imagine2"></img>
        </div>
   </div>
</div>
    )
}
export default About;
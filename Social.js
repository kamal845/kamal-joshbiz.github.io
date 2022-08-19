import React from "react";
import imagine6 from "/Users/ved/Desktop/kamal react js/joshbiz/joshbiz/src/images/project3.jpeg";
import imagine7 from "/Users/ved/Desktop/kamal react js/joshbiz/joshbiz/src/images/project4.jpeg";
import imagine8 from "/Users/ved/Desktop/kamal react js/joshbiz/joshbiz/src/images/project5.jpeg";
import imagine9 from "/Users/ved/Desktop/kamal react js/joshbiz/joshbiz/src/images/project6.jpeg";

const Social =()=>{
    return(
        <>
        <div className="social">
        <div className="container">
            <h3>Social Posts</h3>
            <div className="row">
                <div className="col-md-3">
                  <img src={imagine6} alt="imagine6" className="imagine6"></img>
                  <figcaption>How to rock the lip look that turns heads.</figcaption>
                </div>
                <div className="col-md-3">
                <img src={imagine7} alt="imagine7" className="imagine7"></img>  
                <figcaption>Find the perfect shade for the season</figcaption>     
                </div>
                <div className="col-md-3">
                <img src={imagine8} alt="imagine8" className="imagine8"></img>    
                <figcaption>The 5 eye shadow secrets you never knew</figcaption>
                </div>
                <div className="col-md-3">
                <img src={imagine9} alt="imagine9" className="imagine9"></img>    
                <figcaption>The Pro-tips for at home hair dying</figcaption>
                </div>
               
            </div>
        </div>
        <div className="bike">
             <button className="follow">FOLLOW US ON INSTAGRAM</button>
             </div>
             </div>
        </>
    )
}
export default Social;
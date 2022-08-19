import React from "react";
import imagine11 from "/Users/ved/Desktop/kamal react js/joshbiz/joshbiz/src/images/shape99.png";
import imagine12 from "/Users/ved/Desktop/kamal react js/joshbiz/joshbiz/src/images/shape4.png";
import imagine13 from "/Users/ved/Desktop/kamal react js/joshbiz/joshbiz/src/images/shape5.png";
import imagine14 from "/Users/ved/Desktop/kamal react js/joshbiz/joshbiz/src/images/shape7.png";

const Work =()=>{
    return(
<>
<div className="work">
    <div className="container">
        <div className="row">
            <h3>How it Works ?</h3>
            <figcaption><img src={imagine11}alt="alternative" className="imagine11"></img></figcaption>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="work01">
                  <img src={imagine12} alt="alternative" className="imagine12"></img>
                </div>
            </div>
            <div className="col-md-6">
             <div className="work001">
              <h3>Setup your profile &<br></br> preferences</h3>
              <p>Once you create an account, you can start to<br></br> tell us your likes and dislikes so we can tailor<br></br> the experience just for you.</p>
            </div>
          </div>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="work002">
            <img src={imagine14}alt="alternative" className="imagine14"></img>
            </div>
            </div>
        </div>
    </div>
    <div className="work44">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="work003">
                  <img src={imagine13} alt="alternative" className="imagine13"></img>
                </div>
            </div>
            <div className="col-md-6">
             <div className="work004">
              <h3>Try it on at home</h3>
              <p>Your box will arrive within 3-5 days (usually sooner)<br></br> and you get the joy to unbox your Upbox. Try it all on<br></br> and send back whatever you’re not in love with.</p>
                </div>
          </div>
          </div>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-md-4">

            </div>
            <div className="col-md-4">
            <div className="workR">
                <button className="tire">TRY IT FOR YOURSELF ></button>
            </div>
            </div>
            <div className="col-md-4">
                
            </div>
        </div>
    </div>
</div>
</>
    )
}
export default Work;
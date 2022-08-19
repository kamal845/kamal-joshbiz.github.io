import React from "react";
import imagine10 from "/Users/ved/Desktop/kamal react js/joshbiz/joshbiz/src/images/screenshot (3).png";
import imagine30 from "/Users/ved/Desktop/kamal react js/joshbiz/joshbiz/src/images/project30.png";
import imagine40 from "/Users/ved/Desktop/kamal react js/joshbiz/joshbiz/src/images/project40.png";
import imagine50 from "/Users/ved/Desktop/kamal react js/joshbiz/joshbiz/src/images/project50.png";
import imagine60 from "/Users/ved/Desktop/kamal react js/joshbiz/joshbiz/src/images/project60.png";

const Footer =() =>{
    return(
        <>
        <div className="footer0">
            <div className="lfoot">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                    <img src={imagine10} alt="imagine10" className="imagine10"></img>
                    </div>
                    <div className="col-md-4">
                        <div className="footer00">
                    <img src={imagine30} alt="alternative" className="imagine30"></img>
                    <img src={imagine40} alt="alternative" className="imagine40"></img>
                    <img src={imagine50} alt="alternative" className="imagine50"></img>
                    <img src={imagine60} alt="alternative" className="imagine60"></img>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
<div className="footer1">
<ul>
    <li><b>UPBOX</b></li>
    <li>Upbox Bag Platinum</li>
    <li>Upbox Bag VIP</li>
    <li>Seasonal Items</li>
    <li>Upbox Promise</li>
</ul>
</div>
                </div>
                <div className="col-md-3">
                <div className="footer2">
                <ul>
    <li><b>Find Us On</b></li>
    <li>Instagram</li>
    <li>Facebook</li>
    <li>Tik Tok</li>
    <li>Snap Chat</li>
    <li>Twitter</li>
</ul>
</div>    
                </div>
                <div className="col-md-3">
                <div className="footer3">
                <ul>
    <li><b>Product</b></li>
    <li>Get the App</li>
    <li>Loyality Program</li>
    <li>Affiliates</li>
    <li>Press</li>
</ul>
    </div> 
                </div>
                <div className="col-md-3">
                <div className="footer4">
                <ul>
    <li><b>Help</b></li>
    <li>Returns</li>
    <li>FAQ</li>
    <li>Contact</li>
    <li>Community</li>
    <li>Videos</li>
</ul>
    </div> 
                </div>
            </div>
        </div>
<div className="footerT">
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <div className="footer5">
                 <p>2020 Quest AI. Upbox is a SAmple Project and open source design project free for personal and commercial use.</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="footer6">
                   <p>Terms  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Policy</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default Footer;
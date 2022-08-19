import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import imagine1 from "/Users/ved/Desktop/kamal react js/joshbiz/joshbiz/src/images/screenshot (3).png";
import last from"/Users/ved/Desktop/kamal react js/joshbiz/joshbiz/src/images/last.png";
const Navbar=()=>{  
    return(    
      <nav class="navbar navbar-expand-sm">
      <div class="container">
        <a class="navbar-brand" href="javascript:void(0)">
        <img src={imagine1} alt="imagine" className="imagine1"></img>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
        <i class="fa fa-bars" aria-hidden="true"></i>
        </button>
        <div class="collapse navbar-collapse" id="mynavbar">
          <ul class="navbar-nav me-auto">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">THISMONTH</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">SKIN</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">HAIR</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">BATH</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">SALE</a>
            </li>
            <li className="nav-item">
              <button className="vat">LogIn> </button>
           </li>
          </ul>
          </ul>
        </div>
      </div>
    </nav>
    )
}
export default Navbar;

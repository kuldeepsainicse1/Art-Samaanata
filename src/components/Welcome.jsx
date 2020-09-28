import React from "react";
import {Season} from "../components/EnvironmentVars";


const Footer = () => {
  return (
    <>
    <div className="welcome-area" id="welcome">


<div className="header-text">
    <div className="container">
        <div className="row">
            <div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
            <br/><br/>
                <h1 className="DancingScript">We provide the best <br/><strong>strategy</strong><br/>to win and grow up your <br/><strong>Arts Skills</strong><br/> in </h1>
  <h1 className=""><strong>Art Samanaata {Season}</strong></h1>
                <a href="/rules" className="main-button-slider">Register Now</a><br/><br/>
                <p className="">Login if already Register?</p>
                <a href="/login" className="main-button-slider">Login</a>
            </div>
        </div>
    </div>
</div>

</div>

    </>
  );
};

export default Footer;

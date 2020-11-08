import React from "react";


const About = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                    {/* <!-- ***** Logo Start ***** --> */}
                    <a href="/" className="logo">
                        <img src="assets/images/logo.png" alt="Art Samaanata"/>
                    </a>
                    {/* <!-- ***** Logo End ***** -->
                    <!-- ***** Menu Start ***** --> */}
                    <ul className="nav">
                        <li><a href="#welcome" className="active">Home</a></li>
                        <li><a href="#features">About</a></li>
                        <li><a href="#work-process">Work Process</a></li>
                        {/* <li><a href="#testimonials">Testimonials</a></li> */}
                        <li><a href="#pricing-plans">Contests</a></li>
                        <li><a href="/login">Login</a></li>
                        {/* <li><a href="#blog">Blog Entries</a></li> */}
                        {/* <li><a href="/signup">Registration</a></li> */}
                        {/* <li><a href="#contact-us">Contact Us</a></li> */}
                    </ul>
                    {/* <a className='menu-trigger'>
                        <span>Menu</span>
                    </a> */}
                    {/* ***** Menu End ***** */}
                </nav>
            </div>
        </div>
    </div>
  );
};

export default About;

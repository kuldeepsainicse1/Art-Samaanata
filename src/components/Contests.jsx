import React from "react";


const Contests = () => {
  return (
    <section className="section colored" id="pricing-plans">
        <div className="container">
            
            <div className="row">
                <div className="col-lg-12">
                    <div className="center-heading">
                        <h2 className="section-title">Contest</h2>
                    </div>
                </div>
                <div className="offset-lg-3 col-lg-6">
                    <div className="center-text">
                        <p>Available Contests</p>
                    </div>
                </div>
            </div>
            

            <div className="row">
            {/*
                <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                    <div className="pricing-item">
                        <div className="pricing-header">
                            <h3 className="pricing-title">Starter</h3>
                        </div>
                        <div className="pricing-body">
                            <div className="price-wrapper">
                                <span className="currency">$</span>
                                <span className="price">14.50</span>
                                <span className="period">monthly</span>
                            </div>
                            <ul className="list">
                                <li className="active">60 GB space</li>
                                <li className="active">600 GB transfer</li>
                                <li className="active">Pro Design Panel</li>
                                <li>15-minute support</li>
                                <li>Unlimited Emails</li>
                                <li>24/7 Security</li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a href="#" className="main-button">Purchase Now</a>
                        </div>
                    </div>
                </div> */}
            
                <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                    <div className="pricing-item ">
                        <div className="pricing-header">
                            <h2>Season 1</h2>
                        </div>
                        <div className="pricing-body">
                            <div className="price-wrapper">
                                
                                <span className="period">Registration Charges</span>
                                <span className="currency">₹</span>
                                <span className="price">0</span>
                            </div>
                            {/* <div className="price-wrapper">
                                <span className="period">Competition Rules</span>
                                <span className="price">0</span>
                                
                            </div> */}
                            {/* <ul className="list">
                                <li className="active">120 GB space</li>
                                <li className="active">1200 GB transfer</li>
                                <li className="active">Pro Design Panel</li>
                                <li className="active">15-minute support</li>
                                <li>Unlimited Emails</li>
                                <li>24/7 Security</li>
                            </ul> */}
                        </div>
                        <div className="pricing-footer">
                            <a href="#" className="main-button disabled" >Contest Finished</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                    <div className="pricing-item active">
                        <div className="pricing-header">
                            <h2>Season 2</h2>
                        </div>
                        <div className="pricing-body">
                            <div className="price-wrapper">
                                
                                <span className="period">Registration Charges</span>
                                <span className="currency">₹</span>
                                <span className="price">Free</span><br/>
                                <span className="currency">or</span><br/>
                                <span className="currency">₹</span>
                                <span className="price">20</span>
                            </div>
                            {/* <div className="price-wrapper">
                                
                                <span className="period">Registration Charges</span>
                                <span className="currency">₹</span>
                                <span className="price">--</span>
                            </div> */}
                            {/* <ul className="list">
                                <li className="active">120 GB space</li>
                                <li className="active">1200 GB transfer</li>
                                <li className="active">Pro Design Panel</li>
                                <li className="active">15-minute support</li>
                                <li>Unlimited Emails</li>
                                <li>24/7 Security</li>
                            </ul>  */}
                        </div>
                        <div className="pricing-footer active">
                        <a href="/rules" >Read the Rules for more details</a><br/>
                        <br/>
                            <a href="/register" className="main-button">Register</a>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                    <div className="pricing-item ">
                        <div className="pricing-header">
                            <h2>Season 3</h2>
                        </div>
                        <div className="pricing-body">
                            <div className="price-wrapper">
                                
                                <span className="period">Registration Charges</span>
                                <span className="currency">₹</span>
                                <span className="price">--</span>
                            </div>
                            {/* <ul className="list">
                                <li className="active">120 GB space</li>
                                <li className="active">1200 GB transfer</li>
                                <li className="active">Pro Design Panel</li>
                                <li className="active">15-minute support</li>
                                <li>Unlimited Emails</li>
                                <li>24/7 Security</li>
                            </ul> */}
                        </div>
                        <div className="pricing-footer">
                            <a href="#" aria-disabled className="main-button">Coming Soon</a>
                        </div>
                    </div>
                </div>
            
{/*             
                <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                    <div className="pricing-item">
                        <div className="pricing-header">
                            <h3 className="pricing-title">Advanced</h3>
                        </div>
                        <div className="pricing-body">
                            <div className="price-wrapper">
                                <span className="currency">$</span>
                                <span className="price">42.00</span>
                                <span className="period">monthly</span>
                            </div>
                            <ul className="list">
                                <li className="active">250 GB space</li>
                                <li className="active">5000 GB transfer</li>
                                <li className="active">Pro Design Panel</li>
                                <li className="active">15-minute support</li>
                                <li className="active">Unlimited Emails</li>
                                <li className="active">24/7 Security</li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a href="#" className="main-button">Purchase Now</a>
                        </div>
                    </div>
                </div>
*/} 
            </div> 
        </div>
    </section>
  );
};

export default Contests;

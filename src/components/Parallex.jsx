import React from "react";

const Parallex = () => {
    return (
        <>
            <section className="mini" id="work-process">
                <div className="mini-content">
                    <div className="container">
                        <div className="row">
                            <div className="offset-lg-3 col-lg-6">
                                <div className="info">
                                    <h1>Work Process</h1>
                                    <p>Transparent process is used from start of journey with registration to the end till get prizes.</p>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                                <a href="#" className="mini-box">
                                    <i><img src="assets/images/work-process-item-01.png" alt="" /></i>
                                    <strong>Get Ideas</strong>
                                    {/* <span>Godard pabst prism fam cliche.</span> */}
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                                <a href="/register" className="mini-box">
                                    <i><img src="assets/images/work-process-item-01.png" alt="" /></i>
                                    <strong>Register</strong>
                                    {/* <span>Godard pabst prism fam cliche.</span> */}
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                                <a href="/profile" className="mini-box">
                                    <i><img src="assets/images/work-process-item-01.png" alt="" /></i>
                                    <strong>Submit Art</strong>
                                    {/* <span>Godard pabst prism fam cliche.</span> */}
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                                <a href="#" className="mini-box">
                                    <i><img src="assets/images/work-process-item-01.png" alt="" /></i>
                                    <strong>Promotion</strong>
                                    {/* <span>Godard pabst prism fam cliche.</span> */}
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                                <a href="/rules" className="mini-box">
                                    <i><img src="assets/images/work-process-item-01.png" alt="" /></i>
                                    <strong>Evaluation</strong>
                                    {/* <span>Godard pabst prism fam cliche.</span> */}
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                                <a href="/prizes" className="mini-box">
                                    <i><img src="assets/images/work-process-item-01.png" alt="" /></i>
                                    <strong>Prizes</strong>
                                    {/* <span>Godard pabst prism fam cliche.</span> */}
                                </a>
                            </div>
                            {/* <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                                <a href="#" className="mini-box">
                                    <i><img src="assets/images/work-process-item-01.png" alt="" /></i>
                                    <strong>Launch</strong>
                                    <span>Godard pabst prism fam cliche.</span>
                                </a>
                            </div> */}
                        </div>

                    </div>
                </div>
            </section>


        </>
    );
};

export default Parallex;
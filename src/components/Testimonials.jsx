import React from "react";

const Testimonials = () => {
  return (
      <section className="section" id="testimonials">
        <div className="container">
            
            <div className="row">
                <div className="col-lg-12">
                    <div className="center-heading">
                        <h2 className="section-title">What do they say?</h2>
                    </div>
                </div>
                <div className="offset-lg-3 col-lg-6">
                    <div className="center-text">
                        <p>Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla, at accumsan elit eros a turpis. Ut sagittis lectus libero.</p>
                    </div>
                </div>
            </div>
            

            <div className="row">
                
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="team-item">
                        <div className="team-content">
                            <i><img src="assets/images/testimonial-icon.png" alt="" /></i>
                            <p>Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio.</p>
                            <div className="user-image">
                                <img src="http://placehold.it/60x60" alt="" />
                            </div>
                            <div className="team-info">
                                <h3 className="user-name">Catherine Soft</h3>
                                <span>Managing Director</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="team-item">
                        <div className="team-content">
                            <i><img src="assets/images/testimonial-icon.png" alt="" /></i>
                            <p>Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.</p>
                            <div className="user-image">
                                <img src="http://placehold.it/60x60" alt="" />
                            </div>
                            <div className="team-info">
                                <h3 className="user-name">Kelvin Wood</h3>
                                <span>Digital Marketer</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="team-item">
                        <div className="team-content">
                            <i><img src="assets/images/testimonial-icon.png" alt="" /></i>
                            <p>Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras quis est non ante ultrices molestie. Ut vehicula et diam at aliquam.</p>
                            <div className="user-image">
                                <img src="http://placehold.it/60x60" alt="" />
                            </div>
                            <div className="team-info">
                                <h3 className="user-name">David Martin</h3>
                                <span>Website Manager</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
      );
};

export default Testimonials;
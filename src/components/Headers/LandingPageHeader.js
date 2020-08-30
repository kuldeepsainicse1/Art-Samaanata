import React from "react";

// reactstrap components
import { Button, Container, Row,Col } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header ">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bkg.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <div className="content" >  {/*style={{marginTop:"8%"}}> */}
          <Container>
            <Row>
            <Col xs="12" md="8">
            <div >
              {/* <h1 className="title">This </h1> */}
              <SideInfo />
              <div className="text-center">
                <ImageButtons href="https://www.facebook.com/instafollowzz" icon="fab fa-facebook" />
                <ImageButtons href="https://www.instagram.com/instafollowzz" icon="fab fa-instagram" />
              </div>
            </div>
            </Col>

            <Col Classname="col-md-12 col-lg-4 offset-lg-1 order-sm-2">

            <div >
              <div className="text-center">
                
                <img  className="page-header-side-image"              src="/img/likepic2.png"      />
              </div>
            </div>
            </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}



const ImageButtons = ({ href, icon }) => (
  <Button
    className="btn-icon btn-round"
    color="info"
    href={href}
  >
    <i className={icon}></i>
  </Button>
);

const SideInfo = ({}) => (
  
  <div>
    <span className="text-small">
      Get Started Instantly With No Worries
    </span>
    <h1 className="display-10">Free Instagram Followers</h1>
    <p className="lead">Get free Instagram followers the easy way. 
      No need to fill out a survey, No need to share Instagram password.<br/> 
      <strong>And its free. Try it now!</strong> 
    </p>
    <a href="/signup" className="btn-neutral btn-round btn btn-info btn-lg">GET FOLLOWERS NOW</a>
    <p className="opacity-90 text-small">No payment or personal details needed to claim your new and free IG followers. You don't need to pay a cent and you can get over 1000 followers on Instagram with minimal effort. Find out more below, or sign up for free now!</p>
            
         
  </div>
);

export default LandingPageHeader;

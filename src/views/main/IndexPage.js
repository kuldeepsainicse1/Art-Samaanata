import React from "react";


import UpCounter from "../../components/widgets/UpCounter"

// import firebase-admin from "firebase-admin";
// import myfirebase from "../firebase/firebase";



// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import TopNavbar from "components/Navbars/TopNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import ContactUs from "../../components/widgets/ContactUs"

function IndexPage() {
  
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  
const TeamInfo = () =>(
  <div className="section section-team text-center">
            <Container>
              <h2 className="title">Here is our team</h2>
              <div className="team">
                <Row>
                  <Col md="4">
                    <div className="team-player">
                      <img
                        alt="..."
                        className="rounded-circle img-fluid img-raised"
                        src={require("assets/img/avatar.jpg")}
                      ></img>
                      <h4 className="title">Romina Hadid</h4>
                      <p className="category text-info">Model</p>
                      <p className="description">
                        You can write here details about one of your team members.
                        You can give more details about what they do. Feel free to
                        add some{" "}
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          links
                        </a>{" "}
                        for people to be able to follow them outside the site.
                      </p>
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-instagram"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook-square"></i>
                      </Button>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="team-player">
                      <img
                        alt="..."
                        className="rounded-circle img-fluid img-raised"
                        src={require("assets/img/ryan.jpg")}
                      ></img>
                      <h4 className="title">Ryan Tompson</h4>
                      <p className="category text-info">Designer</p>
                      <p className="description">
                        You can write here details about one of your team members.
                        You can give more details about what they do. Feel free to
                        add some{" "}
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          links
                        </a>{" "}
                        for people to be able to follow them outside the site.
                      </p>
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-linkedin"></i>
                      </Button>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="team-player">
                      <img
                        alt="..."
                        className="rounded-circle img-fluid img-raised"
                        src={require("assets/img/eva.jpg")}
                      ></img>
                      <h4 className="title">Eva Jenner</h4>
                      <p className="category text-info">Fashion</p>
                      <p className="description">
                        You can write here details about one of your team members.
                        You can give more details about what they do. Feel free to
                        add some{" "}
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          links
                        </a>{" "}
                        for people to be able to follow them outside the site.
                      </p>
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-google-plus"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-youtube"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
  );
  
  // const ContactUs =()=>(
  //   <div />
  
  // );

  const PageDesciption =()=>(
    <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who we are?</h2>
                <h5 className="description">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record low maximum sea ice extent tihs year down
                  to low ice extent in the Pacific and a late drop in ice extent
                  in the Barents Sea.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/login.jpg") + ")"
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "Over the span of the satellite record, Arctic sea ice has
                      been declining significantly, while sea ice in the
                      Antarctichas increased very slightly" <br></br>
                      <br></br>
                      <small>-NOAA</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg3.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg1.jpg") + ")"
                    }}
                  ></div>
                  <h3>
                    So what does the new record for the lowest level of winter
                    ice actually mean
                  </h3>
                  <p>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens with climate change. Even if the
                    Arctic continues to be one of the fastest-warming regions of
                    the world, it will always be plunged into bitterly cold
                    polar dark every winter. And year-by-year, for all kinds of
                    natural reasons, there’s huge variety of the state of the
                    ice.
                  </p>
                  <p>
                    For a start, it does not automatically follow that a record
                    amount of ice will melt this summer. More important for
                    determining the size of the annual thaw is the state of the
                    weather as the midnight sun approaches and temperatures
                    rise. But over the more than 30 years of satellite records,
                    scientists have observed a clear pattern of decline,
                    decade-by-decade.
                  </p>
                  <p>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens with climate change. Even if the
                    Arctic continues to be one of the fastest-warming regions of
                    the world, it will always be plunged into bitterly cold
                    polar dark every winter. And year-by-year, for all kinds of
                    natural reasons, there’s huge variety of the state of the
                    ice.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
  );

  const PageServices = () => (
    <div ClassName="section translucent-bg bg-image-1 blue">
			<div ClassName="container object-non-visible animated object-visible fadeIn" data-animation-effect="fadeIn">
				<h1 id="services" ClassName="text-center title">Worthy Services</h1>
				<div ClassName="space"></div>
				<div ClassName="row">
					<div ClassName="col-sm-6">
						<div ClassName="media">
							<div ClassName="media-body text-right">
								<h4 ClassName="media-heading">Service 1</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aperiam consequatur quo quis exercitationem reprehenderit dolor vel ducimus, voluptate eaque suscipit iste placeat.</p>
							</div>
							<div ClassName="media-right">
								<i ClassName="fa fa-cog"></i>
							</div>
						</div>
						<div ClassName="media">
							<div ClassName="media-body text-right">
								<h4 ClassName="media-heading">Service 2</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aperiam consequatur quo quis exercitationem reprehenderit dolor vel ducimus, voluptate eaque suscipit iste placeat.</p>
							</div>
							<div ClassName="media-right">
								<i ClassName="fa fa-check"></i>
							</div>
						</div>
						<div ClassName="media">
							<div ClassName="media-body text-right">
								<h4 ClassName="media-heading">Service 3</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aperiam consequatur quo quis exercitationem reprehenderit dolor vel ducimus, voluptate eaque suscipit iste placeat.</p>
							</div>
							<div ClassName="media-right">
								<i ClassName="fa fa-desktop"></i>
							</div>
						</div>
						<div ClassName="media">
							<div ClassName="media-body text-right">
								<h4 ClassName="media-heading">Service 4</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aperiam consequatur quo quis exercitationem reprehenderit dolor vel ducimus, voluptate eaque suscipit iste placeat.</p>
							</div>
							<div ClassName="media-right">
								<i ClassName="fa fa-users"></i>
							</div>
						</div>
					</div>
					<div ClassName="space visible-xs"></div>
					<div ClassName="col-sm-6">
						<div ClassName="media">
							<div ClassName="media-left">
								<i ClassName="fa fa-leaf"></i>
							</div>
							<div ClassName="media-body">
								<h4 ClassName="media-heading">Service 5</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aperiam consequatur quo quis exercitationem reprehenderit dolor vel ducimus, voluptate eaque suscipit iste placeat.</p>
							</div>
						</div>
						<div ClassName="media">
							<div ClassName="media-left">
								<i ClassName="fa fa-area-chart"></i>
							</div>
							<div ClassName="media-body">
								<h4 ClassName="media-heading">Service 6</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aperiam consequatur quo quis exercitationem reprehenderit dolor vel ducimus, voluptate eaque suscipit iste placeat.</p>
							</div>
						</div>
						<div ClassName="media">
							<div ClassName="media-left">
								<i ClassName="fa fa-child"></i>
							</div>
							<div ClassName="media-body">
								<h4 ClassName="media-heading">Service 7</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aperiam consequatur quo quis exercitationem reprehenderit dolor vel ducimus, voluptate eaque suscipit iste placeat.</p>
							</div>
						</div>
						<div ClassName="media">
							<div ClassName="media-left">
								<i ClassName="fa fa-codepen"></i>
							</div>
							<div ClassName="media-body">
								<h4 ClassName="media-heading">Service 8</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aperiam consequatur quo quis exercitationem reprehenderit dolor vel ducimus, voluptate eaque suscipit iste placeat.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  );

  return (
    <>
      <TopNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <PageDesciption />
        <PageServices />
        <TeamInfo />
        <ContactUs />
        <DefaultFooter />
      </div>
    </>
  );


}


export default IndexPage;

import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Button,
  Container,
  Row
} from "reactstrap";
// core components

import HeaderInternal from "components/HeaderInternal";
import Footer from "components/Footer";

function AboutPage() {


  // componentDidMount() {
  // var dbRef = firebaset.database().ref("/UserInfo/");
  // console.log("[");
  //   dbRef.on("value", snapshot => {
  //   const count = snapshot.numChildren();
  //   console.log("The read count: " + count);
  //   this.setState({count});
  // }, function (errorObject) {
  //   console.log("The read failed: " + errorObject.code);
  // });


  // const fsRef = firebaset.firestore();
  //   console.log("Rules");

  //   const collection = fsRef.collection('ArtSeason2');


  // collection.get().then(snapshot => {

  //   // snapshot.forEach(value => {

  //     console.log( snapshot.metadata );    
  //     // console.log( doc.data().mail );

  //   });


  //   console.log("Rules End");    

  const handleSubmitrequest = () => {
    // const { name, insta, email, password, notify } = this.state;
    // console.log(name+ insta+ email+ password+notify);
    // this.state.errormsg = ""
    // if (!this.state.nameValid) this.state.errormsg = "Name Length must be greater than 3.\n" + this.state.errormsg;
    // if (!this.state.emailValid) this.state.errormsg = "Enter Valid Email ID.\n" + this.state.errormsg;
    // if (!this.state.instaValid) this.state.errormsg = "Insta Username Length must be greater than 3.\n" + this.state.errormsg;
    // if (!this.state.passValid) this.state.errormsg = "Password Length must be greater than 5.\n" + this.state.errormsg;
    // // console.log(this.state.errormsg);
    // if (this.state.errormsg.length > 0)
    //   alert(this.state.errormsg)
    // else {
    //   const fsRef = firebaset.firestore();

    //   const collection = fsRef.collection('Counters').doc(SEASON_COUNTER);
    //   // console.log("Registration ID for" + Season);

    //   collection.get().then(snapshot => {
    //     let scount = snapshot.data().count;
    //     //   console.log("The read scount: " + Season+":"+scount);
    //     //   this.setState({scount});
    //     let count = parseInt(scount) + 1;

    //     const REG_ID = SEASON_REG_ID + count;
    //     //   this.setState({REG_ID});
    //     console.log("Registration ID for " + Season + ":" + REG_ID);
    //     const res = fsRef.collection(SEASON_DB).doc(REG_ID).set(result.data);
    //     collection.set({ count });

    //     var dbRef = firebaset.database().ref("/UserInfo/" + isUser.uid);
    //     dbRef.update({ isDetails: true, REG_ID: REG_ID, season: SEASON_NAME })
    //       .then(function () {
    //         console.log('Synchronization succeeded');
    //         alert("Thanks for successful submission\nPlease share details in Insta Page");
    //       })
    //       .catch(function (error) {
    //         console.log('Synchronization failed');
    //         alert("Contact to administrator");
    //       });

    //   });
    // }
    // this.state.errormsg = ""
  };

  return (
    <>
      <HeaderInternal />
      <div className="wrapper" >
        <Container >
          <Row className="terms-Row">
            <div className="col-md-3">
              <div className="terms-menu">
                <div className="terms-title"> TERMS &amp; CONDITIONS </div>
                <div className="terms-item"> <a href="/terms">Terms of Service</a> </div>
                <div className="terms-item"> <a href="/privacy">Privacy Policy</a> </div>
                <div className="terms-item"> <a href="/refund">Refund/Cancellation</a> </div>
                <div className="terms-item"> <a href="/FAQs">FAQs</a> </div>
                <br></br>
                <div className="terms-item"> <a href="/about">About Us</a> </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="terms-content">
                <h1>About Us</h1>
                <h5>Art Samaanata is an art eqality competition</h5>
                <p> Art Samaanata is an art organization which has provided a platform for many artists to showcase their work and now it organizing  online art competition. This competition is open for all age group and all artwork. Submit your artwork to enroll in the online art competition having great prizes and awards. </p>
                <div className="text-center">
                  <div className="col-lg-12">
                    <div className="center-heading">
                      <h2 className="section-title">Talk To Us</h2>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-6 col-sm-12">
                    <div className="contact-form">
                      <form id="contact">
                        <div className="row">
                          <div className="col-lg-6 col-md-12 col-sm-12">
                            <fieldset>
                              <input name="name" type="text" className="form-control" id="name" placeholder="Full Name" required="" />
                            </fieldset>
                          </div>
                          <div className="col-lg-6 col-md-12 col-sm-12">
                            <fieldset>
                              <input name="email" type="email" className="form-control" id="email" placeholder="E-Mail Address" required="" />
                            </fieldset>
                          </div>
                          <div className="col-lg-12">
                            <fieldset>
                              <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your Message" required=""></textarea>
                            </fieldset>
                          </div>
                          <div className="col-lg-12">
                            <fieldset>
                              <button type="submit" id="form-submit" className="main-button" onClick={e => e.preventDefault()}>Send Message</button>
                            </fieldset>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
            </div>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage
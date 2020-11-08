import React from "react";
import { firebaset  } from "../../actions";
import {Season,SeasonTheme,SeasonMinArt,SeasonMaxArt} from "../../components/EnvironmentVars"
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

function RefundPage() {


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
              <h1>Refund and Cancellation</h1> 
              <hr></hr>
              <h3>Payments</h3>
                  <p>We process all of our payments through Razorpay.</p>
              
                <h3>Refund</h3> 
                 <p> You have 24 hours to inspect your purchase and to determine if it does not processed by Razorpay Payment Gateway.</p> 
                 <p> Entre Fees for the competition is Non-Refundable. </p> 
                 
                <h3>Cancellation</h3> 
                 <p> Art Samaanata is not responsible for any cancellation of payment in Razorpay portal.</p> 
                 <p> Once Participated in competition, No cancellation is processed.</p>
                 <h3>Changes about privacy</h3> 
                 <p> If we change our terms of Refund and Cancellation we will post those changes on this page. Registered users will be sent an email that outlines changes made to the terms of use. </p>                  
            </div> 
          </div>
          </Row>
          </Container>
        </div>
        <Footer />
    </>
  );
}

export default RefundPage
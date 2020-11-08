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

function TermsConditionsPage() {


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
              <h1>Terms of Our Services</h1> 
              <hr></hr>
               <div class="terms-notice"> <i> Please review our terms of use. </i> </div> <hr></hr>
                <h3>General rules</h3> 
                  <p>By accessing and participating in any competition of Art Samaanata, you confirm that you are in agreement with and bound by the terms and conditions contained in the Terms Of Use outlined below. These terms apply to the entire website and any email or other type of communication between you and Art Samaanata.</p>
                  <p>Art Samaanata will not be responsible for any outcome that may occur during the course of usage of our resources.We reserve the rights to change prices and revise the resources usage policy in any moment.</p>
                <h3>Competition rules</h3> 
                  <ul>
                    <li><p>Participants can submit any type of artwork and should be created by him/his.</p></li>
                    <li><p>If found the art work are belongs to another artist, the art work would be cancelled/banned from the competition.</p></li>
                    <li><p>Participants can submit maximum 3 artwork. Registration Fee will be notified in Rules and Prizes links.</p></li>
                    <li><p>Any Experimental art works and mixed techniques are welcomed.</p></li>
                    <li><p>Image size should be Minimum 2MB and Maximum 8MB in the image format of JPEG/PNG/PDF. The content of the image must be clearly visible and promptly differentiable.</p></li>
                    <li><p>Accepted entries would be notified by the email address provided by the participants.</p></li>
                    <li><p>If the terms and conditions of the competition art work are not met by the artist, the art work shall be disqualified from the competition.</p></li>
                    <li><p>Participants artwork will judge on your artwork basis.</p></li>
                    <li><p>Entre Fees for the competition is Non-Refundable.</p></li>
                    <li><p>Specific rules related to competitions will be updated in Rule and Prizes Sections.</p></li>
                  </ul>
                 <br/> 
                 <h3>Security</h3>
                  <p>Art Samaanata does not process any order payments through the website. All payments are processed securely through Razorpay, a third party online payment provider.</p>
                 <h3>Payments</h3>
                  <p>We process all of our payments through Razorpay.</p>
                 <h3>Ownership</h3>
                  <p>Ownership of the art is governed by the artist.</p>
                  <p>All copyright are associated with the respective art owner. For any copyright issues email us at mysteriousltd@gmail.com</p>
                 <h3>Changes about terms/rules</h3> 
                 <p> If we change our terms or any rule of any competition, we will post those changes on this page or our any social handle(facebook/instagram/twitter).</p>                  
            </div> 
          </div>
          </Row>
          </Container>
        </div>
        <Footer />
    </>
  );
}

export default TermsConditionsPage
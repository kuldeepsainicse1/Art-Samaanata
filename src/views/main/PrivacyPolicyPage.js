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

function PrivacyPolicyPage() {


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
              <h1>Privacy Policy</h1> <hr></hr>
              <h3>General rules</h3> 
                 <p> Art Samaanata does not share personal information of any kind with anyone. We will not sell or rent your name or personal information to any third party. We do not sell, rent or provide outside access to our mailing list or any data we store. Any data that a user stores via our facilities is wholly owned by that user or business. At any time a user or business is free to take their data and leave, or to simply delete their data from our facilities. </p> 
                 <p> Art Samaanata only collects such personal information that is necessary for you to access and use our competetion. This personal information includes, but is not limited to, first and last name, email address. </p> 
                 <p> Art Samaanata may release personal information if Art Samaanata is required to by law, search warrant, subpoena, court order or fraud investigation. We may also use personal information in a manner that does not identify you specifically nor allow you to be contacted but does identify certain criteria about our Site's users in general (such as we may inform third parties about the number of registered users, number of unique visitors, and the pages most frequently browsed). </p> 
                 <br/> 
                 <h3>Changes about policies</h3> 
                 <p> If we change our terms of use we will post those changes on this page. Registered users will be sent an email that outlines changes made to the terms of use. </p>                  
            </div> 
          </div>
          </Row>
          </Container>
        </div>
        <Footer />
    </>
  );
}

export default PrivacyPolicyPage
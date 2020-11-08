import React from "react";
import { firebaset } from "../../actions";
import { Season, SeasonTheme, SeasonMinArt, SeasonMaxArt } from "../../components/EnvironmentVars"
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
  UncontrolledCollapse,
  Row
} from "reactstrap";
// core components

import HeaderInternal from "components/HeaderInternal";
import Footer from "components/Footer";

function FAQsPage() {


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
                <h1>Frequently Asked Questions</h1>
                <div className="item">
                  <a
                    href="#pablo"
                    id="exampleAccordion1"
                    onClick={e => e.preventDefault()}
                  >
                    How are the artwork judged ? Who will judge the artworks ?
                  </a>
                  <UncontrolledCollapse
                    role="tabpanel"
                    toggler="#exampleAccordion1"
                    defaultOpen
                  >
                    <p className="mb-3">
                     Artwork will judge on artwork basis and Your artwork will judge by professional artist.
                     </p>
                  </UncontrolledCollapse>
                </div>

                <div className="item">
                  <a
                    href="#pablo"
                    id="exampleAccordion2"
                    onClick={e => e.preventDefault()}
                  >
                    What the prize of art competition?
                  </a>
                  <UncontrolledCollapse
                    role="tabpanel"
                    toggler="#exampleAccordion2"
                    defaultOpen
                  >
                    <p className="mb-3">
                    Winning prize is available in <a href="\prizes">Prizes Page</a> .
                     </p>
                  </UncontrolledCollapse>
                </div>

                <div className="item">
                  <a
                    href="#pablo"
                    id="exampleAccordion3"
                    onClick={e => e.preventDefault()}
                  >
                    How to participate in this art competition? What the procedure?
                  </a>
                  <UncontrolledCollapse
                    role="tabpanel"
                    toggler="#exampleAccordion3"
                    defaultOpen
                  >
                    <p className="mb-3">
                    The participants can click on the button provided (Register) and fill up the form with required details. After uploading the details, upload a clear image of the art work and write a short description about it.
                     </p>
                  </UncontrolledCollapse>
                </div>

                <div className="item">
                  <a
                    href="#pablo"
                    id="exampleAccordion4"
                    onClick={e => e.preventDefault()}
                  >
                    How many artwork can I upload?
                  </a>
                  <UncontrolledCollapse
                    role="tabpanel"
                    toggler="#exampleAccordion4"
                    defaultOpen
                  >
                    <p className="mb-3">
                    You can submit maximum 3 artworks.
                     </p>
                  </UncontrolledCollapse>
                </div>

                <div className="item">
                  <a
                    href="#pablo"
                    id="exampleAccordion5"
                    onClick={e => e.preventDefault()}
                  >
                    Can we submit our old artwork?
                  </a>
                  <UncontrolledCollapse
                    role="tabpanel"
                    toggler="#exampleAccordion5"
                    defaultOpen
                  >
                    <p className="mb-3">
                    es, You can submit your old artwork. But not more then 5 year old and have the copy of same if required to verify.
                     </p>
                  </UncontrolledCollapse>
                </div>

                <div className="item">
                  <a
                    href="#pablo"
                    id="exampleAccordion6"
                    onClick={e => e.preventDefault()}
                  >
                    Government registration Id?
                  </a>
                  <UncontrolledCollapse
                    role="tabpanel"
                    toggler="#exampleAccordion6"
                    defaultOpen
                  >
                    <p className="mb-3">
                    Soon we will register with the  Govenment when we have a great participations in the competition.
                     </p>
                  </UncontrolledCollapse>
                </div>
                
              </div>
            </div>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default FAQsPage
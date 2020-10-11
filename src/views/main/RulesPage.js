import React from "react";
import { firebaset  } from "../../actions/";
import {Season} from "../../components/EnvironmentVars"
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Button
} from "reactstrap";
// core components

function RulesPage() {


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
      <Card className="text-center" style={{ height: "100%" }}>
        <CardHeader className="mt-2"><a href="/" className="logo">
          <img src="assets/images/logo.png" alt="Art Samaanata" />
        </a></CardHeader>
        <CardBody>
          <CardTitle tag="h4">{Season} Rules and Guidelines</CardTitle>
          <CardText>
            
            <ul className="list">
              <li><p tag="h3">Important Points To remember Before Registration</p></li>
              <li className="active"><b>Registrations Starts on 5th October 2020</b></li>
              <li className="active"><b>Registrations Ends on 6 October 2020</b></li>
              <li className="active"><b>Result Declaration Date : 7 October 2020</b> on Facebook, Instagram and this site.</li>
              <li className="active">Its a theme contest <b>World's Teacher Day</b>.  You can upload any art work form in any medium.</li>
              <li className="active">You can participate with minimum 1 art and maximum 2 art </li>
              <li className="active"><b>No Registration Fees for all Participants</b></li>
              <br/>
              <li className="active"><h5>There are 2 Registration Categories</h5></li>
              <ol className="list">
                <li className="active"><h6>Pen and Pencil Artwork Registration</h6></li>
                <li className="active"><h6>Painting and Other Artwork Registration</h6></li>
              </ol>

              <li className="active"><a href="/prizes" alt="Prize details">CLICK HERE</a> to see Prizes for both Categories</li>
              <li className="active"><b>Decision of Jury will be FINAL!</b> You can also read our terms & condition page before registering.</li>
              <li className="active">Result will be on basis of art skills (Creativity, Uniqueness, Skill & Technique, Beauty of art & fulfilled Intent) decided by professional Jury with 2-5 yr + exp.</li>
              <li className="active">For further details or query, dm on our insta page (<a href="https://www.instagram.com/_art.samaanata_/" >https://www.instagram.com/_art.samaanata_/</a>)</li>
              <li className="active">All copyright are associated with the respective art owner. For any copyright issues email us at admin@artsamaanata.com</li>
            </ul>
          </CardText>
          <Button
            color="primary"
            href="/register"
            // onClick={event => window.location.href = "/register"}
          >
            Go for Registration
          </Button>
        </CardBody>
        {/* <CardFooter className="text-muted mb-2">2 days ago</CardFooter> */}
      </Card>
    </>
  );
}

export default RulesPage
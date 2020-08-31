import React from "react";
import { firebaset } from "../../actions/";
// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
    CardFooter,
    Row,
    Col,
    Button
} from "reactstrap";
// core components

function PrizesPage() {


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
                    <CardTitle tag="h3">Season 2 Prizes</CardTitle>
                    <br />
                    <br />
                    <CardText>
                        <Row>
                            <Col>
                                <h6>Free Registration</h6>
                                <ul className="list">
                                    <li className="active"><b>No Registration Fees</b></li>
                                    <li className="active"><b>4 Winners will be declared</b></li>
                                    <li className="active"><b>Prizes 🏆🎖️🏅</b></li>
                                    <ol>
                                        <li className="active"><b>1. First Prize : 5 days ShoutOut + Story</b></li>
                                        <li className="active"><b>2. Creative Art Work Prize : 4 days ShoutOut + Story</b></li>
                                        <li className="active"><b>3. Beginner's Art Work Prize : 3 days ShoutOut + Story</b></li>
                                        <li className="active"><b>4. Most Liked Art Work Prize : 2 days ShoutOut + Story</b></li>
                                        <li className="active"><b>E-certificate of Appreciation for all winners</b></li>
                                    </ol>
                                </ul>
                            </Col>
                            <Col>
                                <h6>Paid Registration</h6>
                                <ul className="list">
                                    <li className="active"><b>Registration Fees : ₹20 per art Work</b></li>
                                    <li className="active"><b>4 Winners will be declared</b></li>
                                    <li className="active"><b>Prizes 🏆🎖️🏅</b></li>
                                    <ol>
                                        <li className="active"><b>1. First Prize : ₹ 35% of overall collection</b></li>
                                        <li className="active"><b>2. Second Prize : ₹ 25% of overall collection</b></li>
                                        <li className="active"><b>3. Third Prize : ₹ 15% of overall collection</b></li>
                                        <li className="active"><b>4. Most Liked Art Work Prize : ₹ 10% of overall collection</b></li>
                                        <li className="active"><b>E-certificate of Appreciation for all winners</b></li>
                                    </ol>
                                  
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <ul className="list">
                        <li className="active">Any kind of art is acceptable : painting, sketching, mandala, doodling, mehndi or anything handmade art except photography</li>
                                    <li className="active">Top 5 Art work will be on the wall of Art Samaanata forever.</li>
                                    <li className="active"><b>All participants will get E Certificate from Art Samaanata Initiative</b></li>
                                    <li><b>⚠️Fake likes and sharing others artwork will lead to disqualification⚠️</b></li>
                                    </ul>
                                    </Col>
                        </Row>

                    </CardText>
                    <Button
                        color="primary"
                        href="#pablo"
                        onClick={event => window.location.href = "/register"}
                    >
                        Go for Registration
          </Button>
                </CardBody>
                {/* <CardFooter className="text-muted mb-2">2 days ago</CardFooter> */}
            </Card>
        </>
    );
}

export default PrizesPage
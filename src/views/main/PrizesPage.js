import React from "react";
import { firebaset } from "../../actions/";
import {Season} from "../../components/EnvironmentVars"
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
                    <CardTitle tag="h3">{Season} Prizes</CardTitle>
                    <br />
                    <br />
                    <CardText>
                        <Row>
                            <Col>
                                <h6>Pen and Pencil Artwork </h6>
                                <ul className="list">
                                    {/* <li className="active"><b>No Registration Fees</b></li> */}
                                    <li className="active"><b>3 Winners will be declared</b></li>
                                    <li className="active"><b>Prizes 🏆🎖️🏅</b></li>
                                    <ol>
                                        <li className="active"><b>1. First Prize : ₹300</b></li>
                                        <li className="active"><b>2. Second Prize : ₹200</b></li>
                                        <li className="active"><b>3. Third Prize : ₹100</b></li>
                                        <li className="active"><b>Appriciation E-Certificate for the Winners</b></li>
                                        <li className="active">Artwork Accepted in this Categories</li>
                                        <li className="active"> Drawing / Mandala / Sketching / Calligraphy</li>

                                    </ol>
                                </ul>
                            </Col>
                            <Col>
                                <h6>Painting and Other Artwork</h6>
                                <ul className="list">
                                    {/* <li className="active"><b>Registration Fees : ₹20 per art Work</b></li> */}
                                    <li className="active"><b>3 Winners will be declared</b></li>
                                    <li className="active"><b>Prizes 🏆🎖️🏅</b></li>
                                    <ol>
                                        <li className="active"><b>1. First Prize : ₹300</b></li>
                                        <li className="active"><b>2. Second Prize : ₹200</b></li>
                                        <li className="active"><b>3. Third Prize : ₹100</b></li>
                                        <li className="active"><b>Appriciation E-Certificate for the Winners</b></li>
                                        <li className="active">Artwork Accepted in this Categories</li>
                                        <li className="active">Painting / Digital Art / Craft Work / Color Art and all other</li>
                                    </ol>
                                  
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <ul className="list">
                                        <h6>Consolation Prizes depends on number of entries</h6>
                                        {/* <li className="active"><b>1. Creative Art Work Prize : ₹100</b></li>
                                        <li className="active"><b>2. Beginner's Art Work Prize : ₹100</b></li>
                                        <li className="active"><b>3. Most Liked Art Work Prize : ₹100</b></li> */}
                                        
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

export default PrizesPage
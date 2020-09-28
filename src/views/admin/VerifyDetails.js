import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withRouter } from 'react-router'
import { logoutUser } from "../../actions";
import { firebaset } from "../../actions";
import "./style.css";

// reactstrap components
import {
    Button,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip,

    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup

} from "reactstrap";

// core components
import TopNavbar from "components/Navbars/TopNavbar";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import Footer from "components/Footer";




class Test extends Component {
    state = { name: "", uid: "", userDetails: "",insta:"" };


    handleLogout = () => {
        // alert("handleLogout")
        const { dispatch } = this.props;
        dispatch(logoutUser());
    };
    componentDidMount() {

        
        const fsRef = firebaset.firestore();
        // console.log("renderTableData2");
        const search = window.location.search;
        const params = new URLSearchParams(search);
        let uid = "";
        if (params.get('uid') && params.get('uid').length > 0) {
            console.log("renderTableData2");
            uid = params.get('uid');
            this.setState({uid});
        }
        else {
            uid = "test";
        }

        const collection = fsRef.collection('UserDetails_ArtSeason2').doc(uid);
        collection.get().then(

            details => {
                let userDetails = details.data()
                this.setState({ userDetails });
            });
        var dbRef = firebaset.database().ref("/UserInfo/" + uid + "/");
        // console.log("["+dbRef);
        dbRef.on("value", snapshot => {
            const insta = snapshot.val().insta;
            // console.log("::"+insta+"::"+snapshot.val());
            
            this.setState({ insta });
        });
    }

    render() {

        let [firstFocus, setFirstFocus] = [false, false];
        let [lastFocus, setLastFocus] = [false, false];
        const { classes, isLoggingOut, logoutError, isUser, isAuthenticated } = this.props;



        if (isAuthenticated) {
            // console.log("KIL");
            return <a href="/">Click to go to next page<Redirect to="/" /></a>;
            // console.log("KIL1");
        } else {
            // console.log("KIL2");

            // console.log("LLLLD:" + JSON.stringify(this.state.userDetails, null, 2));
            // console.log("Result JSON:\n" + item.data);
            // this.state.details.map((item, key) => {
            //     console.log("Result JSON:\n" + item.data);
            // });
            // console.log("KIL3");
            return (
                <>
                    <div className="page-header clear-filter" filter-color="blue" style={{
                        // backgroundImage: "url(" + require("assets/img/bkg.jpg") + ")",
                        // height: "100%",
                        placeholder: { color: "white" }
                    }}>
                        <div
                            className="page-header-image"

                        ></div>
                        <div className="content" style={{ marginTop: "0%", color: "white" }}>
                            <Container>
                                <Col className="ml-auto mr-auto" md="12">
                                    <Card className="card-login card-plain">
                                        <Form action="" className="form" method="">
                                            <CardHeader className="text-center">
                                                <div className="logo-container" style={{ width: "100%" }}>
                                                    <img

                                                        alt="..."
                                                        src={require("assets/img/logo-bg.png")}
                                                    ></img>
                                                </div>
                                            </CardHeader>
                                            <CardBody>
                                                <Row>
                                                    <Col className="ml-auto mr-auto" md="10">
                <p>0,{this.state.uid},{this.state.userDetails.name},{this.state.insta},{this.state.userDetails.email}</p>
                                                        <table className="ml-auto mr-auto" md="8">
                                                            <tbody>
                                                                <tr>
                                                                   
                                                                        <th>Competition Type :</th>
                                                                   
                                                                        <th>{this.state.userDetails.CompetitionType}</th>
                                                                   
                                                                </tr>
                                                                <tr>
                                                                   
                                                                        <td>Registration ID :</td>
                                                                   
                                                                   
                                                                        <td>{this.state.uid}</td>
                                                                   
                                                                </tr>
                                                                <tr>
                                                                   
                                                                        <td>Name :</td>
                                                                   
                                                                   
                                                                        <td>{this.state.userDetails.name}</td>
                                                                   
                                                                </tr>
                                                                <tr>
                                                                   
                                                                   <td>Insta Username :</td>
                                                              
                                                              
                                                                   <td>{this.state.insta}</td>
                                                              
                                                           </tr>
                                                                <tr>
                                                                   
                                                                        <td>Email :</td>
                                                                   
                                                                   
                                                                        <td>{this.state.userDetails.email}</td>
                                                                   
                                                                </tr>
                                                                {/* <tr>
                                                                   
                                                                        <td>Age :</td>
                                                                   
                                                                   
                                                                        <td>{this.state.userDetails.age}</td>
                                                                   
                                                                </tr>
                                                                <tr>
                                                                   
                                                                        <td>Mobile No :</td>
                                                                   
                                                                   
                                                                        <td>{this.state.userDetails.mobile}</td>
                                                                   
                                                                </tr>
                                                                <tr>
                                                                   
                                                                        <td>Country :</td>
                                                                   
                                                                   
                                                                        <td>{this.state.userDetails.country}</td>
                                                                   
                                                                </tr>
                                                               
                                                                <tr>
                                                                   
                                                                        <td>Payment info :</td>
                                                                   
                                                                   
                                                                        <td>{this.state.userDetails.payinfo}</td>
                                                                   
                                                                </tr>
                                                                <tr>
                                                                   
                                                                        <td>Fees :</td>
                                                                   
                                                                   
                                                                        <td>{this.state.userDetails.fees}</td>
                                                                   
                                                                </tr>
                                                                <tr>
                                                                   
                                                                        <td>Fees Details :</td>
                                                                   
                                                                   
                                                                        <td>{this.state.userDetails.nfees}</td>
                                                                   
                                                                </tr>
                                                                <tr>
                                                                   
                                                                        <td>Payment Details Shared :</td>
                                                                   
                                                                   
                                                                        <td>{this.state.userDetails.payss}</td>
                                                                   
                                                                </tr>
                                                                <tr>
                                                                   
                                                                        <td>Art Details Shared :</td>
                                                                   
                                                                   
                                                                        <td>{this.state.userDetails.artss}</td>
                                                                   
                                                                </tr>
                                                                <tr>
                                                                   
                                                                        <td>Art title :</td>
                                                                   
                                                                   
                                                                        <td>{this.state.userDetails.arttitle}</td>
                                                                   
                                                                </tr>
                                                                <tr>
                                                                   
                                                                        <td>Know about :</td>
                                                                   
                                                                   
                                                                        <td>{this.state.userDetails.know}</td>
                                                                   
                                                                </tr> */}
                                                               
                                                            </tbody>
                                                        </table>
                                                    
                                                    </Col>
                                                    <Col className="ml-auto mr-auto" md="10">
                                                        

                                                       




                                                        <div className="col text-center">
                                                            <Button
                                                                className="btn-round"
                                                                color="info"
                                                                onClick={this.handleLogout}
                                                                outline
                                                                size="md"
                                                            >
                                                                Log Out
                                                </Button>
                                                        </div>

                                                    </Col>
                                                </Row>
                                            </CardBody>



                                        </Form>
                                    </Card>
                                </Col>
                            </Container>
                        </div>
                    </div>
                </>
            );
            // console.log("KIL4");
        }
    }
}
function mapStateToProps(state) {
    return {
        isLoggingOut: state.auth.isLoggingOut,
        logoutError: state.auth.logoutError,
        isAuthenticated: state.auth.isAuthenticated,
        isUser: state.auth.user
    };
}

export default connect(mapStateToProps)(Test);
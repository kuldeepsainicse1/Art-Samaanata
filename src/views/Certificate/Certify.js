import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withRouter } from 'react-router'
import { logoutUser } from "../../actions";
import { firebaset } from "../../actions";
import Typography from "@material-ui/core/Typography";
import ReactDOM from "react-dom";
import * as Survey from "survey-react";
import "./styles.css";
import "survey-react/survey.css";

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




class Certify extends Component {
    state = { name: "", uid: "",isDetails:"",url:"" };


    handleLogout = () => {
        // alert("handleLogout")
        const { dispatch } = this.props;
        dispatch(logoutUser());
    };
    componentDidMount() {

        var user = firebaset.auth().currentUser;
        // console.log("Uid" + user.uid);
        var uid = user.uid
        this.setState({ uid });
        var dbRef = firebaset.database().ref("/UserInfo/" + user.uid + "/");
        // console.log("["+dbRef);
        dbRef.on("value", snapshot => {
            const name = snapshot.val().name;
            const isDetails = snapshot.val().isDetails;
            this.setState({ name });
            this.setState({ isDetails });
            console.log(":"+this.state.isDetails);
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        // console.log(":::"+firebaset.storage;
        // let url="";
        //     const images = firebaset.storage().ref('/ArtSeason2/Certificates/');
        //     const image = images.child('mystic.pdf');
        //     image.getDownloadURL().then(
        //         url => { 
        //             this.setState({ url })
        //         });
          
    }

    render() {

        let [firstFocus, setFirstFocus] = [false, false];
        let [lastFocus, setLastFocus] = [false, false];
        const { classes, isLoggingOut, logoutError, isUser, isAuthenticated } = this.props;


        // const [isMain] = this.state.props;
        // React.useEffect(() => {
        //   document.body.classList.add("login-page");
        //   document.body.classList.add("sidebar-collapse");
        //   document.documentElement.classList.remove("nav-open");
        //   window.scrollTo(0, 0);
        //   document.body.scrollTop = 0;
        //   return function cleanup() {
        //     document.body.classList.remove("login-page");
        //     document.body.classList.remove("sidebar-collapse");
        //   };
        // });

        if (!isAuthenticated) {
            // console.log("KIL");
            return <a href="/login">Click to go to next page<Redirect to="/login" /></a>;
            // console.log("KIL1");
        } else {
            // console.log("KIL2");
            console.log("LL:"+this.state.isDetails);
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
                                        
                                        {
                                        this.state.isDetails?
                                        <div>
                                        
                                        <h2 className="title text-center">My Portfolio - {this.state.name}</h2>
                                        <h3>Your Registration ID is</h3>
                                        <h3>{this.state.uid}</h3>
                                        <h5>Please Share Registration ID in instagram account.</h5>
                                        </div>
                                        :
                                        <div>
                                        
                                        <h2 className="text-center mobile-head">My Portfolio - {this.state.name}</h2>
                                        <div>
                                            <h4 className="mobile-head1">Please fill the details to generate your Registration ID.</h4>
                                            <div className="nav-align-center">
                                                <div className="sv">
                                                    {/* {surveyRender} */}
                                                </div>
                                            </div>
                                            </div>
                                            </div>
                                        }
                                            

                                            
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


                                            {/* <CardFooter className="text-center">

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
                                            </CardFooter> */}
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

export default connect(mapStateToProps)(Certify);

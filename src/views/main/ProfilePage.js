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




class ProfilePage extends Component {
    state = { name: "", uid: "" };


    handleLogout = () => {
        // alert("handleLogout")
        const { dispatch } = this.props;
        dispatch(logoutUser());
    };
    componentDidMount() {

        var user = firebaset.auth().currentUser;
        console.log("Uid" + user.uid);
        var uid = user.uid
        this.setState({ uid });
        var dbRef = firebaset.database().ref("/UserInfo/" + user.uid + "/");
        // console.log("["+dbRef);
        dbRef.on("value", snapshot => {
            const name = snapshot.val().name;
            this.setState({ name });
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    }

    render() {

        let [firstFocus, setFirstFocus] = [false, false];
        let [lastFocus, setLastFocus] = [false, false];
        const { classes, isLoggingOut, logoutError, isUser, isAuthenticated } = this.props;

        let sv = true;
        let json = {
            clearInvisibleValues: "onHidden",
            title: "Art Samaanata Season 2 Registration Form",
            pages: [
                {
                    title: "Please enter your details for Cerificates",
                    questions: [
                        {
                            type: "text",
                            name: "name",
                            isRequired: true,
                            title: "Artist Full Name (To be put on Certificate) - No Spelling Mistakes! "
                        },
                        {
                            type: "text",
                            name: "email",
                            isRequired: true,
                            title: "Email (Certificate will be sent to this Email) - No Spelling Mistakes! "
                        },

                        {
                            type: "text",
                            name: "age",
                            isRequired: true,
                            title: "Age "
                        },

                        {
                            type: "text",
                            name: "mobile",
                            isRequired: false,
                            title: "Please mention your WhatsApp Number so that our team can reach out to you for any clarifications "
                        },
                        {
                            type: "dropdown",
                            name: "country",
                            
                            title: "Select your Country?",
                            isRequired: true,
                            choices: [
                                "Afghanistan",
"Albania",
"Algeria",
"Andorra",
"Angola",
"Antigua and Barbuda",
"Argentina",
"Armenia",
"Australia",
"Austria",
"Azerbaijan",
"Bahamas",
"Bahrain",
"Bangladesh",
"Barbados",
"Belarus",
"Belgium",
"Belize",
"Benin",
"Bhutan",
"Bolivia",
"Bosnia and Herzegovina",
"Botswana",
"Brazil",
"Brunei",
"Bulgaria",
"Burkina Faso",
"Burundi",
"Cabo Verde",
"Cambodia",
"Cameroon",
"Canada",
"Central African Republic",
"Chad",
"Chile",
"China",
"Colombia",
"Comoros",
"Congo",
"Costa Rica",
"Croatia",
"Cuba",
"Cyprus",
"Czech Republic (Czechia)",
"Côte d'Ivoire",
"Denmark",
"Djibouti",
"Dominica",
"Dominican Republic",
"DR Congo",
"Ecuador",
"Egypt",
"El Salvador",
"Equatorial Guinea",
"Eritrea",
"Estonia",
"Eswatini",
"Ethiopia",
"Fiji",
"Finland",
"France",
"Gabon",
"Gambia",
"Georgia",
"Germany",
"Ghana",
"Greece",
"Grenada",
"Guatemala",
"Guinea",
"Guinea-Bissau",
"Guyana",
"Haiti",
"Holy See",
"Honduras",
"Hungary",
"Iceland",
"India",
"Indonesia",
"Iran",
"Iraq",
"Ireland",
"Israel",
"Italy",
"Jamaica",
"Japan",
"Jordan",
"Kazakhstan",
"Kenya",
"Kiribati",
"Kuwait",
"Kyrgyzstan",
"Laos",
"Latvia",
"Lebanon",
"Lesotho",
"Liberia",
"Libya",
"Liechtenstein",
"Lithuania",
"Luxembourg",
"Madagascar",
"Malawi",
"Malaysia",
"Maldives",
"Mali",
"Malta",
"Marshall Islands",
"Mauritania",
"Mauritius",
"Mexico",
"Micronesia",
"Moldova",
"Monaco",
"Mongolia",
"Montenegro",
"Morocco",
"Mozambique",
"Myanmar",
"Namibia",
"Nauru",
"Nepal",
"Netherlands",
"New Zealand",
"Nicaragua",
"Niger",
"Nigeria",
"North Korea",
"North Macedonia",
"Norway",
"Oman",
"Pakistan",
"Palau",
"Panama",
"Papua New Guinea",
"Paraguay",
"Peru",
"Philippines",
"Poland",
"Portugal",
"Qatar",
"Romania",
"Russia",
"Rwanda",
"Saint Kitts & Nevis",
"Saint Lucia",
"Samoa",
"San Marino",
"Sao Tome & Principe",
"Saudi Arabia",
"Senegal",
"Serbia",
"Seychelles",
"Sierra Leone",
"Singapore",
"Slovakia",
"Slovenia",
"Solomon Islands",
"Somalia",
"South Africa",
"South Korea",
"South Sudan",
"Spain",
"Sri Lanka",
"St. Vincent & Grenadines",
"State of Palestine",
"Sudan",
"Suriname",
"Sweden",
"Switzerland",
"Syria",
"Tajikistan",
"Tanzania",
"Thailand",
"Timor-Leste",
"Togo",
"Tonga",
"Trinidad and Tobago",
"Tunisia",
"Turkey",
"Turkmenistan",
"Tuvalu",
"Uganda",
"Ukraine",
"United Arab Emirates",
"United Kingdom",
"United States",
"Uruguay",
"Uzbekistan",
"Vanuatu",
"Venezuela",
"Vietnam",
"Yemen",
"Zambia",
"Zimbabwe"
                            ]
                        },
                    ]
                },
                {
                    title: "Share your Competition details",
                    questions: [
                        {
                            type: "radiogroup",
                            name: "CompetitionType",
                            title: "Choose your Competition Type",
                            isRequired: true,
                            choices: ["Free Registration", "Paid Registration"]
                        },
                        {
                            type: "html",
                            name: "payinfo",
                            visibleIf: "{CompetitionType}='Paid Registration'",
                            html: "<table><body><row><td><b>PhonePay/Paytm</b>-9953668337</td><td style='padding:20px'><b>Google Pay</b>-mysteriousltd@oksbi</td></row></body></table>"
                        },
                        {
                            type: "dropdown",
                            name: "fees",
                            visibleIf: "{CompetitionType}='Paid Registration'",
                            title: "Have you paid registration fees?",
                            isRequired: true,
                            choices: [
                                "Yes",
                                "No"
                            ]
                        },
                        {
                            type: "dropdown",
                            name: "nfees",
                            visibleIf: "{fees}='Yes'",
                            title: "How much registration fees you have paid ?",
                            isRequired: true,
                            choices: [
                                "20/* ( For 1 art)",
                                "40/* ( For 2 art)",
                                "50/* ( For 3 art)"
                            ]
                        }


                    ]
                },
                {

                    title: "Share your Screen shots regarding Art Samaanata?",
                    questions: [
                        {
                            type: "radiogroup",
                            title: "Did you message your Payment Screen Shots on insta page?",
                            name: "payss",
                            visibleIf: "{fees}='Yes'",
                            isRequired: true,
                            choices: [
                                "Yes",
                                "No"
                            ]
                        },
                        {
                            type: "radiogroup",
                            title: "Did you message your Art Work Screen Shots on insta page?",
                            name: "artss",

                            isRequired: true,
                            choices: [
                                "Yes",
                                "No"
                            ]
                        }
                    ]

                },

                {
                    title: "Share your views regarding Art Samaanata?",
                    questions: [
                        {
                            type: "text",
                            name: "know",
                            // isRequired: true,
                            title: "How did you get to know about Art Contest by Art Samaanata ?"
                        },
                        {
                            type: "text",
                            name: "arttitle",
                            // isRequired: true,
                            title: "Title of Art ? Any Message ? Any suggestions for us ?"
                        }
                    ]
                }

            ]
        };

        var surveyRender = !this.state.isCompleted ? (
            <Survey.Survey
                json={json}
                showCompletedPage={true}
                showProgressBar='bottom'

                onComplete={function (result) {
                    console.log("Result JSON:\n" + JSON.stringify(result.data, null, 3));
                    const fsRef = firebaset.firestore();
                    const res = fsRef.collection('UserDetails_ArtSeason2').doc(isUser.uid).set(result.data);
                }}

            />
        ) : null;


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
            return <a href="/">Click to go to next page<Redirect to="/" /></a>;
        } else {
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
                                    {/* <Card className="card-login card-plain">
                                        <Form action="" className="form" method="">
                                            <CardHeader className="text-center">
                                                <div className="logo-container" style={{ width: "100%" }}>
                                                    <img

                                                        alt="..."
                                                        src={require("assets/img/logo-bg.png")}
                                                    ></img>
                                                </div>
                                            </CardHeader>
                                            <CardBody> */}
                                    <Row>
                                        <Col className="ml-auto mr-auto" md="10">
                                            <h3>Your Registration ID is</h3>
                                            <h3>{this.state.uid}</h3>
                                                Please Share This ID in instagram account after completeing below Steps.

                                                        <h4 className="title text-center">My Portfolio - {this.state.name}</h4>
                                            <div className="nav-align-center">
                                                <div className="sv">
                                                    {surveyRender}
                                                </div>
                                                {/* {onCompleteComponent} */}

                                            </div>
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
                                    {/* </CardBody>


                                            <CardFooter className="text-center">

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
                                            </CardFooter>
                                        </Form>
                                    </Card> */}
                                </Col>
                            </Container>
                        </div>
                    </div>
                </>
            );
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

export default connect(mapStateToProps)(ProfilePage);

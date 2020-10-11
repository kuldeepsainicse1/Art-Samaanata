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
import { Season,SEASON_REG_ID,SEASON_DB,SEASON_COUNTER } from "../../components/EnvironmentVars";

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
    state = { name: "", uid: "",isDetails:"",userDetails:"",insta:"",scount:"",REG_ID:"" };


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
            const season = snapshot.val().season;
            const isDetails = snapshot.val().isDetails;
            const insta = snapshot.val().insta;
            const REG_ID = snapshot.val().REG_ID!== undefined?snapshot.val().REG_ID:"NO Registration";
            this.setState({ isDetails });
            if(isDetails && REG_ID==="NO Registration" || season!==Season )
            {
                alert("Click OK for Registration in "+Season+".")
                dbRef.update({ isDetails: false});
                this.setState({ isDetails:false });

            }
            this.setState({ name });
            this.setState({insta});
            this.setState({ REG_ID });
            // console.log(":"+this.state.isDetails);
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        // const fsRef = firebaset.firestore();

                    // const collection = fsRef.collection('Counters').doc(Season);

                    // collection.get().then(snapshot => {
                    //       const scount = snapshot.data().count;
                    //       console.log("The read scount: " + Season+":"+scount);
                    //       this.setState({scount});
                    //       let count=parseInt(this.state.scount)+1;
                    //       collection.set({count});
                    //       console.log("The Updated scount: " + Season+":"+count);
                    // });

        // const collection = fsRef.collection('UserDetails_ArtSeason2').doc(uid);
        // collection.get().then(

        //     details => {
        //         let userDetails = details.data().Certificate;
        //         this.setState({ userDetails });
        //     });
    }

    render() {

        let [firstFocus, setFirstFocus] = [false, false];
        let [lastFocus, setLastFocus] = [false, false];
        const { classes, isLoggingOut, logoutError, isUser, isAuthenticated } = this.props;

        let sv = true;
        let json = {
            clearInvisibleValues: "onHidden",
            // title: "Art Samaanata Season 2 Registration Form",
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
                            type: "dropdown",
                            name: "ArtType",
                            title: "Type of your Art Work?",
                            isRequired: true,
                            choices: [
                                "Pen and Pencil Artwork",
                                "Painting and Other Artwork"
                                
                            ]
                        },
                        {
                            type: "radiogroup",
                            name: "CompetitionType",
                            title: "Choose your Competition Type",
                            isRequired: true,
                            choices: ["Free Registration - World's Teacher Day"]
                        }


                    ]
                },
                {

                    title: "Share your Screen shots regarding Art Samaanata?",
                    questions: [
                        
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
                            name: "UID",
                            defaultValue :isUser.uid,
                            readOnly :true,
                            title: "Your User ID:"
                        },
                        {
                            type: "text",
                            name: "insta",
                            defaultValue :this.state.insta,
                            readOnly :true,
                            title: "Your Instagram ID:"
                        },
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
        
        // mapDefaults

        var surveyRender =  !this.state.isDetails?(
            <Survey.Survey
                json={json}
                showCompletedPage={true}
                showProgressBar='bottom'

                onComplete={function (result) {
                    // console.log("Result JSON:\n" + JSON.stringify(result.data, null, 3));
                    const fsRef = firebaset.firestore();

                    const collection = fsRef.collection('Counters').doc(SEASON_COUNTER);
                    // console.log("Registration ID for" + Season);

                    collection.get().then(snapshot => {
                          let scount = snapshot.data().count;
                        //   console.log("The read scount: " + Season+":"+scount);
                        //   this.setState({scount});
                          let count=parseInt(scount)+1;
                          
                          const REG_ID=SEASON_REG_ID+count;
                        //   this.setState({REG_ID});
                          console.log("Registration ID for " + Season+":"+REG_ID);
                          const res = fsRef.collection(SEASON_DB).doc(REG_ID).set(result.data);
                          collection.set({count});
                          
                          var dbRef = firebaset.database().ref("/UserInfo/"+isUser.uid);
                          dbRef.update({ isDetails: true,REG_ID:REG_ID,season:Season})
                          .then(function() {
                              console.log('Synchronization succeeded');
                              alert("Thanks for successful submission\nPlease share details in Insta Page");    
                          })
                          .catch(function(error) {
                              console.log('Synchronization failed');
                              alert("Contact to administrator");
                          });

                    });
                    
                    // mapDefaults();

                    
                }}

            />
            
        )
        :null ;


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
            return <a href="/">Click to go to next page<Redirect to="/" /></a>;
            // console.log("KIL1");
        } else {
            // console.log("KIL2");
            // console.log("LL:"+this.state.userDetails);
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
                                        <h3>{this.state.REG_ID}</h3>
                                        
                                        {
                                            this.state.userDetails?
                                            <div>
                                                <h5>Thanks for your participation in Season 2</h5>
                                            {/* <a href={this.state.userDetails} style={{color:"black"}} target="_blank">Click here to Download Your Certificate</a> */}
                                            </div>
                                            :
                                            <h5>Please Share Registration ID in instagram account.</h5>
                                        }
                                        
                                        </div>
                                        :
                                        <div>
                                        
                                        <h2 className="text-center mobile-head">My Portfolio - {this.state.name}</h2>
                                        <div>
                                            <h4 className="mobile-head1">Please fill the details to generate your Registration ID.</h4>
                                            <div className="nav-align-center">
                                                <div className="sv">
                                                    {surveyRender}
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

export default connect(mapStateToProps)(ProfilePage);

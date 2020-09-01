import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {withRouter} from 'react-router'
import { logoutUser  } from "../../actions/";
import { firebaset  } from "../../actions/";
import Typography from "@material-ui/core/Typography";
import ReactDOM from "react-dom";
import * as Survey from "survey-react";
import "./styles.css";
import "survey-react/survey.css";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col
} from "reactstrap";




class ProfilePage extends Component {
  state = { name:"",uid:""};
  
    
  


  handleLogout = () => {
    // alert("handleLogout")
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };
  componentDidMount() {
    
    var user = firebaset.auth().currentUser;
    console.log("Uid"+user.uid);
    var dbRef = firebaset.database().ref("/UserInfo/"+user.uid+"/");
    // console.log("["+dbRef);
    dbRef.on("value", snapshot => {
    const name = snapshot.val().name;
    this.setState({name});
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
}

  render() {

    let [firstFocus, setFirstFocus] = [false, false];
    let [lastFocus, setLastFocus] = [false, false];
    const { classes,isLoggingOut,logoutError, isUser, isAuthenticated } = this.props;


    let json = {
      title: "Art Samaanata Season 1 Survey",
      pages: [
        {
          title: "Please enter your details",
          questions: [
            {
              type: "text",
              name: "name",
              title: "Name:"
            },
            {
              type: "text",
              name: "email",
              title: "Your e-mail"
            },
            
            {
              type: "text",
              name: "insta",
              title: "Your instagram ID"
            },
            {
              type: "checkbox",
              name: "isShare",
              title: "You like to share your views on our site",
              isRequired: true,
              choices: ["Yes", "No"]
            }
          ]
        },
        {
          title: "What operating system do you use?",
          questions: [
            {
              type: "checkbox",
              name: "opSystem",
              title: "OS",
              hasOther: true,
              isRequired: true,
              choices: ["Windows", "Linux", "Macintosh OSX"]
            }
          ]
        },
        {
          title: "What language(s) are you currently using?",
          questions: [
            {
              type: "checkbox",
              name: "langs",
              title: "Please select from the list",
              colCount: 4,
              isRequired: true,
              choices: [
                "Javascript",
                "Java",
                "Python",
                "CSS",
                "PHP",
                "Ruby",
                "C++",
                "C",
                "Shell",
                "C#",
                "Objective-C",
                "R",
                "VimL",
                "Go",
                "Perl",
                "CoffeeScript",
                "TeX",
                "Swift",
                "Scala",
                "Emacs Lisp",
                "Haskell",
                "Lua",
                "Clojure",
                "Matlab",
                "Arduino",
                "Makefile",
                "Groovy",
                "Puppet",
                "Rust",
                "PowerShell"
              ]
            }
          ]
        }
        
      ]
    };
    
    var surveyRender = !this.state.isCompleted ? (
      <Survey.Survey
        json={json}
        showCompletedPage={false}
        showProgressBar = 'bottom'
        // onComplete={this.onCompleteComponent}
        onComplete={function (result){
            // document
            //     .querySelector('#surveyResult')
            //     .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3)
                console.log("Result JSON:\n" + JSON.stringify(result.data, null, 3));
        }}

      />
    ) : null;
    var onCompleteComponent = this.state.isCompleted ? (
      <div>The component after onComplete event</div>
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
          {/* <TopNavbar/> */}
          <div className="page-header clear-filter" filter-color="blue" style={{
            // backgroundImage: "url(" + require("assets/img/bkg.jpg") + ")",
            height: "100%",
            placeholder: { color: "white" }
          }}>
            <div
              className="page-header-image"

            ></div>
            <div className="content" style={{ marginTop: "5%", color: "white" }}>
              <Container>
                <Col className="ml-auto mr-auto" md="6">
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
                        <h2>Hi </h2>
                        <h1>{this.state.name}</h1>
                        <h2>Your Registration ID is</h2>
                        <h3>{isUser.uid}</h3>
                        <Row>
                                    <Col className="ml-auto mr-auto" md="8">
                                        <h4 className="title text-center">My Portfolio</h4>
                                        <div className="nav-align-center">
                                                <div className="sv">
                                                {surveyRender}
                                                </div>
                                                {/* {onCompleteComponent} */}
                                              
                                        </div>
                                    </Col>
                                </Row>
                      </CardBody>

                     
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
              </Card>
            </Col>
          </Container>
          </div>
          <br />
          <br />
          {/* <TransparentFooter /> */}
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

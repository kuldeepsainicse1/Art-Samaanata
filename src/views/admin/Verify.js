import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withRouter } from 'react-router'
import { logoutUser } from "../../actions";
import { firebaset } from "../../actions";
import Typography from "@material-ui/core/Typography";
import ReactDOM from "react-dom";
import * as Survey from "survey-react";
// import "./styles.css";
// import "survey-react/survey.css";

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




class Verify extends Component {
  state = { name: "", uid: "", details : [] };


  handleLogout = () => {
    // alert("handleLogout")
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };
  

  // componentDidMount() {

    // var user = firebaset.auth().currentUser;
    // var uid = user.uid
    // this.setState({ uid });

    // // console.log("renderTableData1");
    // const fsRef = firebaset.firestore();
    // // console.log("renderTableData2");
    //   const collection = fsRef.collection('UserDetails_ArtSeason2');
    //   // console.log("Ho"+collection);
    //   collection.get().then(
        
    //     details => {
    //       console.log("Ho Yaaami ki bachi");
    //       this.setState({details});
        
    //   //  snapshot.forEach(doc => { 
    //   //     console.log(doc.id, '=>', doc.data());
    //   //  });
    //   }
      
    //   );

    // // const fsRef = firebaset.firestore();

    //   const collection = fsRef.collection('UserDetails_ArtSeason2');
    //   collection.get().then(
    //     console.log("jhgjgHo Yaaami ki bachi"),
    //     snapshot => {
    //       console.log("Ho Yaaami ki bachi");
    //       // this.setState({details:snapshot});
        
    //    snapshot.forEach(doc => { 
    //       console.log(doc.id, '=>', doc.data());
    //    });
    //   }
      
    //   );


  // }

  componentDidMount() {
    console.log("renderTableData1");
    const fsRef = firebaset.firestore();
    console.log("renderTableData2");
      const collection = fsRef.collection('UserDetails_ArtSeason2');
      console.log("Ho"+collection);
      collection.get().then(
        
        // details => {
        //   console.log("Ho Yaaami ki bachiii");
        //    this.setState({details});
        // }
        
        snapshot =>
        {
          const data=snapshot.docs.map((item)=>
          <React.Fragment>
            
          <tr key={item.id}>
             <td>id: {item.id}</td>
             <td>company: {item.data()}</td>
           </tr>
    
  </React.Fragment>
          
          )
          console.log("Ho Yaaami ki bachiii");
          this.setState({details:data});
          // snapshot.forEach(doc => { 
          //     console.log(doc.id, '=>', doc.data());
          // })
        }
      
      
      );
  }
  
  render() {

    let [firstFocus, setFirstFocus] = [false, false];
    let [lastFocus, setLastFocus] = [false, false];
    const { classes, isLoggingOut, logoutError, isUser, isAuthenticated } = this.props;
    // console.log("LLK:"+isUser.uid+"::"+isAuthenticated);
    // isUser.uid!=="ZitTBvJaAQg8YgOoRdxoc7YeXKN2"?console.log("LLT:"):console.log("LLF:");
    // if (!isAuthenticated) {

    //   return <a href="/login">Click to go to next page<Redirect to="/" /></a>;

    // } else if (isUser.uid === "I44N4syoyIUhCrNyYivc3GS4SAD2" || isUser.uid === "ZitTBvJaAQg8YgOoRdxoc7YeXKN2") {


      // var docs=this.state.details?this.state.details.docs:"";
      // console.log("LL:" +this.state.details);
      
      // console.log('Document data:'+res+":::"+doc);




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
                            <div>

                              <h2 className="title text-center">Hi Admin</h2>
                              <h3>Your Registration ID is</h3>
                              <h3>{this.state.uid}</h3>
                              <h5>Please Share Registration ID in instagram account.</h5>
                            </div>
                            {/* <p>::{this.renderTableData()}::</p> */}
                            <tbody>
                              
    {this.state.details }
    
</tbody>





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
    // }
    // else {
    //   return (<h3>Unauthorized Access</h3>);
    // }
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

export default Verify;

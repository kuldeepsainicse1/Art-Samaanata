import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../../actions/";
import Typography from "@material-ui/core/Typography";

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




class  LoginPage extends Component {
  state = {email: "", password: "",error:""
};
  
  handleEmailChange = ({ target }) => {
    this.state.emailValid=target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);;
    this.setState({ email: target.value });
  };

  handlepassChange = ({ target }) => {
    this.setState({ password: target.value });
  };

  handleSubmitlogin = () => {
    // alert("handleSubmitlogin")
    const { dispatch } = this.props;
    const { email, password} = this.state;
    if(this.state.email.length==0||this.state.password.length==0)
      alert("Please Enter Email and Password");
    else
    {
      // alert("1");
      dispatch(loginUser(email,password));
      // alert("1");
    }
  };

render() {
    
  let [firstFocus, setFirstFocus] = [false,false];
  let [lastFocus, setLastFocus] = [false,false];
  const { classes, loginError, isAuthenticated } = this.props;
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
  if (isAuthenticated) {
    return <Redirect to="/profile" />;
  } else {
  return (
    <>
      {/* <TopNavbar/> */}
      <div className="page-header clear-filter" filter-color="blue"  style={{
            // backgroundImage: "url(" + require("assets/img/bkg.jpg") + ")",
            height:"100%",
            placeholder:{color:"white"}
          }}>
        <div
          className="page-header-image"
         
        ></div>
        <div className="content" style={{marginTop:"5%",color:"white"}}>
          <Container>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                    <div className="logo-container" style={{width:"100%"}}>
                      <img
                        
                        alt="..."
                        src={require("assets/img/logo-bg.png")}
                      ></img>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        
                        placeholder="Username/Email"
                        type="text"
                        // onFocus={setFirstFocus=true}
                        // onBlur={setFirstFocus=false}
                        onChange={this.handleEmailChange}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_caps-small"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        // onFocus={setLastFocus=true}
                        // onBlur={setLastFocus=false}
                        onChange={this.handlepassChange}
                      ></Input>
                    </InputGroup>
                    <br />
                    {/* <div className="pull-right">
                      <h6>
                        <a
                          className="link"
                          href="/forgetpassword"
                          // onClick={e => e.preventDefault()}
                        >
                          Forget Passworg?
                        </a>
                      </h6>
                    </div> */}
                  </CardBody>
                  
                  {loginError && (
              <Typography component="p" >
                Incorrect email or password.
              </Typography>
            )}
                  <CardFooter className="text-center">
                    
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      onClick={this.handleSubmitlogin}
                      size="lg"
                    >
                      Get Started
                    </Button>
                    <div>
                      <p> Don't have an account yet? </p>
                      {/* <a
                          className="link"
                          href="/signup"
                          // onClick={e => e.preventDefault()}
                        >
                          Create Account
                        </a> */}
                        <div className="col text-center">
            <Button
              className="btn-round btn-primary"
              color="green"
              onClick={event =>  window.location.href="/register"}
              outline
              size="md"
            >
              View Registration Page
            </Button>
          </div>
                      
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
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated,
    isUser:state.auth.user
  };
}

export default connect(mapStateToProps)(LoginPage);

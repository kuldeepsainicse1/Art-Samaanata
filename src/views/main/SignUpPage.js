import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signupUser } from "../../actions/";
import {Season} from "../../components/EnvironmentVars"

// reactstrap components
import {
  Button,
  Card,
  CustomInput,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row
} from "reactstrap";
import { size } from "lodash";
import { withWidth } from "@material-ui/core";

// core components

class  SignUpPage extends Component {
  state = {name:"" , insta:"" ,email: "", password: "",notify:"off",emailValid:false,passValid:false,nameValid:false,instaValid:false,
  error:"",isSubmit:false
};
    // toggle = () => setOpen(!this.state.open);
  // const [open, setOpen] = useState(false);
  // const [focusAfterClose, setFocusAfterClose] = useState(true);
  
    // const toggle = () => setOpen(!open);
  handleEmailChange = ({ target }) => {
    this.state.emailValid=target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);;
    this.setState({ email: target.value });
  };

  handlenotifyChange = ({ target }) => {
    // console.log("::"+target.value);
    this.setState({ notify: target.value });
  
  };

  handlepassChange = ({ target }) => {
    this.state.passValid = target.value.length >= 6;
    this.setState({ password: target.value });
  };
  handlenameChange = ({ target }) => {
    this.state.nameValid = target.value.length >= 3;
    this.setState({ name: target.value });
  };
  handleinstaChange = ({ target }) => {
    this.state.instaValid = target.value.length >= 3;
    this.setState({ insta: target.value });
  };

  handleSubmitsignup = () => {
    // this.button.disabled = true;
    this.setState({isSubmit:true});
    const { dispatch } = this.props;
    const { name, insta, email, password,notify } = this.state;
    // console.log(name+ insta+ email+ password+notify);
    this.state.errormsg=""
    if(!this.state.nameValid) this.state.errormsg="Name Length must be greater than 3.\n"+this.state.errormsg;
    if(!this.state.emailValid) this.state.errormsg="Enter Valid Email ID.\n"+this.state.errormsg;
    if(!this.state.instaValid) this.state.errormsg="Insta Username Length must be greater than 3.\n"+this.state.errormsg;
    if(!this.state.passValid) this.state.errormsg="Password Length must be greater than 5.\n"+this.state.errormsg;
    // console.log(this.state.errormsg);
    if(this.state.errormsg.length>0)
    {
      alert(this.state.errormsg);
      this.setState({isSubmit:false});
    }
    else
    {
      dispatch(signupUser(name,insta,email, password,notify));
      // alert('Registration closed for {Season}');
    }
    this.state.errormsg=""
  };
  
  render() {
    
     let [nameFocus, setnameFocus] = [false,false];
     let [instaFocus, setinstaFocus] = [false,false];
    let [emailFocus, setEmailFocus] = [false,false];
    let [passFocus, setpassFocus] = [false,false];
    const { classes, SignUpError, isAuthenticated } = this.props;
    // const [visible, setVisible] = this.useState(true);

  // const onDismiss = () => setVisible(false);
    if (isAuthenticated) {
      return <Redirect to="/profile" />;
    } else {
  return (
    <>
      <div
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px",
          paddingTop:"10vh"
          
        }}
      >
        <div>
      
      </div>
        <Container>
          <Row>
            <Card className="card-signup btn-round" data-background-color="blue">
              <Form action="" className="form" method="">
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h2">
                    Sign Up
                  </CardTitle>
                  <p>{Season}</p>
                  {/* <div className="social-line">
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="facebook"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="twitter"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="google"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                  </div> */}
                </CardHeader>
                <CardBody>
                  

                  <InputGroup
                    className={
                      "no-border" + (nameFocus ? " input-group-focus" : "")
                    }
                  >

                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    {this.state.nameValid?
                    <Input
                      placeholder="Full Name..."
                      type="text"
                      valid
                      onFocus={()=>{setnameFocus=true}}
                      onBlur={()=>{setnameFocus=false}}
                      onChange={this.handlenameChange}
                    ></Input>
                    :
                    <Input
                      placeholder="Full Name..."
                      type="text"
                      
                      onFocus={()=>{setnameFocus=true}}
                      onBlur={()=>{setnameFocus=false}}
                      onChange={this.handlenameChange}
                    ></Input>
                    }
                     
                  </InputGroup>

                  <InputGroup
                    className={
                      "no-border" + (instaFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons text_caps-small"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    {this.state.instaValid?
                    <Input
                      placeholder="Instagram username..."
                      type="text"
                      valid
                      onFocus={()=>{setinstaFocus=true}}
                      onBlur={()=>{setinstaFocus=false}}
                      onChange={this.handleinstaChange}
                    ></Input>
                    :
                    <Input
                      placeholder="Instagram username..."
                      type="text"
                      
                      onFocus={()=>{setinstaFocus=true}}
                      onBlur={()=>{setinstaFocus=false}}
                      onChange={this.handleinstaChange}
                    ></Input>
                    }
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border" + (emailFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    {this.state.emailValid?
                    <Input
                      placeholder="Email..."
                      type="email"
                      valid
                      onFocus={()=>{setEmailFocus=true}}
                      onBlur={()=>{setEmailFocus=false}}
                      onChange={this.handleEmailChange}
                    ></Input>
                    :
                    <Input
                      placeholder="Enter Valid Email ID"
                      type="email"
                      
                      onFocus={()=>{setEmailFocus=true}}
                      onBlur={()=>{setEmailFocus=false}}
                      onChange={this.handleEmailChange}
                    ></Input>
                    }
                    
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border" + (passFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    {
                      this.state.passValid?
                    <Input
                      placeholder="Password"
                      type="password"
                      valid
                      onFocus={()=>{setpassFocus=true}}
                      onBlur={()=>{setpassFocus=false}}
                      onChange={this.handlepassChange}
                    ></Input>
                    :
                    <Input
                      placeholder="Enter Password must be 6 or more Character"
                      type="password"
                      
                      onFocus={()=>{setpassFocus=true}}
                      onBlur={()=>{setpassFocus=false}}
                      onChange={this.handlepassChange}
                    ></Input>
                    }
                  </InputGroup>
                  <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" onChange={this.handlenotifyChange} label="Turn on for Contest Notificatios." />
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    disabled={this.state.isSubmit}
                    href="#pablo"
                    onClick={this.handleSubmitsignup}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </Row>
          <div className="col text-center">
            <Button
              className="btn-round btn-white"
              color="default"
              onClick={event =>  window.location.href="/login"}
              outline
              size="lg"
              
            >
              View Login Page
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}
}
}

function mapStateToProps(state) {
return {
isLoggingIn: state.auth.isLoggingIn,
SignUpError: state.auth.SignUpError,
isAuthenticated: state.auth.isAuthenticated
};
}

export default connect(mapStateToProps)(SignUpPage);

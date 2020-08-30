import React from "react";
import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
  } from "reactstrap";

  import Firebase from "firebase";
  import firebaseConfig from "../../views/firebase/firebase";
  
  class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        Firebase.initializeApp(firebaseConfig);
    
        this.state = {
          ContactRequests: []
        };
      }
    
      componentDidMount() {
        this.getUserData();
      }
    
      componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
          this.writeUserData();
        }
      }
    
      writeUserData = () => {
        Firebase.database()
          .ref("/RequestForm/")
          .set(this.state);
        console.log("DATA SAVED");
      };
    
      getUserData = () => {
        let ref = Firebase.database().ref("/RequestForm/");
        ref.on("value", snapshot => {
          const state = snapshot.val();
          this.setState(state);
        });
      };
    
      handleSubmit = event => {
        event.preventDefault();
        let name = this.ContactRequestsname.value;
        let email = this.ContactRequestsemail.value;
        let msg = this.ContactRequestsmsg.value;
        // let time = this.ContactRequeststime.value;
        console.log(this.ContactRequestsname.value+":"+this.ContactRequestsemail.value+":"+this.ContactRequestsmsg.value);
    
        if (name && email && msg ) {
        const time = new Date().getTime().toString();
        const { ContactRequests } = this.state;
        ContactRequests.push({ name, email, msg, time });
        this.setState({ ContactRequests });
        console.log("State"+this.state.ContactRequests)
        } 
    
        this.ContactRequestsname.value="";
        this.ContactRequestsemail.value="";
        this.ContactRequestsmsg.value="";
        // this.ContactRequeststime.value="";
      };

    
    render() {
        const { ContactRequests } = this.state;
          
        return(
        <>
            <div className="section section-contact-us text-center">
            
            <form onSubmit={this.handleSubmit}>
                <input type="hidden" ref="uid" />
                <Container>
                <h2 className="title">Want to work with us?</h2>
                <p className="description">Your project is very important to us.</p>
                <Row>
                    <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                    <InputGroup
                        // className={
                        // "input-lg" + (firstFocus ? " input-group-focus" : "")
                        // }
                    >
                        <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                        </InputGroupAddon>
                        <Input
                        ref="name"
                        placeholder="First Name..."
                        type="text"
                        innerRef={(node) => this.ContactRequestsname = node}
                        // onFocus={() => setFirstFocus(true)}
                        // onBlur={() => setFirstFocus(false)}
                        ></Input>
                    </InputGroup>
                    <InputGroup
                        // className={
                        // "input-lg" + (lastFocus ? " input-group-focus" : "")
                        // }
                    >
                        <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="now-ui-icons ui-1_email-85"></i>
                        </InputGroupText>
                        </InputGroupAddon>
                        <Input
                        ref="role"
                        placeholder="Email..."
                        type="text"
                        innerRef={(node) => this.ContactRequestsemail = node}
                        // onFocus={() => setLastFocus(true)}
                        // onBlur={() => setLastFocus(false)}
                        ></Input>
                    </InputGroup>
                    <div className="textarea-container">
                        <Input
                        cols="80"
                        name="name"
                        placeholder="Type a message..."
                        rows="4"
                        type="textarea"
                        innerRef={(node) => this.ContactRequestsmsg = node}
                        ></Input>
                    </div>
                    <div className="send-button">
                        <Button
                        type="submit" className="btn btn-primary"
                        
                        className="btn-round"
                        color="info"
                        
                        
                        size="lg"
                        >
                        Send Message
                        </Button>
                       
                    </div>
                    </Col>
                </Row>
                </Container>
                </form>
            </div>
            
        </>
        );

    }
}

export default ContactUs;
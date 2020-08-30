import React from "react";

import Firebase from "firebase";
import {firebaseConfig} from "../../firebase/firebase";
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

class DB extends React.Component {
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
    let time = this.ContactRequeststime.value;
    console.log(this.ContactRequestsname.value+":"+this.ContactRequestsemail.value+":"+this.ContactRequestsmsg.value);

    if (name && email && msg && time ) {
      const { ContactRequests } = this.state;
      const devIndex = ContactRequests.findIndex(data => {
        return data.time === time;
      });
      ContactRequests[devIndex].name = name;
      ContactRequests[devIndex].msg = msg;
      ContactRequests[devIndex].email = email;
      ContactRequests[devIndex].time = time;
      this.setState({ ContactRequests });
    
    } 
    else if (name ) {
        const time = new Date().getTime().toString();
        const { ContactRequests } = this.state;
        ContactRequests.push({ name, email, msg, time });
        this.setState({ ContactRequests });
        console.log("State"+this.state.ContactRequests)
    }

    this.ContactRequestsname.value="";
    this.ContactRequestsemail.value="";
    this.ContactRequestsmsg.value="";
    this.ContactRequeststime.value="";
  };


  removeData = developer => {
    const { ContactRequests } = this.state;
    const newState = ContactRequests.filter(data => {
      return data.name !== developer.name;
    });
    this.setState({ ContactRequests: newState });
  };

  updateData = developer => {
    this.ContactRequestsname.value = developer.name;
    this.ContactRequestsemail.value = developer.email;
    this.ContactRequestsmsg.value = developer.msg;
    this.ContactRequeststime.value = developer.time;
  };

  render() {
    const { ContactRequests } = this.state;
    return (
      <React.Fragment>
        {/* <div className="container"> */}
          {/* <div className="row">
            <div className="col-xl-12">
              <h1>Firebase Development Team</h1>
            </div>
          </div> */}
          <div className="row">
            <div className="col-xl-12">
              {ContactRequests.map(developer => (
                <div
                  key={developer.time}
                  className="card float-left"
                  style={{ width: "18rem", marginRight: "1rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{developer.name}</h5>
                    <h6 className="card-text">{developer.email}</h6>
                    <p className="card-text">{developer.msg}</p>
                    <button
                      onClick={() => this.removeData(developer)}
                      className="btn btn-link"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => this.updateData(developer)}
                      className="btn btn-link"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Container>
                <h2 className="title">Want to work with us?</h2>
                <p className="description">Your project is very important to us.</p>
                <Row>
                <form onSubmit={this.handleSubmit}>
                    <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                    <Input type="hidden" innerRef={(node) => this.ContactRequeststime = node} ref="time" />
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
                        // value={this.state.ContactRequestsname}
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
                </form>
                </Row>
                </Container>
          
        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default DB;

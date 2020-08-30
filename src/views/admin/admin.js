import React, { Component } from "react";

// import Firebase from "firebase";
import {firebaset} from "../../actions/";
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

class Admin extends React.Component {
  constructor(props) {
    super(props);
    // Firebase.initializeApp(firebaseConfig);

    this.state = {
      CertificateRequests: []
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
    firebaset.database()
      .ref("/Certificate/")
      .set(this.state);
    console.log("DATA SAVED");
  };

  getUserData = () => {
    // let ref = firebaset.database().ref("/Certificate/");
    // ref.on("value", snapshot => {
    //   const state = snapshot.val();
    //   this.setState(state);
    // });
//     var user = firebaset.auth().currentUser;
//     console.log("Uid"+user.uid);
//     var dbRef = firebaset.database().ref("/UserInfo/");
//     // console.log("["+dbRef);
//     dbRef.on("value", snapshot => {
//     const name = snapshot.val().name;
//     this.setState({name});
//   }, function (errorObject) {
//     console.log("The read failed: " + errorObject.code);
//   });

  };

  handleSubmit = event => {
    event.preventDefault();
    let name = this.CertificateRequestsname.value;
    let email = this.CertificateRequestsemail.value;
    let msg = this.CertificateRequestsmsg.value;
    let time = this.CertificateRequeststime.value;
    console.log(this.CertificateRequestsname.value+":"+this.CertificateRequestsemail.value+":"+this.CertificateRequestsmsg.value);

    if (name && email && msg && time ) {
      const { CertificateRequests } = this.state;
      const devIndex = CertificateRequests.findIndex(data => {
        return data.time === time;
      });
      CertificateRequests[devIndex].name = name;
      CertificateRequests[devIndex].msg = msg;
      CertificateRequests[devIndex].email = email;
      CertificateRequests[devIndex].time = time;
      this.setState({ CertificateRequests });
    
    } 
    else if (name ) {
        const time = new Date().getTime().toString();
        const { CertificateRequests } = this.state;
        CertificateRequests.push({ name, email, msg, time });
        this.setState({ CertificateRequests });
        console.log("State"+this.state.CertificateRequests)
    }

    this.CertificateRequestsname.value="";
    this.CertificateRequestsemail.value="";
    this.CertificateRequestsmsg.value="";
    this.CertificateRequeststime.value="";
  };


  removeData = developer => {
    const { CertificateRequests } = this.state;
    const newState = CertificateRequests.filter(data => {
      return data.name !== developer.name;
    });
    this.setState({ CertificateRequests: newState });
  };

  updateData = developer => {
    this.CertificateRequestsname.value = developer.name;
    this.CertificateRequestsemail.value = developer.email;
    this.CertificateRequestsmsg.value = developer.msg;
    this.CertificateRequeststime.value = developer.time;
  };

  render() {
    const { CertificateRequests } = this.state;
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
              {CertificateRequests.map(developer => (
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
                    <Input type="hidden" innerRef={(node) => this.CertificateRequeststime = node} ref="time" />
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
                        innerRef={(node) => this.CertificateRequestsname = node}
                        // value={this.state.CertificateRequestsname}
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
                        innerRef={(node) => this.CertificateRequestsemail = node}
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
                        innerRef={(node) => this.CertificateRequestsmsg = node}
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

export default Admin;

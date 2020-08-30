import React, { Component } from "react";

import { Modal , Button} from 'react-bootstrap';

class  Rules extends Component {
  // constructor(props) {
  //   super(props);
    state = {
      show: false,
      
    };
  // }
// function Rules() {
    // const [show, setShow] = useState(false);
  
    // handleClose = () => this,state.(false);
    // handleShow = () => setShow(true);
  
    render() {
    return (
      <>
        {/* <Button variant="primary" onClick={this.setState({ show:true})}>
          Launch static backdrop modal
        </Button>
  
        <Modal
          show={this.state.show}
          onHide={this.setState({ show:false})}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.setState({ show:false})}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal> */}
      </>
    );
    }
  }
  
   export default Rules;
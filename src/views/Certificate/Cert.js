import React from "react";
import ReactDOM from "react-dom";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Pdf from "react-to-pdf";
import "./styles.css";

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
  Col,
  Row
} from "reactstrap";

const ref = React.createRef();

const options = {
    orientation: 'landscape'
//     ,
//     unit: 'cm',
//     format: []
};


class Cert extends React.Component {
  constructor(props) {
    super(props);
   
  }
  

  

  render() {
        return (
            

            <div className="App"> 
            
            <Pdf targetRef={ref} filename="code-example.pdf" options={options} x="0" y="0">
              {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div className="cert" ref={ref}>
            <Container className="Certificate"  
            style={{
                backgroundImage: "url(" + require("assets/img/cert.png") + ")"}}
                >
                  <Row className="cert-head">
                    <Col md="8"><h2 className="cert-head-text">CERTIFICATE</h2>
                    <p className="cert-head-text1">OF PARTICIPATION</p></Col>
                    <Col md="4"> 
                      <div className="cert-logo">
                       <img src="assets/images/cert_logo.jpg" className="image-cropper" />
                    </div>
                    </Col>
                  </Row>
                  <Row className="cert-body">
                  {/* <Col md="1"></Col> */}
                    <Col md="8"><p className="cert-body-text1">THIS CERTIFICATE IS PROUDLY PRESENTED TO</p>
            <p className="cert-body-text2">Name</p>
                    <p className="cert-body-text3">IN THE RECOGNITION OF ALL HIS / HER VALUABLE PARTICIPATION <br/>TO ONLINE COMPETITION <strong style={{color:"blue", fontSize:"22px"}}>ART SAMAANATA</strong> SEASON 1</p></Col>
                    <Col md="4"></Col>
                  </Row>
                  <Row className="cert-footer">
                    <Col md="4">Issued on<br/>20 July 2020</Col>
                    <Col md="4">@_art.samaanata_<br/>https://art-samaanata.web.app</Col>
                    <Col md="4">Hosted By:</Col>

                  </Row>
                  
                  
            </Container>
            </div>
          </div>
    );
  }
}

export default Cert;

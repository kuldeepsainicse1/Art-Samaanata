import React, { Component } from "react";
import { firebaset  } from "../../actions/";
import {myFirebase} from "../../firebase/firebase";


// import UpCounter from "../../components/widgets/UpCounter"
import Rules from "../../components/Rules"

// import firebase-admin from "firebase-admin";
// import myfirebase from "../firebase/firebase";



// reactstrap components
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

// core components
import Features from "components/Features";
import Parallex from "components/Parallex";
import Testimonials from "components/Testimonials";
// import Counter from "components/Counter";
import Blog from "components/Blog";
import ContactUs from "components/ContactUs";
import Header from "components/Header";
import Welcome from "components/Welcome";
import Contests from "components/Contests"
import Footer from "components/Footer"


// const Counter = () => {
//   return (
    class Counter extends Component {
      render() {
        return(
  <section className="counter">
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="count-item decoration-bottom">
                            <strong>{this.props.count}</strong>
                            <span>Registrations</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="count-item decoration-top">
                            <strong>0</strong>
                            <span>Artwork Submissions</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="count-item decoration-bottom">
                            <strong>0</strong>
                            <span>Awards Wins</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="count-item">
                            <strong>1</strong>
                            <span>Countries</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}};

class IndexPage extends Component {
// function IndexPage() {
state={count:"0"};
  

  componentDidMount() {
    var dbRef = firebaset.database().ref("/UserInfo/");
    console.log("["+dbRef);
    dbRef.on("value", snapshot => {
    const count = snapshot.numChildren();
    console.log("The read count: " + count);
    this.setState({count});
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });


  const fsRef = firebaset.firestore();
  console.log("Testing");
  const collec=fsRef.collection("ArtSeason2").doc('UserDetails');
  
  console.log("T"+collec);
  const doc =  collec.get();
  if (!doc.exists) {
    console.log('No such document!');
  } else {
    console.log('Document data:', doc.data());
  }
  // const season=collec.collection("Season2");
  // console.log("TS"+season);
// collec.get()
// .then(querySnapshot => {
//   const data = querySnapshot.docs.map(doc => doc.data());
//   console.log("Testing");
//   console.log(data); // array of cities objects
// });

console.log('----------------');
const collection = fsRef.collection('Counters');

// const data = {
  
//   User1: [5, true, 'hello']
  
// };

// const res =  fsRef.collection('ArtSeason2').doc('UserDetails').set(data);


collection.get().then(snapshot => {

  snapshot.forEach(doc => {

    console.log( doc );    
    // console.log( doc.data().mail );

  });

});

   
  }
  
  // React.useEffect(() => {
  //   document.body.classList.add("landing-page");
  //   document.body.classList.add("sidebar-collapse");
  //   document.documentElement.classList.remove("nav-open");
  //   window.scrollTo(0, 0);
  //   document.body.scrollTop = 0;
  //   return function cleanup() {
  //     document.body.classList.remove("landing-page");
  //     document.body.classList.remove("sidebar-collapse");
  //   };
  // });
  render() {
return (
  
  <>
      <Header />
      <div className="wrapper">
        <Welcome />
        <Features />
        <Parallex />
        {/* <Testimonials /> */}
        <Contests />
        <Counter count={this.state.count}/>
        <Rules />
        {/* <Blog /> */}
        {/* <ContactUs /> */}
        <Footer />
      </div>
      </>
  );


}
}
export default IndexPage;
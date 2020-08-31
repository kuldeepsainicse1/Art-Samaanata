/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import ProtectedRoute from "./views/ProtectedRoute";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "views/main/IndexPage1.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/main/LoginPage.js";
import SignUpPage from "views/main/SignUpPage.js";
import RulesPage from "views/main/RulesPage.js";
import PrizesPage from "views/main/PrizesPage.js";

import ProfilePage from "views/main/ProfilePage.js";
import Admin from "views/admin/admin.js";
import Cert from "views/Certificate/Cert";
import SurveyComponent from "views/Survey/Survey.js";

// ReactDOM.render(

  function App(props) {
    const { isAuthenticated, isVerifying } = props;
    return (
      <Switch>

      

        <Route exact path="/index" render={props => <Index {...props} />} />
        {/* <Route
          path="/nucleo-icons"
          render={props => <NucleoIcons {...props} />}
        /> */}
        {/* <Route
          path="/admin"
          render={props => <Admin {...props} />}
        /> */}
        {/* <Route
          path="/cert"
          render={props => <Cert {...props} />}
        /> */}

        {/* <Route
          path="/survey"
          render={props => <SurveyComponent {...props} />}
        /> */}

        {/* { <ProtectedRoute
        exact
        path="/admin"
        component={Admin}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      /> } */}
        {/* <Route
          path="/landing-page"
          render={props => <LandingPage {...props} />}
        /> */}

       <ProtectedRoute
        exact
        path="/profile"
        component={ProfilePage}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      /> 
        {/* <Route
          path="/profile"
          render={props => <ProfilePage {...props} />}
        /> */}
        <Route path="/login"
               render={props => <LoginPage {...props} />} 
        />

{/* <Route path="/db"
               render={props => <DB {...props} />} 
        /> */}
        <Route path="/rules"
               render={props => <RulesPage {...props} />} 
        />
        <Route path="/prizes"
               render={props => <PrizesPage {...props} />} 
        />
        
        <Route path="/register"
               render={props => <SignUpPage {...props} />} 
        />


{/* <Route path="/test"
               render={props => <Test {...props} />} 
        /> */}
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    );
}

function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      isVerifying: state.auth.isVerifying
    };
  }

export default connect(mapStateToProps)(App);
  
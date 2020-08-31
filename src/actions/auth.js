import firebase from "firebase/app";
import { myFirebase } from "../firebase/firebase";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const DATA_SUCCESS = "DATA_SUCCESS";


export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";

const requestLogin = () => {
  return {
    type: LOGIN_REQUEST
  };
};

const requestsignup = () => {
  return {
    type: SIGNUP_REQUEST
  };
};

const receiveSignup = user => {
  return {
    type: SIGNUP_SUCCESS,
    user
  };
  
};

const SignupError = () => {
  return {
    type: SIGNUP_FAILURE
  };
};

export const receiveLogin = user => {
  return {
    type: LOGIN_SUCCESS,
    user
  };
};

const loginError = () => {
  return {
    type: LOGIN_FAILURE
  };
};

const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST
  };
};

const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};


export const receiveData = data => {
  return {
    type: DATA_SUCCESS,
    data
  };
};

const logoutError = () => {
  return {
    type: LOGOUT_FAILURE
  };
};

const verifyRequest = () => {
  return {
    type: VERIFY_REQUEST
  };
};

const verifySuccess = () => {
  return {
    type: VERIFY_SUCCESS
  };
};



export const loginUser = (email, password) => dispatch => {
  dispatch(requestLogin());
  console.log("loginUser");
  myFirebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.SESSION);
  myFirebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(receiveLogin(user));
    })
    .catch(error => {
      //Do something with the error if you want!
      console.log(error);
      dispatch(loginError());
    });
};

export const UpdateUser = (id,name, insta,email,notify)=>{

 // console.log("Fetching Info"+id+name+":"+insta+":"+email);

  if (name && insta && email ) {
  const time = new Date().getTime.toString();
  const season="Season2";
  var dbRef = myFirebase.database().ref("/UserInfo/"+id);
  dbRef.set({ name,insta,email,notify,time,season
    // Name: {name}, 
    // InstaID:{insta},
    // Email:{email},
    // Notify:{notify},
    // Time:{time}
  })
  .then(function() {
    console.log('Synchronization succeeded at'+time);
  })
  .catch(function(error) {
    console.log('Synchronization failed at'+time);
  });
  } 
  

};

export const signupUser = (name, insta,email, password,notify) => dispatch => {
  dispatch(requestsignup());
  let id="";
  myFirebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  myFirebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {
      id=myFirebase.auth().currentUser.uid
      UpdateUser(id,name,insta,email,notify);
      console.log("signupUser Successful"+name+":"+insta+":"+email+":"+notify);
      dispatch(receiveSignup(user));
    })
    .catch(error => {
      //Do something with the error if you want!
      console.log("error"+error);
      
      alert(error);
      dispatch(SignupError(error));
    });
    
    
};




export const logoutUser = () => dispatch => {
  dispatch(requestLogout());
  myFirebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(receiveLogout());
    })
    .catch(error => {
      //Do something with the error if you want!
      dispatch(logoutError());
    });
};

export const verifyAuth = () => dispatch => {
  dispatch(verifyRequest());
  myFirebase.auth().onAuthStateChanged(user => {
    if (user !== null) {
      dispatch(receiveLogin(user));
    }
    dispatch(verifySuccess());
  });
};

export const firebaset = myFirebase;
// export const userDBRef = myFirebase.database().ref("/UserInfo/");
// export const GetData = () => dispatch => {
//   var dbRef = myFirebase.database().ref("/UserInfo/");

//   dbRef.on("value", snapshot => {
//     const data = snapshot.val();
//     console.log(JSON(data).toString).
//     this.setState(data);
//   }, function (errorObject) {
//     console.log("The read failed: " + errorObject.code);
//   });
  
// };

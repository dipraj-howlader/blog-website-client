import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { SignInContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css';


if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(SignInContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/uploadblog" } };


  const handleEmail = (e) =>{
    const addEmail = {...loggedInUser}
    addEmail.email = e.target.value;
    setLoggedInUser(addEmail)
}
const handlePassword = (e) =>{
    const addPassword = {...loggedInUser};
    addPassword.password = e.target.value;
    setLoggedInUser(addPassword);
    

}
const handleLogin =(e) => {
        
  if (loggedInUser.email && loggedInUser.password) {
      firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
      .then((userCredential) => {
          
        var user = userCredential.user;
        const userLoggedIn  = {...loggedInUser}
        userLoggedIn.isSignedIn = true;
        setLoggedInUser(userLoggedIn);
        history.replace(from);
      
      })
      .catch((error) => {

        var errorMessage = error.message;
          const userError = {...loggedInUser};
          userError.isSignedIn = false;
          userError.error = errorMessage;
          setLoggedInUser(userError);

      });
      e.preventDefault();
  }
}

    return (


<div className="login-container">
            <h1>Admin Login</h1>
            <form action="" onSubmit={handleLogin}>
                <input type="text" name="email" onBlur={handleEmail} placeholder="Email" required / >
                <br />
                <input type="password" name="password" onBlur={handlePassword}  placeholder="Password" required/>
                <br />
                <button className="btn btn-success" type="submit" value="Login" > Login </button>
            </form>
            <br />
            {
              !loggedInUser.isSignedIn &&   <p style={{color:'red'}}>You have entered wrong Information</p>

    
            }
            <br />
            <br />
            <br />
            <small>Developed by <a href="https://www.linkedin.com/in/dipraj-howlader/" target="_blank"> <span style={{backgroundColor:'violet',color:'white', borderRadius:'5px',padding:'5px', textDecoration:'none'}}> Dipraj Howlader </span> </a></small>

        </div>
    );
};

export default Login;
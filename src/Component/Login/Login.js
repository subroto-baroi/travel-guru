import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [user, setUser]= useState({
        isSignedIn: false,
        email: '',
        name: '',
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => { 
                const {displayName, email } = res.user; 
                const signedInUser ={
                    isSignedIn: true,
                    name:displayName,
                    email:email,
                }   
                setUser(signedInUser);  
                setLoggedInUser(signedInUser); 
                history.replace(from);  
            console.log(displayName, email )           
          })
          .catch(err => {

          })
    }
        const handleSignOut = () => {
            firebase.auth().signOut()
            .then(res => {
                const signedOutUser ={
                    isSignedIn: false,
                    email: '',
                    name: '',
                }
                setUser(signedOutUser);

              }).catch(err => {
               
              });
        }
        const handleBlur = (event) => {

        }

        const handleSubmit = () => {

        }

    return (
        <div style={{textAlign: 'center', marginTop:'50px' }}>

            <p>Please sign in with google email and password</p>
            <form onSubmit={handleSubmit}>
            <input type="text" name="email" onBlur={handleBlur} required/>
            <br/> <br/>
            <input type="password" onBlur={handleBlur} name="password" required/>
            <br/> <br/>
            {/* <input className = "btn btn-primary" type="submit" value="submit"/> */}
            </form>

            {
                user.isSignedIn ? <button onClick={handleSignOut}>Sign out</button>:
                <button className = "btn btn-primary" onClick={handleSignIn}>Sign in</button>
            }
            
            {
                user.isSignedIn && <p>Welcome,{user.name} </p>
            }
            
        </div>
    );
};

export default Login;
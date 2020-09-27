import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Home from './Component/Home/Home';
import NoMatch from './Component/NoMatch';
import Login from './Component/Login/Login';
import Booking from './Component/Booking/Booking';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

export const UserContext= createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
    <Router>
      <Switch>
        <Route path="/home">
         <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="/booking">
          <Booking/>
        </PrivateRoute>    
        <Route path="/">
         <Home/>
        </Route>                 
        
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;

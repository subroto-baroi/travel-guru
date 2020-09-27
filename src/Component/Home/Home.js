import React from "react";
import { Form, FormControl, Nav, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FrontPage from "../FrontPage/FrontPage";

import "./Home.css"



const Home = () => {
  return (
    <div className="style">
      <Navbar bg="dark" variant="dark">
        <img src="https://ibb.co/MD6Wrt9" alt=""/>
        <Nav >
                     
        <Form inline className="ml-md-5">
            <FormControl type="text" placeholder="Search Your Destination" className="ml-md-5" />         
        </Form>
        </Nav>
            <Nav.Link className="ml-md-5" href="#features">News</Nav.Link>
            <Nav.Link className="ml-md-5" href="#pricing">Destination</Nav.Link>
            <Nav.Link className="ml-md-5" href="#features">Blog</Nav.Link>
            <Nav.Link className="ml-md-5" href="#features">Contact</Nav.Link>
            <Button className="ml-md-5  btn-warning">Login</Button>
      </Navbar>     
      <FrontPage/>
    </div>
  );
};

export default Home;

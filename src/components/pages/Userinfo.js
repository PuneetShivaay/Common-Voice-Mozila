import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

// import "bootstrap/dist/css/bootstrap.min.css";


export default class Userinfo extends Component {

  state = {
    name: "",
    empid: "",
    gender: "",
    age: "",
    location: ""
  };

  onSubmit = () => {
    console.log(this.state.name);
    console.log(this.state.empid);
    console.log(this.state.gender);
    console.log(this.state.age);
    console.log(this.state.location);


  };

  render() {
    return (
      <>
        <Form.Group className="mb-3">
          <label>Enter Your Name</label>
          <Form.Control
            // name            
            className="textFeedback"
            as="textarea"
            rows="1"
            placeholder="name"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
            type="text"
          />
          <br></br>
          <label>Enter Your Employee ID</label>
          <Form.Control
            // empid
            className="textFeedback"
            as="textarea"
            rows="1"
            placeholder="empid"
            value={this.state.empid}
            onChange={e => this.setState({ empid: e.target.value })}
            type="text"
          />
          <br></br>
          <Form.Label>Enter Your Gender</Form.Label>
          <Form.Control
            // gender
            className="textFeedback"
            as="textarea"
            rows="1"
            placeholder="gender"
            value={this.state.gender}
            onChange={e => this.setState({ gender: e.target.value })}
            type="text"
          />
          <br></br>
          <label>Enter Your Age</label>
          <Form.Control
            // age
            className="textFeedback"
            as="textarea"
            rows="1"
            placeholder="age"
            value={this.state.age}
            onChange={e => this.setState({ age: e.target.value })}
            type="text"
          />
          <br></br>
          <label>Enter Your Location</label>
          <Form.Control
            // location
            className="textFeedback"
            as="textarea"
            rows="1"
            placeholder="location"
            value={this.state.location}
            onChange={e => this.setState({ location: e.target.value })}
            type="text"
          />
          <br></br>
          <Link to={'/speak'}>
          <Button
            className="btnFormSend"
            variant="outline-success"
            onClick={this.onSubmit}
          >
            Submit Details & Proceed to Record
          </Button>
         
          </Link>
        </Form.Group>
      </>
    )
  }
}



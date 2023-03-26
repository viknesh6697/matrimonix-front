import React, { useState } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';

import '../../App.css'
import BackgroundImage from '../../assets/images/coffee_paper_bg.jpg'

function ClientRegister() {
  const [formData, setFormData] = useState({
    first_name: '',
    middle_name: '',
    last_name: '',
    gender: '',
    birth_date: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    qualification: '',
    occupation: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenderOptionChange = (event) => {
    setFormData({ ...formData, gender: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // handle form submission logic here
  };

  return (
    <header style={ HeaderStyle }>
    <div className="text-center m-5-auto">
    <Container className="d-flex justify-content-center align-items-start" style={{ minHeight: '100vh' }}>
    <Form onSubmit={handleSubmit} className="client-register-form">
      <Row>
        <Col>
          <Form.Group controlId="formText1">
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              style={InputStyle}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formText2">
            <Form.Label>Middle Name:</Form.Label>
            <Form.Control
              type="text"
              name="middle_name"
              value={formData.middle_name}
              onChange={handleInputChange}
              style={InputStyle}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formText3">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              style={InputStyle}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="formselect1">
            <Form.Label>Gender:</Form.Label>
            <Form.Control as="select" onChange={handleGenderOptionChange} style={InputStyle}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formDate1">
            <Form.Label>Birth Date:</Form.Label>
            <Form.Control
              type="date"
              name="birth_date"
              value={formData.birth_date}
              onChange={handleInputChange}
              style={InputStyle}
            />
          </Form.Group>
        </Col>
      </Row>
      
      <Row>
        <Col>
          <Form.Group controlId="formText4">
            <Form.Label>Address 1:</Form.Label>
            <Form.Control
              type="text"
              name="address1"
              value={formData.address1}
              onChange={handleInputChange}
              style={InputStyle}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formText5">
            <Form.Label>Address 2:</Form.Label>
            <Form.Control
              type="text"
              name="address2"
              value={formData.address2}
              onChange={handleInputChange}
              style={InputStyle}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formText6">
            <Form.Label>City:</Form.Label>
            <Form.Control
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              style={InputStyle}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="formText7">
            <Form.Label>State:</Form.Label>
            <Form.Control
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              style={InputStyle}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formText8">
            <Form.Label>Zip Code:</Form.Label>
            <Form.Control
              type="text"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleInputChange}
              style={InputStyle}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="formText9">
            <Form.Label>Qualification:</Form.Label>
            <Form.Control
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleInputChange}
              style={InputStyle}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formText10">
            <Form.Label>Occupation:</Form.Label>
            <Form.Control
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleInputChange}
              style={InputStyle}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="formText11">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={InputStyle}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formText12">
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              style={InputStyle}
            />
          </Form.Group>
        </Col>
      </Row>

      {/* <Form.Group controlId="formText">
        <Form.Label>Text:</Form.Label>
        <Form.Control
          type="text"
          name="text"
          value={formData.text}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="formPhone">
        <Form.Label>Phone:</Form.Label>
        <Form.Control
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </Form.Group> */}
      <Row>
        <Col></Col>
        <Col>
          <Button variant="primary" type="submit" size='lg' style={{color:'#fff', background: '#222'}}>
            Submit
          </Button>
        </Col>
        <Col></Col>
      </Row>
      
    </Form>
    </Container>
    </div>
    </header>
  );
}

// const FormStyle = {
//   width: "100%",
// }

const HeaderStyle = {
  width: "100%",
  height: "100%",
  background: `url(${BackgroundImage})`,
  backgroundPosition: "left top",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}

const InputStyle = {
  border: "2px solid #000000",
}

export default ClientRegister;


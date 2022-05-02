import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import "./Contact.css"

const Contact = () => {
  return (
    <div className="container">
        <div className="row">
        <h2 className="my-3">Contact us</h2>
      <Form>
        <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email Address" />
        </Form.Group>
        <>
          <FloatingLabel className="w-50 text-muted" controlId="floatingTextarea2" label="Your message" >
            <Form.Control
              as="textarea"
              placeholder="Your message"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </>

        <button className="contact-btn my-3" type="submit">
          Submit
        </button>
      </Form>
        </div>
    
    </div>
  );
};

export default Contact;

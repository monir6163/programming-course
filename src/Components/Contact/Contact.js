import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div className="container contact">
            <h2 className="mt-5 mb-5 text-center">Contact Us</h2>
            <div className="row">
                <div className="col-md-6 col-12 border-right">
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Full Name <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="text" placeholder="Full Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message <span className="text-danger">*</span></Form.Label>
                            <Form.Control as="textarea" rows={3} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Send
                        </Button>
                    </Form>
                </div>
                <div className="col-md-6 col-12"></div>
            </div>
        </div>
    );
};

export default Contact;
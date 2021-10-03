import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const { name, duration, certification, rate, img } = props.service;
    return (
        <div>
            <Col>
                <Card className="h-100">
                    <Card.Img variant="top" className="img-fluid p-1" src={img} />
                    <Card.Body>
                        <div className="d-flex flex-column flex-md-row justify-content-between">
                            <Card.Title>{name}</Card.Title>
                            <h6>Rating: {rate}</h6>
                        </div>
                        <Card.Text>
                            <div className="d-flex flex-column flex-md-row justify-content-between">
                                <h6>Duration: {duration}</h6>
                                <h6>Certificate: {certification}</h6>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;
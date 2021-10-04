import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
    const instagramIcon = <FontAwesomeIcon icon={faInstagram} />
    const githubIcon = <FontAwesomeIcon icon={faGithub} />
    return (
        <>
            <div className="container">
                <div className="about">
                    <h2 className="mt-5 mb-5 text-center">Exparts Trainer</h2>
                    <p className="w-50 mx-auto fs-5 fw-bold text-center">
                        You Can Learn Web Programming By Using Our Website Easily.
                    </p>
                </div>
            </div>
            <div className="container mb-5 mt-5">
                <Row xs={1} md={3} lg={4} className="gx-4 gy-5">
                    <Col>
                        <Card className="h-100">
                            <Card.Img variant="top" className="img-fluid p-1" src="https://eduma.thimpress.com/demo-1/wp-content/uploads/sites/89/2015/11/team-7-200x200.jpg" />
                            <Card.Body className="text-center">
                                <Card.Title>Belinda</Card.Title>
                                <Card.Title>JS DEVELOPER</Card.Title>
                                <Card.Text>
                                    <div className="social-icon">
                                        <a href="https://facebook.com/monirweb.wdd" target="_blank" rel="noopener noreferrer"><span>{facebookIcon}</span></a>
                                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><span>{instagramIcon}</span></a>
                                        <a href="https://github.com/netstermonir/" target="_blank" rel="noopener noreferrer"><span>{githubIcon}</span></a>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100">
                            <Card.Img variant="top" className="img-fluid p-1" src="https://eduma.thimpress.com/demo-1/wp-content/uploads/sites/89/2015/11/team-3-200x200.jpg" />
                            <Card.Body className="text-center">
                                <Card.Title>Christian</Card.Title>
                                <Card.Title>React Developer</Card.Title>
                                <Card.Text>
                                    <div className="social-icon">
                                        <a href="https://facebook.com/monirweb.wdd" target="_blank" rel="noopener noreferrer"><span>{facebookIcon}</span></a>
                                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><span>{instagramIcon}</span></a>
                                        <a href="https://github.com/netstermonir/" target="_blank" rel="noopener noreferrer"><span>{githubIcon}</span></a>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100">
                            <Card.Img variant="top" className="img-fluid p-1" src="https://eduma.thimpress.com/demo-1/wp-content/uploads/sites/89/2015/11/team-5-200x200.jpg" />
                            <Card.Body className="text-center">
                                <Card.Title>Robert</Card.Title>
                                <Card.Title>Node Js Developer</Card.Title>
                                <Card.Text>
                                    <div className="social-icon">
                                        <a href="https://facebook.com/monirweb.wdd" target="_blank" rel="noopener noreferrer"><span>{facebookIcon}</span></a>
                                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><span>{instagramIcon}</span></a>
                                        <a href="https://github.com/netstermonir/" target="_blank" rel="noopener noreferrer"><span>{githubIcon}</span></a>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100">
                            <Card.Img variant="top" className="img-fluid p-1" src="https://eduma.thimpress.com/demo-1/wp-content/uploads/sites/89/2015/11/team-8-200x200.jpg" />
                            <Card.Body className="text-center">
                                <Card.Title>Jane Nguyen</Card.Title>
                                <Card.Title>Laravel Developer</Card.Title>
                                <Card.Text>
                                    <div className="social-icon">
                                        <a href="https://facebook.com/monirweb.wdd" target="_blank" rel="noopener noreferrer"><span>{facebookIcon}</span></a>
                                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><span>{instagramIcon}</span></a>
                                        <a href="https://github.com/netstermonir/" target="_blank" rel="noopener noreferrer"><span>{githubIcon}</span></a>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default About;
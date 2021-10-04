import React from 'react';
import './Home.css';
import bannar from '../../bannar-image-2.jpg';
import { Button, Row, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBookOpen, faBookReader, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import Service from '../Service/Service';
import { Link } from 'react-router-dom';

const Home = (props) => {
    // destructuring
    const { services } = props;
    //fontawesome icon
    const bookIcon = <FontAwesomeIcon icon={faBook} />
    const bookOpen = <FontAwesomeIcon icon={faBookOpen} />
    const bookReader = <FontAwesomeIcon icon={faBookReader} />
    const student = <FontAwesomeIcon icon={faUserFriends} />
    return (
        <>
            {/* header area */}
            <section className="header-section">
                <div className="container mt-5 home">
                    <div className="row">
                        <div className="col-md-12 col-lg-5">
                            <div className="header-details mt-5">
                                <h6 className="title-text">Are you ready to Learn?</h6>
                                <h1>Learn With fun on <br /> <span>any Programming</span></h1>
                                <p>You can Learn Web Programming By Using Our Website Easily.So , Choose a Course You Like & Enroll as Soon as Possible.</p>
                                <Link to="/services">
                                    <Button variant="primary" className="get-btn">Get Started Now</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col mt-2 w-50 ms-auto">
                            <div className="header-banner">
                                <img src={bannar} className="img-fluid" alt="{banner}" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* card section */}
            <section className="cards-section mt-5 mb-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3 col-sm-6">
                            <div className="cards-inner">
                                <span className="fs-1">{bookIcon}</span>
                                <h5>1500+ Topic</h5>
                                <p>Learn Anythings</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-sm-6">
                            <div className="cards-inner">
                                <span className="fs-1">{bookOpen}</span>
                                <h5>1200+ Lessons</h5>
                                <p>Learn Anythings</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-sm-6">
                            <div className="cards-inner">
                                <span className="fs-1">{bookReader}</span>
                                <h5>9K+ Test Token</h5>
                                <p>Learn Anythings</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-sm-6">
                            <div className="cards-inner">
                                <span className="fs-1">{student}</span>
                                <h5>2000+ Student</h5>
                                <p>Learn Anythings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* our services  4 data showing */}
            <section className="our-service mt-5 mb-5">
                <div className="container">
                    <h2 className="text-center title-text">Our Services</h2>
                    <Row xs={1} md={3} lg={4} className="gx-4 gy-5">
                        {services.length === 0 ? <div className="mx-auto">
                            <Spinner animation="border" variant="secondary" />
                        </div> :
                            services.slice(0, 4).map(service => <Service key={service.id} service={service}></Service>)
                        }
                    </Row>
                    <div className="w-50 mx-auto text-center mt-5">
                        <Link to="/services" className="text-center">
                            <Button variant="primary" className="get-btn">See All Services</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
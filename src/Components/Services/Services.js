import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = (props) => {
    const { services } = props;
    return (
        <div className="container mt-5 mb-5">
            <h2 className="mb-5 text-center border p-3">Our <span className="text-muted">Services</span></h2>
            <Row xs={1} md={3} lg={4} className="gx-4 gy-5">
                {services.length === 0 ? <div className="mx-auto">
                    <Spinner animation="border" variant="secondary" />
                </div> :
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;
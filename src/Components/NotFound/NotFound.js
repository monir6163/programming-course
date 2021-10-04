import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from '../../404.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="container mt-5 mb-5 notfound">
            <h2 className="text-center"><span className="wrong">Something Went Wrong,</span><span className="page">Sorry Page Not Found</span></h2>
            <div className="text-center">
                <img className="img-not img-fluid" src={notfound} alt={notfound} />
            </div>
            <div className="w-50 mx-auto text-center mt-5">
                <Link to="/" className="text-center">
                    <Button variant="primary" className="get-btn">Go Back</Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
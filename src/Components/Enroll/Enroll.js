import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import enroll from '../../enroll.png';
import './Enroll.css';
const Enroll = () => {
    return (
        <div className="container mt-5 mb-5 enroll">
            <h2 className="text-center"><span className="wrong">Something Went Wrong,</span><span className="page">Sorry Enroll Not Open This Time</span></h2>
            <div className="text-center">
                <img className="img-not img-fluid" src={enroll} alt={enroll} />
            </div>
            <div className="w-50 mx-auto text-center mt-5">
                <Link to="/" className="text-center">
                    <Button variant="primary" className="get-btn">Go Back Home</Button>
                </Link>
            </div>
        </div>
    );
};

export default Enroll;
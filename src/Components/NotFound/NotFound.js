import React from 'react';
import notfound from '../../404.png';

const NotFound = () => {
    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center text-danger">Sorry No Result Fount In This Time</h2>
            <div>
                <img className="w-100 mx-auto" src={notfound} alt={notfound} />
            </div>
        </div>
    );
};

export default NotFound;
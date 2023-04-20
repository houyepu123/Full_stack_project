import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
      <div className="container">
        <h1>Welcome to My Landing Page</h1>
        <p>Choose one of the following options:</p>
        <div className="row">
          <div className="col-sm-6">
            <Link to='/Consumer'>Consumer</Link>
          </div>
          <div className="col-sm-6">
            <Link to='/JobPosting'>JobPosting</Link>
          </div>
        </div>
      </div>
    );
}

export default LandingPage;
  
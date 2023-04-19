import React from 'react';

function LandingPage() {
    return (
      <div className="container">
        <h1>Welcome to My Landing Page</h1>
        <p>Choose one of the following options:</p>
        <div className="row">
          <div className="col-sm-6">
            <button className="btn btn-primary" onClick={() => this.props.history.push('/Consumer')}>
              Go to Component 1
            </button>
          </div>
          <div className="col-sm-6">
            <button className="btn btn-primary" onClick={() => this.props.history.push('/JobPositing')}>
              Go to Component 2
            </button>
          </div>
        </div>
      </div>
    );
}

export default LandingPage;
  
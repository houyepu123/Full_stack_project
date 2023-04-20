import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal/Modal';
function JobPosting() {
  const [jobs, setJobs] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedClothingType, setSelectedClothingType] = useState(null);

  useEffect(() => {
    // Fetch job data from API and update state variable
    fetch('https://example.com/api/jobs')
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.error(error));
  }, []);

  const filteredJobs = jobs.filter(job => {
    // Filter job list based on selected location and clothing type
    if (selectedLocation && job.location !== selectedLocation) {
      return false;
    }
    if (selectedClothingType && !job.clothingTypes.includes(selectedClothingType)) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <h1>All Jobs</h1>
      <div>
        <label>Location:</label>
        <select value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)}>
          <option value="">All Locations</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
          // Add more options as needed
        </select>
      </div>
      <div>
        <label>Clothing Type:</label>
        <select value={selectedClothingType} onChange={e => setSelectedClothingType(e.target.value)}>
          <option value="">All Clothing Types</option>
          <option value="Shirts">Shirts</option>
          <option value="Pants">Pants</option>
          <option value="Dresses">Dresses</option>
          // Add more options as needed
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Type of Making</th>
            <th>Status</th>
            <th>Location</th>
            <th>Clothing Types</th>
            <th>Count of Quotations</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredJobs.map(job => (
            <tr key={job.id}>
              <td>{job.typeOfMaking}</td>
              <td>{job.status}</td>
              <td>{job.location}</td>
              <td>{job.clothingTypes.join(', ')}</td>
              <td>{job.countOfQuotations}</td>
              <td><Link to={`/jobs/${job.id}/quote`}>Send Quote</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1, Column 1 <Modal/></td> 
            <td>Row 1, Column 2 <Modal/></td>
            <td>Row 1, Column 3 <Modal/></td>
          </tr>
          <tr>
            <td>Row 2, Column 1 <Modal/></td>
            <td>Row 2, Column 2 <Modal/></td>
            <td>Row 2, Column 3 <Modal/></td>
          </tr>
          <tr>
            <td>Row 3, Column 1 <Modal/></td>
            <td>Row 3, Column 2 <Modal/></td>
            <td>Row 3, Column 3 <Modal/></td>
          </tr>
        </tbody>
      </table>

    </div>
  );

}

export default JobPosting;
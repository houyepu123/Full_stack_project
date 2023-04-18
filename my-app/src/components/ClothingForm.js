import React, { useState } from 'react';

function ClothingForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [postcode, setPostcode] = useState('');
  const [state, setState] = useState('');
  const [clothingType, setClothingType] = useState('');
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Clothing Form</h1>
      <main class= "clothing-form-container">
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <label>
          Phone Number:
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <label>
          Postcode:
          <input type="text" value={postcode} onChange={(e) => setPostcode(e.target.value)} />
        </label>
        <label>
          State:
          <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
        </label>
        <label>
          Clothing Type:
          <select value={clothingType} onChange={(e) => setClothingType(e.target.value)}>
            <option value="">Select Type</option>
            <option value="Dress">Dress</option>
            <option value="Ethnic Wear - Sari / Blouse">Ethnic Wear - Sari / Blouse</option>
          </select>
        </label>
        <label>
          Images:
          <input type="file" multiple onChange={(e) => setImages(Array.from(e.target.files))} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Budget:
          <input type="text" value={budget} onChange={(e) => setBudget(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </main>
    </form>
  );
}


export default ClothingForm;
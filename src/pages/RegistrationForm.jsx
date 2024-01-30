// RegistrationForm.js
import { useState } from 'react';
import UserTable from './UserTable';
const RegistrationForm = ( ) => {
  const [formData, setFormData] = useState({ username: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
   
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //onFormSubmit(formData);
    setFormData({ username: '', email: '' });
    // console.log(formData)
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <button type="submit">Register</button>
    </form>
    <UserTable formData={formData}/>
    </>
  );
};

export default RegistrationForm;

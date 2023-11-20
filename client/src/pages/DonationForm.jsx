
import React, { useState } from 'react';
import axios from 'axios';

function DonationForm() {
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use Axios to send the form data to the server
      const response = await axios.post('/api/donations', {
        address,
        description,
        dueDate,
      });

      // Handle the response as needed (e.g., show a success message)
      console.log('Form submitted successfully:', response.data);

      // Optionally, you can reset the form fields
      setAddress('');
      setDescription('');
      setDueDate('');
    } catch (error) {
      // Handle any errors that occurred during the API call
      console.error('Error submitting form:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
        Address
      </label>
      <input
        type="text"
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="mt-1 p-2 border rounded-md w-full"
        required
      />

      <label htmlFor="description" className="block mt-4 text-sm font-medium text-gray-700">
        Description
      </label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mt-1 p-2 border rounded-md w-full"
        rows="4"
        required
      ></textarea>

      <label htmlFor="dueDate" className="block mt-4 text-sm font-medium text-gray-700">
        Due Date
      </label>
      <input
        type="date"
        id="dueDate"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="mt-1 p-2 border rounded-md w-full"
        required
      />

      <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full">
        Submit
      </button>
    </form>
  );
}

export default DonationForm;

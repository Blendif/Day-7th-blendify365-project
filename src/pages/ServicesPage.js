import React, { useState } from 'react';

function ServicesPage() {
  const [serviceType, setServiceType] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate API call to submit freelance service request
    setMessage("Service request submitted successfully!");
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">Freelance Services</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-lg font-bold">Service Type</label>
          <input
            type="text"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-bold">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-bold">Deadline</label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit Request</button>
      </form>

      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}

export default ServicesPage;
    

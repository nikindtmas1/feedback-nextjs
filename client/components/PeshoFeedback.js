import React, {useState} from "react";

import { fetchPeshoDataToAPI } from "../utils/api";


export function PeshoFeedback() {
  const [formData, setFormData] = useState({
    key: '', // Initialize form fields here
  });
  const [response, setResponse] = useState(null);

  const handleInputChange = (e) => {
    // Update form data as the user types
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call fetchDataToAPI function to send a POST request with form data
      const apiResponse = await fetchPeshoDataToAPI(formData);

      // Set the API response in the component state
      setResponse(apiResponse);

    } catch (error) {
      // Handle errors if the API request fails
      console.error('Error sending data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Key:
          <input
            type="text"
            name="key"
            value={formData.key}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {response && <div>API Response: {response.message}</div>}
    </div>
  );
}



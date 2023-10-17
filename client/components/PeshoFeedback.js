import React, {useState} from "react";
import { fetchPeshoDataToAPI } from "../utils/api";
import styles from "../src/styles/Home.module.css";


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
        <div className={styles.newfeedback}>
        <h3>Added Feedback</h3>
          <input
            type="text"
            name="text"
            value={formData.key}
            onChange={handleInputChange}
          />
        <button type="submit">Submit</button>
        </div>
      </form>
      {response && <div>API Response: {response.message}</div>}
    </div>
  );
}



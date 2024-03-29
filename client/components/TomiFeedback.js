import React, {useState} from "react";
import { fetchTomiDataToAPI } from "../utils/api";
import * as services from "../utils/api";
import styles from "../src/styles/Home.module.css";

export function TomiFeedback() {
    const [formData, setFormData] = useState({
        rating: 10,
        peopleName: "Tomi",
        key: "",
        value: "",// Initialize form fields here
    });

    const [response, setResponse] = useState(null);
    
    const handleInputChange = (e) => {
        e.preventDefault();
        // Update formData as the user types
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
    });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Call fetchDataToAPI function to send a POST request with form data
            const apiResponse = await services.fetchTomiDataToAPI(formData);

            // Set the API response in the component state
            setResponse(apiResponse);
        } catch (error) {
            // Handle errors if the API request fails
            console.error("Error sending data:", error);
            throw error; // Rethrow the error to be handled elsewhere, if necessary
        }
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className={styles.newfeedback}>
                    <h3>Added Feedback</h3>
                    <div className={styles.semi}>
                        <input 
                        type="text"
                        name="text"
                        placeholder="Write a review"
                        value={formData.key}
                        onChange={handleInputChange}
                        />
                        <input 
                        type="text"
                        name="userName"
                        placeholder="Your Name"
                        value={formData.value}
                        onChange={handleInputChange}
                        />
                        <button 
                        type="submit">Submit</button>
                    </div>
                </div>
            </form>
            {response && <div>API Response: {response.message}</div>}
        </div>
    );
};
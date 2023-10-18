import React, {useState} from "react";
import { fetchTomiDataToAPI } from "../utils/api";
import styles from "../src/styles/Home.module.css";

export function TomiFeedback() {
    const [formData, setFormData] = useState({
        rating: 10,
        peopleName: "Tomi",
        key: "",
        value: "",// Initialize form fields here
    });
    
    const handleInputChange = (e) => {
        // Update formData as the user types
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
    });
    };

    return(
        <div>
            <form>
                <div className={styles.newfeedback}>
                    <h3>Added Feedback</h3>
                    <div className={styles.semi}>
                        <input 
                        type="text"
                        name="text"
                        placeholder="Write a review"
                        onChange={handleInputChange}
                        />
                        <input 
                        type="text"
                        name="userName"
                        placeholder="Your Name"
                        onChange={handleInputChange}
                        />
                        <button 
                        type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};
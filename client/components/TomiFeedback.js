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
                        />
                        <input 
                        type="text"
                        name="userName"
                        placeholder="Your Name"
                        />
                        <button 
                        type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};
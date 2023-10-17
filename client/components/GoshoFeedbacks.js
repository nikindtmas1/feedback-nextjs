import {React, useState} from "react";
import { createGoshoFeedback } from "../services/goshoData";
import styles from "../src/styles/Home.module.css";

export function GoshoFeedbacks() {
    const [text, setText] = useState("");
    const [userName, setUserName] = useState("");
    const [peopleName, setPeopleName] = useState("Gosho");
    const [rating, setRating] = useState(10);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.currentTarget);
            const text = formData.get('text').trim();
            const userName = formData.get('userName').trim();
            const newFeedback = {
            text,
            rating,
            peopleName,
            userName,
        };
            // Call fetchDataToAPI function to send a POST request with form data
            await createGoshoFeedback(newFeedback);

        } catch (error) {
            // Handle errors if the API request fails
            console.error('Error sending data:', error);
        }
        
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleUserChange = (e) => {
        setUserName(e.target.value);
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
                        value={text}
                        onChange={handleTextChange}
                        ></input>
                        <input
                        type="text"
                        name="userName"
                        placeholder="Your Name"
                        value={userName}
                        onChange={handleUserChange}
                        ></input>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
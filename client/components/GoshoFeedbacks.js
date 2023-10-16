import {React, useState} from "react";
import { createGoshoFeedback } from "../services/goshoData";
import styles from "../src/styles/Home.module.css";

export function GoshoFeedbacks() {
    const [text, setText] = useState("");
    const [userName, setUserName] = useState("");
    const [peopleName, setPeopleName] = useState("Gosho");
    const [rating, setRating] = useState(10);

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
                        value={text}
                        ></input>
                        <input
                        type="text"
                        name="userName"
                        placeholder="Your Name"
                        value={userName}
                        ></input>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
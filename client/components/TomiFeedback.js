import React, {useState} from "react";
import { fetchTomiDataToAPI } from "../utils/api";
import styles from "../src/styles/Home.module.css";

export function TomiFeedback() {
    
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
                    </div>
                </div>
            </form>
        </div>
    );
};
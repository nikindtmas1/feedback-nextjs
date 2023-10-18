import React, {useState} from "react";
import { fetchTomiDataToAPI } from "../utils/api";
import styles from "../src/styles/Home.module.css";

export function TomiFeedback() {
    
    return(
        <div>
            <form>
                <div >
                    <h2>Added Feedback</h2>
                </div>
            </form>
        </div>
    );
};
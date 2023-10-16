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
                <div>
                    <h3>Added Feedback</h3>
                </div>
            </form>
        </div>
    );
}
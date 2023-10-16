import {React, useState} from "react";
import { createGoshoFeedback } from "../services/goshoData";


export function GoshoFeedbacks() {
    const [text, setText] = useState("");
    const [userName, setUserName] = useState("");
    const [peopleName, setPeopleName] = useState("Gosho");
    const [rating, setRating] = useState(10);

    return(
        <div>

        </div>
    );
}
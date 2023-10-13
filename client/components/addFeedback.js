import { React, useState, useEffect } from "react";
import { createToshoFeedback } from "../services/toshoData";

export function AddFeedback(params) {

    const [text, setText] = useState("");
    const [userName, setUserName] = useState("");
    const [peopleName, setPeopleName] = useState("Tosho");
    const [rating, setRating] = useState(10);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDate = new FormData(e.currentTarget);
        const text = formDate.get("text").trim();
        const userName = formDate.get("userName").trim();
        const newFeedback = {
            text,
            rating,
            peopleName,
            userName,
        };

        createToshoFeedback(newFeedback);
        console.log(newFeedback);
      };

      const handleTextChange = (e) => {
        setText(e.target.value);
      };
    
      const handleUserChange = (e) => {
        setUserName(e.target.value);
      };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Added Feedback</label>
        <input 
        type="text" 
        name="text"
        placeholder="Write a review"
        value={text}
        onChange={handleTextChange}></input>
     
        <input 
        type="text" 
        name="userName" 
        placeholder="Write Your Name Pleas !"
        value={userName} 
        onChange={handleUserChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
} 

    


import { React, useState, useEffect } from "react";


export function AddFeedback(params) {

    const [newfeedback, setnewfeedback] = useState("");
    const handleinput = (e) => {
        setnewfeedback(e.target.value);
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formDate = new FormData(e.currentTarget)
        console.log(newfeedback);
      };

  return (
    <div>
      <form>
        <label>Added Feedback</label>
        <input 
        type="text" 
        name="text"
        placeholder="Write a review"
        value={newfeedback} 
        onChange={hendleTextChange}></input>
     
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

    


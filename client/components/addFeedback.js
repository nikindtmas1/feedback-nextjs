import { React, useState, useEffect } from "react";


export function AddFeedback(params) {

    const [newfeedback, setnewfeedback] = useState("");

    const HandleSubmit = (e) => {
        console.log(newfeedback);
      };

  return (
    <div>
      <form>
        <label>Added Feedback</label>
        <input name="text" placeholder="Feedback"></input>
        <input name="rating" placeholder="Rating"></input>
        <input name="userName" placeholder="Your Name"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
} 

    


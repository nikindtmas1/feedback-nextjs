import { React, useState, useEffect } from "react";


export function AddFeedback(params) {

    const [newfeedback, setnewfeedback] = useState("");
    const handleinput = (e) => {
        setnewfeedback(e.target.value);
      };
    const HandleSubmit = (e) => {
        console.log(newfeedback);
      };

  return (
    <div>
      <form>
        <label>Added Feedback</label>
        <input type="text" value={newfeedback} onChange={(e) => handleinput(e)}></input>
        <input name="rating" placeholder="Rating"></input>
        <input name="userName" placeholder="Your Name"></input>
        <button onClick={() => HandleSubmit()}>Submit</button>
      </form>
    </div>
  );
} 

    


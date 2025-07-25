import React, { useState } from "react";

function TextForm(props) {
  const handleClick = () => {
    console.log("kik");
    let newText = text.toUpperCase();
    setText (newText);
  };
  const handleonChange = (event) => {
    console.log("kiked");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter your Text");
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handleonChange}
          id="myBox"
          rows="10"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleClick}>
        Connvert to Uppercase{" "}
      </button>
    </div>
  );
}

export default TextForm;

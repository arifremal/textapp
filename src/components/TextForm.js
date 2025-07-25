import React, { useState } from "react";

function TextForm(props) {
  const handleClick = () => {
    
    let newText = text.toUpperCase();
    setText (newText);
  };
  const handleClicklower = () => {
    
    let newText = text.toLowerCase();
    setText (newText);
  };
  const handleonChange = (event) => {
  
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter your Text");
  return (
   <>
   
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
      <button className="btn btn-primary mx-2" onClick={handleClick}>
        Connvert to Uppercase{" "}
      </button>
      <button className="btn btn-danger mx-2" onClick={handleClicklower}>
        Connvert to Lowercase{" "}
      </button>
    </div>
    <div className="container my-3">
        <h1>Your Text summery</h1>
        <p>{text.split(" ").length} Words and  <span className="primary">{text.length}</span> Charcaters</p>
        <p>{0.008 * text.split(" ").length}  Minutes reading time </p>
        <h2>preview </h2>
        <p>{text}</p>
    </div>
   </>
  );
}

export default TextForm;

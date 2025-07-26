import React, { useState } from "react";

function TextForm(props) {
  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
     props.showAlert("Converted to uppercase","success")
  };
  const handleClicklower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success")
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied","success")
  };
  const handleclear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared","success")
  };
  const handleonChange = (event) => {
    setText(event.target.value);
   
  };

  const [text, setText] = useState("Enter your Text");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            id="myBox"
            rows="10"
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',color:props.mode === 'dark' ? 'white' : '#042743'
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleClick}>
          Connvert to Uppercase{" "}
        </button>
        <button className="btn btn-danger mx-2" onClick={handleClicklower}>
          Connvert to Lowercase{" "}
        </button>
        <button className="btn btn-danger mx-2" onClick={handleclear}>
          Clear text{" "}
        </button>
        <button className="btn btn-danger mx-2" onClick={handleCopy}>
          Copy text{" "}
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your Text summery</h1>
        <p>
          {text.split(" ").length} Words and{" "}
          <span className="primary">{text.length}</span> Charcaters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes reading time </p>
        <h2>preview </h2>
        <p>{text.length>0?text:"enter something to preview it here"}</p>
      </div>
    </>
  );
}

export default TextForm;

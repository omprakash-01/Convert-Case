import React, { useState } from "react";

function Textarea(props) {
  let [text, setText] = useState("");

  let handlelowercase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  let handleUPPERCASE = () => {
    setText(text.toUpperCase());
  };

  function capitalizeFirstLetter(sentence) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  }

  let handleCapitilazedCase = () => {
    let newtext = capitalizeFirstLetter(text);
    setText(newtext);
  };

  let handleClearText = () => {
    setText("");
  };

  let handleonChange = (e) => {
    let newtext = e.target.value;
    setText(newtext);
  };

  return (
    <>
      <div>
        <div className="btn bg-light-subtle">
          <div className="mt-5">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label mb-4 fs-3"
            >
              {props.Title}
            </label>
            <textarea
              className="form-control bg-dark text-white"
              id="exampleFormControlTextarea1"
              rows="8"
              onChange={handleonChange}
              value={text}
            ></textarea>
          </div>
        </div>
        <div className="mt-5 ">
          <button
            className="btn fs-5 mx-3 bg-secondary text-white p-2 fw-bold custom-btn"
            onClick={handlelowercase}
          >
            lower case
          </button>
          <button
            className="btn fs-5 mx-3 bg-secondary text-white p-2 fw-bold custom-btn"
            onClick={handleUPPERCASE}
          >
            UPPER CASE
          </button>
          <button
            className="btn mx-3 fs-5 bg-secondary text-white p-2 fw-bold custom-btn"
            onClick={handleCapitilazedCase}
          >
            Capitalized Case
          </button>
          <button
            className="btn mx-3 fs-5 bg-secondary text-white p-2 fw-bold custom-btn"
            onClick={handleClearText}
          >
            Clear Text
          </button>
        </div>
        <div className="mt-5">
          <p className="fw-bold">
            <span>Character Count: {text.length} | </span>{" "}
            <span>Word Count:{text.split("").length } | </span>
            <span>Line Count: {text.split("\n").length-1}</span>
          </p>
        </div>
        <h3 className="fw-bold text-danger ">Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

export default Textarea;

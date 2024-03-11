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
  // Copy Text
  let handleCopyText=()=>{
    let text=document.getElementById('exampleFormControlTextarea1');
    text.select();
    text.setSelectionRange(0,999);
    navigator.clipboard.writeText(text.value);
  }
  // Equal Space
  let handleEqualSpaceText=()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
  }

  return (
    <>
      <div className="container text-center" style={{color:props.mode === 'dark' ? 'white':'black' }}>
        <div className="">
          <div className="mt-5">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label mb-4 fs-3"
            >
              {props.Title}
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="8" 
              onChange={handleonChange}
              style={{backgroundColor:props.mode === 'dark' ? 'grey':'#eeeeee',color:props.mode==='dark'?'white':'black'  }}
              value={text}
            ></textarea>
          </div>
        </div>
        <div className="mt-5 ">
          <button
            className="btn fs-5 mx-3 bg-primary text-white p-1"
            onClick={handlelowercase}
          >
            lower case
          </button>
          <button
            className="btn fs-5 mx-3 bg-primary text-white p-1"
            onClick={handleUPPERCASE}
          >
            UPPER CASE
          </button>
          <button
            className="btn mx-3 fs-5 bg-primary text-white p-1"
            onClick={handleCapitilazedCase}
          >
            Capitalized Case
          </button>
          <button
            className="btn mx-3 fs-5 bg-primary text-white p-1"
            onClick={handleClearText}
          >
            Clear Text
          </button>
          <button
            className="btn mx-3 fs-5 bg-primary text-white p-1"
            onClick={handleCopyText}
          >
            Copy Text
          </button>
          <button
            className="btn mx-3 fs-5 bg-primary text-white p-1"
            onClick={handleEqualSpaceText}
          >
            Equal Space
          </button>
        </div>
        <div className="mt-5">
          <p className="fw-bold">
            <span>Character Count: {text.length} | </span>{" "}
            <span>Word Count:{text.split(" ").length-1} | </span>
            <span>Line Count: {text.split("\n").length-1}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Textarea;

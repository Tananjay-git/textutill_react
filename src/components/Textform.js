import React, { useState } from 'react';


export default function Textform(props) {
  const upCase = ()=>{
    // console.log("Upper Care was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }
  const loCase = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  // const boldCase = ()=>{
  //   let newtext = text.bold();
  //   setText(newtext);
  // }
  const handleOnChange = (event)=>{
    // console.log("On Changed");
    setText(event.target.value);
  }
  const [text , setText] = useState('Enter text here');
  return (
    <>
      <div className="container">
          <h1 style={{color : props.formText}}>{props.heading}</h1>
          <div className="mb-3">
              {/* <label for="myBox" className="form-label">{props.heading}</label> */}
              <textarea className="form-control" id="myBox" style={{backgroundColor : props.form, color : props.formText}} value = {text} onChange={handleOnChange} rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-2 my-2" onClick={upCase}>Convert to UpperCase</button>
          <button className="btn btn-primary mx-2 my-2" onClick={loCase}>Convert to LowerCase</button>
          {/* <button className="btn btn-primary mx-3" onClick={boldCase}>Convert to Bold Text </button> */}
      </div>
      <div className="container my-2"  style={{color : props.formText}} >
        <h2 >Your Text Summary </h2>
        <p >{text.split(" ").length} words and {text.length} Characters</p>
        <h3 >Preview </h3>
        <p >{text}</p>
      </div>
    </>
  )
}
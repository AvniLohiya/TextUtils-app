import React,{useState} from "react";


export default function Textform(props){

    const handleUpBtnClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }

    const handleLowBtnClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }

    const handleTextChange=(event)=>{
        setText(event.target.value);
    }

    const handleCapitalBtnClick=()=>{
        var arr = text.split(' ');
        var newText="";
        for(let val of arr){
            newText+=val.charAt(0).toUpperCase()+val.substring(1)+" ";
        }
        props.showAlert("Converted to Capitalized Form","success");

        setText(newText);
    }

    const handleClearBtnClick=()=>{
        let newText="";
        setText(newText);
        props.showAlert("Text Cleared","success");
    }

    const [text,setText]=useState("Enter your text here");
    return(
        <>
        <div className="mb-3 my-3">
            <h1  style={{color : props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
            <textarea className="form-control" style={{backgroundColor : props.mode==='dark'?'#bcbec1':'white',color : props.mode==='dark'?'white':'black'}} value={text} onChange={handleTextChange} id="text" rows="8"></textarea>
        </div>
        <button type="button" onClick={handleUpBtnClick} className="btn btn-primary mx-2">Convert to UpperCase</button>
        <button type="button" onClick={handleLowBtnClick} className="btn btn-primary mx-2">Convert to LowerCase</button>
        <button type="button" onClick={handleCapitalBtnClick} className="btn btn-primary mx-2">Capitalized Case</button>
        <button type="button" onClick={handleClearBtnClick} className="btn btn-primary mx-2">Clear</button>



        <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
            <h1>Text Summary</h1>
            <p>{text.split(' ').filter(word=>word!=='').length} Words and {text.length} characters</p>
        </div>
        </>
    );
}
import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!", "success");
}
const handleLowClick = () => {
  let newText = Text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to Lower Case!", "success");
  props.showAlert("Text Cleared", "success");
}

const handleClearClick = () => {
  setText('');
}
const handleOnChange = (event) => {
  setText(event.target.value);
}

const [Text, setText] = useState('');
  return (
    <div>
      
<div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
<h1>{props.heading}</h1>
  <textarea className="form-control" value={Text} onChange={handleOnChange}  style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="mybox" rows="8"></textarea>
</div >
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
<div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
<h2>Text Summary</h2>
<p> {Text.trim().split(/\s+/).filter(word => word.length !== 0).length} Words and {Text.length} Characters</p>
<p>
                    {0.008 * Text.trim().split(/\s+/).filter(word => word.length !== 0).length} Minute Read
                </p>
                <h2>Preview</h2>
                <p>{Text.length > 0 ? Text : "Enter Something To Preview"}</p>
</div>
    </div>
  )
}

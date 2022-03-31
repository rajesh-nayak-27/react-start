import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, settext] = useState('');

    const txtupper = () => {
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showAlert("converted to uppercase", "success");
    }
    const txtlower = () => {
        let newtext = text.toLowerCase();
        settext(newtext);
        props.showAlert("converted to lowercase", "success");
    }
    const txtclear = () => {
        settext('');
        props.showAlert("text cleared", "success");
    }
    const txtcopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("copied to clipboard", "success");
    }

    const onChange = (event) => {
        settext(event.target.value);
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#13466e', color: props.mode === 'light' ? 'black' : 'white' }} onChange={onChange} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button type="button"  onClick={txtupper} className="btn btn-primary mx-1 my-1">Text Uppercase</button>
                <button type="button" onClick={txtlower} className="btn btn-primary mx-1 my-1">Text Lowercase</button>
                <button type="button" onClick={txtclear} className="btn btn-primary mx-1 my-1">Clear Text</button>
                <button type="button" onClick={txtcopy} className="btn btn-primary mx-1 my-1">Copy Text</button>
            </div>
            <div className='container mt-3 mb-5' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h3>Your text summary</h3>
                <p>{text.split(/\s/).filter((element) => { return element.length !== 0 }).length} words and {text.length}characters</p>
                <h4 style={{ marginTop: '8px' }}>Preview Text</h4>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes to read</p>
                <p className='my-2'>{text}</p>
            </div>
        </>
    )
}
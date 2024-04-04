import React, { useState } from 'react';
import './InputComponent.css';


const InputComponent = ({onTextChange}) => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
        const newText = e.target.value;
        setInputText(newText);
        onTextChange(newText);
    };


    return ( 
    <div className='input-text'>
        <input type="text" 
        value={inputText}
        onChange={handleInputChange}
        placeholder='Text'
        />
    </div> );
}
 
export default InputComponent;
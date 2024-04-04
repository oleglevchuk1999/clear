import React from 'react';
import './OutputComponent.css'
const OutputComponent = ({text}) => {
    return ( 
        <div className='output-text'>
            <p>Input text : {text}</p>
        </div>
     );
}
 
export default OutputComponent;
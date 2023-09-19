import React, { useState, useEffect } from 'react';
import MyButton from '../UI/MyButton/MyButton';

const MyCount = () => {
    const [number, setNumber] = useState([2]);
    const [clickCount, setClickCount] = useState(0); 
    const numberadd = 2;

    const handleAddNumber = () => {
        setNumber([...number, numberadd]);
        setClickCount(clickCount + 1); 
    };

    const handleRemoveLastNumber = () => {
        const lastIndex = number.lastIndexOf(numberadd);
        if (lastIndex !== -1) {
            const updatedNumber = [...number];
            updatedNumber.splice(lastIndex, 1);
            setNumber(updatedNumber);
            setClickCount(clickCount + 1); 
        }
    };

    useEffect(() => {
    
    }, [number, clickCount]); 

    return (
        <div className='my-count'>
            <p>Numbers: {number.join(', ')} </p>
            <p>Click count useEffect: {clickCount}</p>
            <MyButton  onClick={handleAddNumber}>
                Add {numberadd}
            </MyButton>
            <MyButton  onClick={handleRemoveLastNumber}>
                Remove Last {numberadd}
            </MyButton>
        </div>
    );
}

export default MyCount;

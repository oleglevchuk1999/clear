import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';

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
        <div>
            <p>Numbers: {number.join(', ')} </p>
            <p>Click count useEffect: {clickCount}</p>
            <Button variant="contained" color="secondary" onClick={handleAddNumber}>
                Add {numberadd}
            </Button>
            <Button variant="contained" color="secondary" onClick={handleRemoveLastNumber}>
                Remove Last {numberadd}
            </Button>
        </div>
    );
}

export default MyCount;

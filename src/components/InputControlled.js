import React, { useState } from 'react';
import './InputControlled.css';

function InputControlled() {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <>
            <input type='text' value={value} onChange={handleChange} placeholder='Digite algo...' />
            <p>Você é: {value}</p>
        </>
    );
}

export default InputControlled;
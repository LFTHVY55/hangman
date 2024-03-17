import React, { useState } from 'react';

const InputLetter = ({ handleGuess, isGameOver }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value.toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.match(/^[a-z]$/) && !isGameOver) {
            handleGuess(inputValue);
            setInputValue('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    maxLength="1"
                    value={inputValue}
                    onChange={handleChange}
                    disabled={isGameOver}
                />
                <button type="submit" disabled={isGameOver}>Guess</button>
            </form>
        </div>
    );
};

export default InputLetter;

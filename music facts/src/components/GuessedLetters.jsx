import React from 'react';

const GuessedLetters = ({ guessedLetters }) => {
    return (
        <div>
            <p>Guessed Letters: {guessedLetters.join(', ')}</p>
        </div>
    );
};

export default GuessedLetters;

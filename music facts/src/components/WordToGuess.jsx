import React from 'react';

const WordToGuess = ({ randomFact, guessedLetters }) => {
    const displayWord = () => {
        return randomFact.split('').map(letter =>
            guessedLetters.includes(letter.toLowerCase()) ? letter : '_'
        ).join(' ');
    };

    return (
        <div>
            <h2>{displayWord()}</h2>
        </div>
    );
};

export default WordToGuess;

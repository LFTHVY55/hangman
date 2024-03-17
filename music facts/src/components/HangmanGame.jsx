import React, { useState } from 'react';
import WordToGuess from './WordToGuess';
import GuessedLetters from './GuessedLetters';
import InputLetter from './InputLetter';
import HangmanDrawing from './HangmanDrawing';
import ResetButton from './ResetButton';
import wordBank from './WordBank'; // Importing the word bank

const HangmanGame = () => {
    const [randomFact] = useState(() => {
        // Select a random word from the wordBank array
        const randomIndex = Math.floor(Math.random() * wordBank.length);
        return wordBank[randomIndex];
    });

    const [guessedLetters, setGuessedLetters] = useState([]);
    const [remainingAttempts, setRemainingAttempts] = useState(6); // Set to the number of attempts allowed
    const [isGameOver, setIsGameOver] = useState(false);

    const handleGuess = (letter) => {
        if (!guessedLetters.includes(letter)) {
            setGuessedLetters([...guessedLetters, letter]);
            if (!randomFact.toLowerCase().includes(letter)) {
                setRemainingAttempts(remainingAttempts - 1); // Incorrect guess, decrement remaining attempts
            }
        }
        checkGameOver();
    };

    const checkGameOver = () => {
        const revealedLetters = guessedLetters.filter(letter =>
            randomFact.toLowerCase().includes(letter)
        );
        if (revealedLetters.length === randomFact.length) {
            setIsGameOver(true);
        }
        if (remainingAttempts === 0) {
            setIsGameOver(true);
        }
    };

    const handleReset = () => {
        setGuessedLetters([]);
        setRemainingAttempts(6); // Reset remaining attempts
        setIsGameOver(false);
    };

    const handlePlayAgain = () => {
        // Reset the game state to play again
        handleReset();
        // Select a new random word
        const randomIndex = Math.floor(Math.random() * wordBank.length);
        const newRandomFact = wordBank[randomIndex];
        setRandomFact(newRandomFact);
    };

    return (
        <div>
            <h1>Hangman - Music Facts Edition</h1>
            <WordToGuess randomFact={randomFact} guessedLetters={guessedLetters} />
            <GuessedLetters guessedLetters={guessedLetters} />
            <InputLetter handleGuess={handleGuess} isGameOver={isGameOver} />
            <HangmanDrawing remainingAttempts={remainingAttempts} />
            {isGameOver && (
                <div>
                    <p>{randomFact.toLowerCase() === guessedLetters.join('').toLowerCase() ? 'Congratulations! You guessed the word!' : 'Game Over!'}</p>
                    <ResetButton handleReset={handleReset} />
                    <button onClick={handlePlayAgain}>Play Again</button>
                </div>
            )}
        </div>
    );
};

export default HangmanGame;

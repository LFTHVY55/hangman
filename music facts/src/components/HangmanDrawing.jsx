import React from 'react';
import post from '../assets/images/post.jpeg';
import head from '../assets/images/head.jpeg';
import body from '../assets/images/body.jpeg';
import Larm from '../assets/images/Larm.jpeg';
import Rarm from '../assets/images/Rarm.jpeg';
import Lleg from '../assets/images/Lleg.jpeg';
import Rleg from '../assets/images/Rleg.jpeg';

const HangmanDrawing = ({ remainingAttempts }) => {
    const selectHangmanImage = () => {
        switch (remainingAttempts) {
            case 6:
                return post; // Display the post picture for the starting stage
            case 5:
                return head;
            case 4:
                return body;
            case 3:
                return Larm;
            case 2:
                return Rarm;
            case 1:
                return Lleg;
            case 0:
                return Rleg;
            default:
                return null;
        }
    };

    const isHangmanCompleted = remainingAttempts === 0;

    return (
        <div>
            <h2>Hangman Drawing</h2>
            {isHangmanCompleted ? (
                <div>
                    <p style={{ fontWeight: 'bold', fontSize: '24px' }}>CONGRATS!</p>
                    <img src={selectHangmanImage()} alt={`Hangman - Remaining attempts: ${remainingAttempts}`} />
                </div>
            ) : (
                <img src={selectHangmanImage()} alt={`Hangman - Remaining attempts: ${remainingAttempts}`} />
            )}
        </div>
    );
};

export default HangmanDrawing;

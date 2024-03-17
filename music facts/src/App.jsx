import React from 'react';
import HangmanGame from './components/HangmanGame'; // Import your HangmanGame component here

const App = () => {
    // Define your random fact or music-related data here
    const randomFact = "Your random music fact";

    return (
        <div>
            <HangmanGame randomFact={randomFact} />
        </div>
    );
};

export default App;

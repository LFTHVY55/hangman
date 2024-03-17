import React from 'react';

const ResetButton = ({ handleReset }) => {
    return (
        <div>
            <button onClick={handleReset}>Play Again</button>
        </div>
    );
};

export default ResetButton;

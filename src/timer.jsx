import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(15);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isActive && seconds > 0) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
        } else if (seconds === 0 || !isActive) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const toggleTimer = () => {
        if (isActive) {
            setIsActive(false); // Stop the timer
        } else {
            setIsActive(true); // Start the timer
        }
    };

    const resetTimer = () => {
        setIsActive(false); // Stop the timer
        setSeconds(15);     // Reset the seconds
    };

    return (
        <div>
            <h1>{seconds} seconds</h1>
            <button onClick={toggleTimer}>
                {isActive ? 'Stop Timer' : 'Start Timer'}
            </button>
            <button onClick={resetTimer}>Reset Timer</button>
        </div>
    );
};

export default Timer;

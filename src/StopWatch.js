import React, { useState, useEffect } from "react";
import "./StopWatch.css"; // Import the CSS file

const StopWatch = () => {
  const initialCount = 0;
  const [time, setTime] = useState(initialCount);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="stopwatch-container">
      <h1 style={{ border: "1px solid #fff", padding: "10px" }}>STOP WATCH</h1>
      <div className="time-display">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="buttons">
        {running ? (
          <button className="button stop" onClick={() => setRunning(false)}>
            STOP
          </button>
        ) : (
          <button className="button start" onClick={() => setRunning(true)}>
            START
          </button>
        )}
        <button className="button reset" onClick={() => setTime(initialCount)}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default StopWatch;

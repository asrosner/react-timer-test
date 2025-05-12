import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import './style.css'; // Import CSS for styling

/**
Objective: Create a React component that displays a timer that increments every second. 
Include a reset button to reset the timer to zero. 
Use useState to manage the timer state and useEffect to handle the timer logic.

Acceptance Criteria:
- Display a timer that increments every second.
- Include a reset button to reset the timer to zero.
- Implement the component using TypeScript to ensure type safety.
- Set a default value in seconds

Additional Requirements:
 - Your boss wants this done in the next 5 mins
 - Marketing Team wants a banner added
 - Legal Team wants a links in the bottom of the screen
*/

// interface work

export default function App(props: any) {
  const defaultValue: any = 10;
  const [seconds, setSeconds] = useState<number>(defaultValue);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const bannerMessage: string = "Welcome to New York Blood Center!";

  useEffect(() => {
	let intervalId : any;
    
	if (isRunning) {
      // do something here
		intervalId = setInterval(() => {
			setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);    
    }

    return () => {
      // do something here
	  clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleReset = () => {
    // do something here
	setSeconds(0);
  };

  return (
    <div className='App'>
      <Banner message={bannerMessage} />
      <h1>NYBC React Skill Test.</h1>
      <p>
        <b>Objective</b>: Create a React component that displays a timer that
        increments every second. Include a reset button to reset the timer to
        zero. Use useState to manage the timer state and useEffect to handle the
        timer logic.
      </p>
      <div>
        <p>Timer: {seconds} seconds</p>
        <button onClick={handleReset}>Reset</button>
      </div>
	  <div className="bottom_div">
		<a href="https://www.nybc.org" target="_blank">
          NYBC
        </a>		
	  </div>
    </div>
  );
}

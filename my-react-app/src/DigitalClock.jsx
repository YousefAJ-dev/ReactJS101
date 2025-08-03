import React, { useEffect, useState } from "react";

function DigitalClock() {

	// State variable to hold the current time
	// It starts as a new Date() (the current time when the component mounts)
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		// This runs AFTER the component mounts (because of the empty dependency array [])
		// It sets up a timer that updates the `time` state every second

		// Create an interval that runs every 1000ms (1 second)
		const intervalId = setInterval(() => {
			setTime(new Date()); // Update state to the current time
		}, 1000);

		// Cleanup function:
		// Runs when the component unmounts (or before re-running effect)
		// It clears the interval so we don’t keep running it in the background
		return () => {
			clearInterval(intervalId);
		};

	}, []); // Empty dependency array → runs only once when component mounts

	function formatTime() {
		/*
		Rule of thumb for your clock:
		Use const for values that will never change IN THAT FUNCTION (scope).
		Use let for values you’ll transform or update.
		*/

		let hours = time.getHours();
		const minutes = time.getMinutes();
		const seconds = time.getSeconds();

		const meridiem = (hours >= 12) ? "pm" : "am";

		hours = hours % 12 || 12;

		return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;

	}
	
	function padZero(num) {
		return ((num < 10) ? "0" : "") + num;
	}


	return (
		<div className="clock-container">
			<div className="clock">
				<span>{formatTime()}</span>
			</div>
		</div>
	);
}

export default DigitalClock;
import React, { useRef, useEffect, useState } from "react";

function Stopwatch() {

	const [isRunning, setIsRunning] = useState(false); // bool to track if stopwatch is running
	const [elapsedTime, setElapsedTime] = useState(0);

	const intervalIdRef = useRef(null);
	const startTimeRef = useRef(0);

	useEffect(() => {

		if(isRunning){
			intervalIdRef.current = setInterval(() => {
				setElapsedTime(Date.now() - startTimeRef.current);
			}, 10);
		}

		return () => {clearInterval(intervalIdRef.current)};

	}, [isRunning]);


	function start() {
		setIsRunning(true);

		startTimeRef.current = Date.now() - elapsedTime;
	}

	function stop() {
		setIsRunning(false);
	}

	function reset() {
		setElapsedTime(0);
		setIsRunning(false);
	}

	function formatTime() {

		let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
		let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
		let seconds = Math.floor(elapsedTime / (1000) % 60);
		let milliseconds = Math.floor((elapsedTime % 1000) / 10);

		return (hours > 0) ? 
			`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds)}` : 
			`${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds)}`;
	}

	function padZero(num){
		return ((num < 10) ? "0" : "") + num;
	}

	return (
		<div className="stopwatch">
			<div className="display">
				{formatTime()}
			</div>
			<div className="controls">
				<button className="start-button" onClick={start}>Start</button>
				<button className="reset-button" onClick={reset}>Reset</button>
				<button className="stop-button" onClick={stop}>Stop</button>
			</div>
		</div>
	);
}

export default Stopwatch;
function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId = null;

const startButton = document.createElement("button");
startButton.textContent = "Start";
document.body.appendChild(startButton);

const stopButton = document.createElement("button");
stopButton.textContent = "Stop";
document.body.appendChild(stopButton);

startButton.addEventListener("click", () => {
	if (intervalId === null) {
		intervalId = setInterval(() => {
			const randomColor = getRandomHexColor();
			document.body.style.backgroundColor = randomColor;
		}, 1000);
	}
});

stopButton.addEventListener("click", () => {
	if (intervalId !== null) {
		clearInterval(intervalId);
		intervalId = null;
	}
});

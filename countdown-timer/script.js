const daysEl = document.getElementById('days-c');
const hoursEl = document.getElementById('hours-c');
const minsEl = document.getElementById('mins-c');
const secondsEl = document.getElementById('secs-c');

const newYears = '06 Aug 2021';

function countdown() {
	const newYearsDate = new Date(newYears);
	const currentDate = new Date();

	const totalSeconds = (newYearsDate - currentDate) / 1000;

	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const mins = Math.floor(totalSeconds / 60) % 60;
	const seconds = Math.floor(totalSeconds) % 60;

	daysEl.innerHTML = days;
	hoursEl.innerHTML = formatTime(hours);
	minsEl.innerHTML = formatTime(mins);
	secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
	return time < 10 ? `0${time}` : time;
}

// initial call
countdown();
//reason to do this is because we want to call them to update.
setInterval(countdown, 1000);

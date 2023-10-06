var targetDate = new Date('2023-10-24T00:00:00').getTime();
var timer = document.getElementById('timer');

function updateTimer() {
    var currentDate = new Date().getTime();
    var timeLeft = targetDate - currentDate;

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)).toString();
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)).toString();
    var seconds = Math.floor((timeLeft / 1000) % 60).toString();

    if (days.length < 2) days = "0" + days;
    if (hours.length < 2) hours = "0" + hours;
    if (minutes.length < 2) minutes = "0" + minutes;
    if (seconds.length < 2) seconds = "0" + seconds;

    timer.textContent = days + ":" + hours + ":" + minutes + ":" + seconds;
}

updateTimer()

var countdownInterval = setInterval(updateTimer, 1000);


document.getElementById("whatButton").addEventListener("click", function() {
    window.location.href = "https://vk.com/wall-103717209_1434"; // Замените URL на вашу целевую ссылку
});
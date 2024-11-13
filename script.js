function enterTargetDate() {
    const userInput = prompt("Enter the target date (YYYY-MM-DD HH:MM:SS):");
    if (userInput) {
        const targetDate = new Date(userInput).getTime();
        if (!isNaN(targetDate)) {
            countdown(targetDate);
        } else {
            alert("Invalid date format. Please use 'YYYY-MM-DD HH:MM:SS'.");
        }
    }
}

let interval;

function countdown(targetDate) {
    const countdownElement = document.getElementById("countdown");
    function updateCountdown() {
        const presentTime = new Date().getTime();
        const distance = targetDate - presentTime;
        if (distance <= 0) {
            countdownElement.innerHTML = "Time is up Man!";
            clearInterval(interval);
            return;
        }
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    }
    interval = setInterval(updateCountdown, 1000);
};

function stopCountdown() {
    clearInterval(interval);
    document.getElementById("days").textContent = String(0).padStart(2, '0');
    document.getElementById("hours").textContent = String(0).padStart(2, '0');
    document.getElementById("minutes").textContent = String(0).padStart(2, '0');
    document.getElementById("seconds").textContent = String(0).padStart(2, '0');
}

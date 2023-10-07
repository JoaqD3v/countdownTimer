 // Set the target date and time for the countdown (YYYY-MM-DD HH:MM:SS)
 const targetDate = new Date("2023-12-31 23:59:59").getTime();

 // Update the countdown every 1 second
 const countdown = setInterval(function () {
     const currentDate = new Date().getTime();
     const timeLeft = targetDate - currentDate;

     if (timeLeft <= 0) {
         clearInterval(countdown);
         document.getElementById("countdown").innerHTML = "Countdown expired!";
     } else {
         const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
         const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

         document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
     }
 }, 1000);
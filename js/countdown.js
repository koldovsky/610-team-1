const countDownDate = new Date("Dec 20, 2021 00:00:00").getTime();

const x = setInterval(function() {

  let now = new Date().getTime();

  let distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdownS").innerHTML = days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds ";

}, 1000);


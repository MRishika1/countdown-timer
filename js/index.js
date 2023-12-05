var date = new Date("dec 15, 2023 07:20:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var diff = date - now;
  console.log(diff);

  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  console.log(days);

  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  console.log(hours);

  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  console.log(minutes);

  var seconds = Math.floor((diff % (1000 * 60)) / 1000);
  console.log(seconds);

  document.getElementById("demo").innerHTML =
    days + "d, " + hours + "hrs: " + minutes + "min: " + seconds + "sec";
}, 1000);

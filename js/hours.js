var week = [
  {
    // Monday
    day: 1,
    openHour: 12,
    closeHour: 20,
    open: "12pm",
    close: "8pm"
  },
  {
    // Tuesday
    day: 2,
    openHour: 12,
    closeHour: 20,
    open: "12pm",
    close: "8pm"
  },
  {
    // Wednesday
    day: 3,
    openHour: 12,
    closeHour: 20,
    open: "12pm",
    close: "8pm"
  },
  {
    // Thursday
    day: 4,
    openHour: 12,
    closeHour: 20,
    open: "12pm",
    close: "8pm"
  },
  {
    // Friday
    day: 5,
    openHour: 12,
    closeHour: 20,
    open: "12pm",
    close: "8pm"
  },
  {
    // Saturday
    day: 6,
    openHour: 2,
    closeHour: 19,
    open: "2pm",
    close: "7pm"
  },
  {
    // Sunday
    day: 7,
    openHour: 0,
    closeHour: 0,
    open: "Closed",
    close: "Closed"
  }
];

function areYouOpen(d) {
  // get day object
  var day = d.day;
  var openHour = d.openHour;
  var closeHour = d.closeHour;

  // get current time
  var currentTime = new Date(); // current time
  var currentHour = currentTime.getHours();
  var currentMin = currentTime.getMinutes();
  var currentDay = currentTime.getDay();
  var currentSec = currentTime.getSeconds();

  // set up the front end styles to the days open and close time
  $(".timeline__start").append("<p>" + d.open + "</p>");
  $(".timeline__end").append("<p>" + d.close + "</p>");

  // var will be true if open
  var open =
    day === currentDay && // monday
    currentHour >= openHour && // 9am
    (currentHour < closeHour ||
      (currentHour === closeHour && currentMin <= 00)); // 5pm

  if (open) {
    // attach the current time to a psuedo element
    // $('.timeline__current').attr('data-content', ' we are open! ' + currentHour + ":" + currentMin + "");
    $(".timeline__current").attr("data-content", " we are open!");

    var number = (closeHour - currentHour) / 12;
    var finNumber = (1 - number) * 100;
    // var percentage = Math.round(finNumber).toString() + '%';
    var percentage = finNumber.toString() + "%";

    // set position on element based on the current time
    $(".timeline__current").css("left", percentage);
    $(".open").css("display", "block");
    $(".closed").css("display", "none");

    return "we are open";
  } else if (!open) {
    $(".timeline__current").css("display", "none");
    $(".closed").css("display", "block");
    $(".open").css("display", "none");
  }
}

week.forEach(function(dayOfTheWeek) {
  var today = new Date().getDay();

  // if the day is today run a check for hours function.
  if (dayOfTheWeek.day === today) {
    areYouOpen(dayOfTheWeek);
  }
});

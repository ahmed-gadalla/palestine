// ****** nav

var body = $("html, body");

// **************scroll smooth

$(".nav-item").on("click", function (e) {
  let aHref = e.target.getAttribute("href");
  console.log(aHref);

  let sectionOffset = $(aHref).offset().top;
  console.log(sectionOffset);
  body.stop().animate({ scrollTop: sectionOffset }, 1500);
});
// loading***********

$(function () {
  $(".loader").fadeOut(1500, function () {
    $(".loading").fadeOut(1000, function () {
      $("body").css("overflow", "auto");
      $(".loading").remove();
    });
  });
});

// aside****************
let boxColor = $(".box-color");

$("#setIcon").on("click", function () {
  $(".siteBox").animate({ width: "toggle" }, 1000);
});

// details
$(".article h3").on("click", function (e) {
  let curuntArticle = e.target;
  $(curuntArticle).next().slideToggle(1000);
  let itemOffset = $("#details").offset().top;
  body.stop().animate({ scrollTop: itemOffset }, 1500);
  $(".article h3").not(curuntArticle).next().slideUp(1000);
});

// .......duration
dateFuture = new Date(2023, 9, 7, 23, 59, 59);

function GetCount() {
  dateNow = new Date();
  //grab current date
  amount = dateNow.getTime() - dateFuture.getTime();
  //calc milliseconds between dates
  delete dateNow;

  // time is already past
  if (amount < 0) {
    document.getElementById("countbox").innerHTML = "Now!";
  }
  // date is still good
  else {
    days = 0;
    hours = 0;
    mins = 0;
    secs = 0;
    out = "";

    amount = Math.floor(amount / 1000); //kill the "milliseconds" so just secs

    days = Math.floor(amount / 86400); //days
    amount = amount % 86400;

    hours = Math.floor(amount / 3600); //hours
    amount = amount % 3600;

    mins = Math.floor(amount / 60); //minutes
    amount = amount % 60;

    secs = Math.floor(amount); //seconds

    if (days != 0) {
      out += days + " day" + (days != 1 ? "s" : "") + ",<br />";
    }
    if (days != 0 || hours != 0) {
      out += hours + " hour" + (hours != 1 ? "s" : "") + ",<br />";
    }
    if (days != 0 || hours != 0 || mins != 0) {
      out += mins + " minute" + (mins != 1 ? "s" : "") + ",<br />";
    }
    out += secs + " seconds";
    document.getElementById("countDuration").innerHTML = `
    <div class="days d-flex flex-column justify-content-center align-items-center bg-white py-3 px-4 rounded-2 shadow">
                  <img src="imgs/red-arow.png" alt="" class="redIcon pb-3 ">
                  <h3>${days} Days</h3>
                </div>
                <div class="days d-flex flex-column justify-content-center align-items-center bg-white py-3 px-4 rounded-2 shadow">
                  <img src="imgs/red-arow.png" alt="" class="redIcon pb-3 ">
                  <h3>${hours} Hours</h3>
                </div>
                <div class="days d-flex flex-column justify-content-center align-items-center bg-white py-3 px-4 rounded-2 shadow">
                  <img src="imgs/red-arow.png" alt="" class="redIcon pb-3 ">
                  <h3>${mins} Mins</h3>
                </div>
                <div class="days d-flex flex-column justify-content-center align-items-center bg-white py-3 px-4 rounded-2 shadow">
                  <img src="imgs/red-arow.png" alt="" class="redIcon pb-3 ">
                  <h3>${secs} Secs</h3>
                </div>
    `;

    setTimeout("GetCount()", 1000);
  }
}

window.onload = function () {
  GetCount();
}; //call when everything has loaded

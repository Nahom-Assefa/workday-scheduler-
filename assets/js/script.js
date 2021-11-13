// Get current number of hours
var rightNow = moment().format("HH");
console.log(rightNow);
// Specifying the date and time
currentTime = moment();
$("#currentDay").html(
  `Today's date is: ${currentTime.format("MMMM Do, YYYY")}`
);
// Retrieve Id attribute from parent
id = $(".saveBtn").parent().attr("id").replace("hour-", "");

// Function handler
$(document).ready(function () {
  // SaveBtn click listener
  $(".saveBtn").on("click", function () {
    // Store values from within the content-box
    textEl = $(".content-box").val();
    // Set the local storage
    localStorage.setItem("text", textEl);
    localStorage.setItem("id", id);
  });
});

var arr = document.querySelectorAll(".time-block");
console.log(arr);

// loop over time blocks
function timeBlocks() {
  arr.forEach(function (item) {
    //console.log(item);
    var textArea = item.querySelector(".content-box");
    //console.log(textArea);
    //retrieving id in loop to compare with military time
    var ids = item.getAttribute("id").replace("hour-", "");
    //console.log(ids);
    if (ids < moment().format("HH")) {
      $(`#${item.getAttribute("id")} .content-box`).addClass("past");
      console.log(
        $(`#${item.getAttribute("id")} .content-box`).addClass("past")
      );
    } else if (ids === moment().format("HH")) {
      $(textArea).addClass("present");
      //console.log(textArea);
    } else {
      $(textArea).addClass("future");
      //console.log($(textArea));
    }
  });
}

timeBlocks();

// Get item from local storage if any //
$("#hour-9 .content-box").val(localStorage.getItem("hour-9"));
$("#hour-10 .content-box").val(localStorage.getItem("hour-10"));
$("#hour-11 .content-box").val(localStorage.getItem("hour-11"));
$("#hour-12 .content-box").val(localStorage.getItem("hour-12"));
$("#hour-13 .content-box").val(localStorage.getItem("hour-13"));
$("#hour-14 .content-box").val(localStorage.getItem("hour-14"));
$("#hour-15 .content-box").val(localStorage.getItem("hour-15"));
$("#hour-16 .content-box").val(localStorage.getItem("hour-16"));
$("#hour-17 .content-box").val(localStorage.getItem("hour-17"));

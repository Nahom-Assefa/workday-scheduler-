// Get current number of hours
var rightNow = moment().format("HH");
console.log(rightNow);
// Specifying the date and time
currentTime = moment();
$("#currentDay").html(
  `Today's date is: ${currentTime.format("MMMM Do, YYYY")}`
);

// Storing nodelist of all timeblocks
var arr = document.querySelectorAll(".time-block");
console.log(arr);

// SaveBtn click listener
$(".saveBtn").on("click", function () {
  // Store values from within the content-box
  var textEl = $(this).siblings(".content-box").val();
  // Retrieve Id attribute from parent
  var timeEl = $(this).parent().attr("id").replace("hour-", "");

  console.log(timeEl);
  console.log(textEl);

  saveValues(textEl, timeEl);
});

// Storing unique key value pairs that don't override
function saveValues(textEl, timeEl) {
  // Save time and text in local storage
  if (timeEl == 09) {
    localStorage.setItem("key-09", timeEl);
    localStorage.setItem("text-09", textEl);
    console.log("yes");
  } else if (timeEl == 10) {
    localStorage.setItem("key-10", timeEl);
    localStorage.setItem("text-10", textEl);
  } else if (timeEl == 11) {
    localStorage.setItem("key-11", timeEl);
    localStorage.setItem("text-11", textEl);
  } else if (timeEl == 12) {
    localStorage.setItem("key-12", timeEl);
    localStorage.setItem("text-12", textEl);
  } else if (timeEl == 13) {
    localStorage.setItem("key-13", timeEl);
    localStorage.setItem("text-13", textEl);
  } else if (timeEl == 14) {
    localStorage.setItem("key-14", timeEl);
    localStorage.setItem("text-14", textEl);
  } else if (timeEl == 15) {
    localStorage.setItem("key-15", timeEl);
    localStorage.setItem("text-15", textEl);
  } else if (timeEl == 16) {
    localStorage.setItem("key-16", timeEl);
    localStorage.setItem("text-16", textEl);
  } else {
    localStorage.setItem("key-17", timeEl);
    localStorage.setItem("text-17", textEl);
  }
}

function loadTasks() {
// Get item from local storage if any //
$("#hour-9 .content-box").val(localStorage.getItem("text-09"));
$("#hour-10 .content-box").val(localStorage.getItem("text-10"));
$("#hour-11 .content-box").val(localStorage.getItem("text-11"));
$("#hour-12 .content-box").val(localStorage.getItem("text-12"));
$("#hour-13 .content-box").val(localStorage.getItem("text-13"));
$("#hour-14 .content-box").val(localStorage.getItem("text-14"));
$("#hour-15 .content-box").val(localStorage.getItem("text-15"));
$("#hour-16 .content-box").val(localStorage.getItem("text-16"));
$("#hour-17 .content-box").val(localStorage.getItem("text-17"));
}


// TimeBlocks Function
function timeBlocks() {
  arr.forEach(function (item) {
    console.log(item);
    // Retrieving id in loop to compare with military time
    var ids = item.getAttribute("id").replace("hour-", "");
    // Loop over and apply CSS styling
    if (ids < moment().format("HH")) {
      // Office hours showed me how to use jquery to particularize search for textbox relative to ID
      $(`#${item.getAttribute("id")} .content-box`).addClass("past");
    } else if (ids === moment().format("HH")) {
      $(`#${item.getAttribute("id")} .content-box`).addClass("present");
    } else {
      $(`#${item.getAttribute("id")} .content-box`).addClass("future");
    }
  });
}

timeBlocks();
loadTasks();

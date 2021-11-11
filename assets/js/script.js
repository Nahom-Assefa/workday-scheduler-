// Time relative to the start of day
var start = moment().startOf('day').fromNow();
console.log(start);
// Get current number of hours
var rightNow = moment().format("- hh:mm:ss a");
console.log(rightNow);
// Specifying the date and time
currentTime = moment();
$("#currentDay").html(`Today's date is: ${currentTime.format("MMMM Do, YYYY")}`);
// Array of timeBlocks
var arr = [9,10,11,12,1,2,3,4,5];

// Function handler
$(document).ready(function(){
// SaveBtn click listener
$(".saveBtn").on("click", function(){
// Store values from within the content-box
textEl= $(".content-box").val();
// Retrieve Id attribute from parent
id = $(".saveBtn").parent().attr("id").replace("hour-","");
console.log(id);
// Set the local storage
localStorage.setItem("text", textEl);
localStorage.setItem("id", id);

timeBlocks(id);
})
})

// capture time in moment js in military time
// compare ID with military time 
// document.queryselectorall to pull down html elements

/* loop over time blocks
function timeBlocks(id) {
for (i = id; i < arr.length; i++ ){
    if (id < arr && id )
}



}*/




// To check the time and add the classes for background indicators







   // Get item from local storage if any






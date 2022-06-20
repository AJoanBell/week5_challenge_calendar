// display the actual date using moment
$("#currentDay").text(moment().format("dddd") + ", " + moment().format("MMMM Do") + ", " + moment().format("YYYY"));

//document
$(document).ready(function(){
    // Functions 
    assessHour();
    localUser();
});

// Function for if time slot is past, present or future
// Colour of fields changed based on this criteria
function assessHour() {

    // Declare variables to parse for integer
    var currentTime = moment().format("HH");
    var timeInt = parseInt(currentTime);
    // IF/ELSE statements inside FOR loop to assess standard business hours (9-5)
    for(var i = 9; i < 18; i++) {
        
        // Declare Variables to parse for integer
        var timeSlot = $("#" + i).attr("data-index");
        var timeSlotInt= parseInt(timeSlot);


        // TimeSlot assessment
        if(timeInt > timeSlotInt){
            $("#" + i).addClass("past");
        } if(timeInt == timeSlotInt) {
            $("#" + i).addClass("present");
        } if(timeInt < timeSlotInt) {
            $("#" + i).addClass("future");
        }
    }
}

// Local storage function
function localUser(){
    //Store locally create loop
    for(var i = 9; i < 18; i++) {
        $("#" + i).val(localStorage.getItem(i));
    }
}

// To save field input function for users
var saveBtn = $(".saveBtn");
saveBtn.on("click", function() {
    var pTime = $(this).attr("data-index");
    console.log(pTime);
    var userInput = $("#" + pTime).val();
    console.log(userInput);
    localStorage.setItem(pTime, userInput);
});

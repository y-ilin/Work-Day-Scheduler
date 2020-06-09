$(document).ready(function () {
    // Defining object for hours in the schedule
    var hoursObj = {
        1: "1AM",
        2: "2AM",
        3: "3AM",
        4: "4AM",
        5: "5AM",
        6: "6AM",
        7: "7AM",
        8: "8AM",
        9: "9AM",
        10: "10AM",
        11: "11AM",
        12: "12PM",
        13: "1PM",
        14: "2PM",
        15: "3PM",
        16: "4PM",
        17: "5PM",
        18: "6PM",
        19: "7PM",
        20: "8PM",
        21: "9PM",
        22: "10PM",
        23: "11PM",
        24: "12AM",
    }

    // Grabbing current time with moment.js
    var now = moment();

    // Display today's date in header
    $("#currentDay").text(now.format("dddd, D MMMM"))

    // Creating timeblock divs for each hour in hoursObj
    $.each(hoursObj, function(key, value) {
        // console.log(key, value);
        var newRow = $(`<div class="row" id="`+key+`">`);
        newRow.append($(`<div class="col col-2 col-md-1 hour">`+value+`</div>`));
        var newForm = $(`<div class="col col-8 col-md-10">`);
        newForm.append($(`<form class="eventForm"><textarea class="eventArea">`));

        // For each form, add styling based on whether it is the present/a past/a future hour
        if( key == now.hours() ){
            $(newForm).addClass("present");
        } else if( key < now.hours() ) {
            $(newForm).addClass("past");
        } else if( key > now.hours() ) {
            $(newForm).addClass("future");
        }

        newRow.append(newForm);
        newRow.append($(`<div class="col col-2 col-md-1 saveBtn"></div>`));

        // Display the timeblock
        $(".container").append($(newRow));
    })

    // When save buttons are clicked, the value of the forms are saved to local storage
    var handleSaveBtn = function(e) {
        if( $(e.target).hasClass("saveBtn")) {
            newEvent = $(e.currentTarget).find(".eventArea").val();
            // NOW SAVE TO LOCAL STORAGEEEE
            console.log(newEvent);
        }

        // console.log(e.target)
        // console.log(e.currentTarget)
        // console.log($(e.currentTarget).find(".eventArea").val())
    }

    $(".row").on("click", handleSaveBtn);

});

`
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
`

// Create timeblocks, 1 for each hour
//// For each hour in hoursArray, make a row with class="row", column with class="hour"
// Display timeblocks
// Add form to timeblocks so that user is able to add text
// If timeblock is in this current hour, class="present" styling for current
// Else if timeblock is of past hours, class="past" styling for past
// Else if timeblock is for future hours, class="future" styling for future

// Add "Save" buttons to end of timeblocks
// Add click event to "Save" buttons -> value of the forms are saved to local storage

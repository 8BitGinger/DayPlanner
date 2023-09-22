

$(document).ready(function () {//wont start until page has been fully loaded
    $("#currentDay").text(dayjs().format("dddd MMMM D YYYY")); // use day.js to get the date
    //this listens for the saveBtn.  Once it does it runs a function
    $(".saveBtn").on("click", function() {
        //conole.log is for debug only
        console.log(this);
        var text = $(this).siblings(".event-text").val(); // this takes the text from the sibling of the button to save later
        var time = $(this).parent().attr("id"); // this takes the ID of the hour block as the value
        console.log(text);
        console.log(time);
        //saves both the Time and Text in Local Storage so it will be there upon new page load
        localStorage.setItem(time, text);
    })

        //this checks the val of peviously stored info and populates it if applicable
    $("#hour9 .event-text").val(localStorage.getItem("hour9"));
    $("#hour10 .event-text").val(localStorage.getItem("hour10"));
    $("#hour11 .event-text").val(localStorage.getItem("hour11"));
    $("#hour12 .event-text").val(localStorage.getItem("hour12"));
    $("#hour13 .event-text").val(localStorage.getItem("hour13"));
    $("#hour14 .event-text").val(localStorage.getItem("hour14"));
    $("#hour15 .event-text").val(localStorage.getItem("hour15"));
    $("#hour16 .event-text").val(localStorage.getItem("hour16"));
    $("#hour17 .event-text").val(localStorage.getItem("hour17"));

    // this tracks the current hour and redefines the class of each text area
    // based on the current, past, present and future
    function hourTracker() {
        //get current number of hours.
        var currentHour = dayjs().hour(); // use of dayjs to get the hour of the day

        // loop to check each hour block and then split the hour number off of the id attribute
        //originally had the numbers assigned with dashes until I realized that was giving them a negativ value
        $(".hour-block").each(function () {
            var fixedHour = (parseInt($(this).attr("id").split("hour")[1]))
            //this actually sets the local storage with event text linked to the value of the hour-block val we split above
            console.log( fixedHour, currentHour)

            //this definies how each class is applied
            if (fixedHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (fixedHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker(); //re-run function
})

//This is where I can try out Dark/Light Mode functions for practice
$( ".toggle" ).on("click", function() {
    if( $( "body" ).hasClass( "darkMode" )) {
        $( "body" ).removeClass( "darkMode" );
    } else {
        $( "body" ).addClass( "darkMode" );
    }

    if( $( ".jumbotron" ).hasClass( "darkModejumbo" )) {
        $( ".jumbotron" ).removeClass( "darkModejumbo" );
    } else {
        $( ".jumbotron").addClass( "darkModejumbo" );
    }

    if($( ".hour" ).hasClass( "hourDark")){
        $( ".hour" ).removeClass( "hourDark" );
    } else {
        $( ".hour" ).addClass( "hourDark");
    }
        
    if($( "#toggle" ).hasClass( "toggleDark")){
        $( "#toggle" ).removeClass( "toggleDark" );
    } else {
        $( "#toggle" ).addClass( "toggleDark");
    }

})
    

$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    
    $(".saveBtn").on("click", function() {
        console.log(this);
        var text = $(this).siblings(".event-text").val();
        var time = $(this).parent().attr("id");
        console.log(time, text);
        localStorage.setItem(time, text);
    })

    $("#hour-9 .event-text").val(localStorage.getItem("hour-9"));
    $("#hour-10 .event-text").val(localStorage.getItem("hour-10"));
    $("#hour-11 .event-text").val(localStorage.getItem("hour-11"));
    $("#hour-12 .event-text").val(localStorage.getItem("hour-12"));
    $("#hour-1 .event-text").val(localStorage.getItem("hour-1"));
    $("#hour-2 .event-text").val(localStorage.getItem("hour-2"));
    $("#hour-3 .event-text").val(localStorage.getItem("hour-3"));
    $("#hour-4 .event-text").val(localStorage.getItem("hour-4"));
    $("#hour-5 .event-text").val(localStorage.getItem("hour-5"));

    function hourTracker() {
        var currentHour=moment().hour();

    }

})
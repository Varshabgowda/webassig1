// Simple greeting based on time and a dark-mode toggle using jQuery
$(document).ready(function () {
    const hour = new Date().getHours();
    let msg = "Welcome!";
    if (hour < 12) msg = "Good Morning!";
    else if (hour < 18) msg = "Good Afternoon!";
    else msg = "Good Evening!";

    $("#greeting").text(msg);

    $("#themeBtn").on("click", function () {
        $("body").toggleClass("dark-mode");
    });
});

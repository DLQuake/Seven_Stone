$('.navigation__button').on("click", function () {
    $(this).toggleClass('active');
});

$(document).ready(function () {
    $("#hamburger").click(function () {
        $("#navUL").slideToggle(200).css("display", "flex");
    });
});


// show table
$(document).ready(function () {
    $("#showTable").click(function () {
        $("#table").slideDown(200).css("display", "flex");
    });
});

// close table
$(document).ready(function () {
    $("#closeTable").click(function () {
        $("#table").slideUp(200);
    })
});
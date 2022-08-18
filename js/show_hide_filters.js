$('.deals__filters-menu-show-filters').on("click", function () {
    $(this).toggleClass('active');
});

$(document).ready(function () {
    $(".deals__filters-menu-show-filters").click(function () {
        $(".deals__filters-buttons").slideToggle(200).css("display", "flex");
    });
});
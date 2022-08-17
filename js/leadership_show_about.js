$('.leadership__leaders-leader-who-show-about').on("click", function () {
    $(this).toggleClass('active');
});

$(document).ready(function () {
    $("#showAbout1").click(function () { $("#about1").slideToggle(500); });
    $("#showAbout2").click(function () { $("#about2").slideToggle(500); });
    $("#showAbout3").click(function () { $("#about3").slideToggle(500); });
    $("#showAbout4").click(function () { $("#about4").slideToggle(500); });
    $("#showAbout5").click(function () { $("#about5").slideToggle(500); });
    $("#showAbout6").click(function () { $("#about6").slideToggle(500); });
    $("#showAbout7").click(function () { $("#about7").slideToggle(500); });
});
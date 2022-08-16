jQuery(function ($) {
    $.scrollTo(0);
    $('#aboutus_header').click(function () { $.scrollTo($('#Toaboutus'), 1000); });
    $('#contact_header').click(function () { $.scrollTo($('#Tocontact'), 1000); });
    $('#aboutus_footer').click(function () { $.scrollTo($('#Toaboutus'), 1000); });
    $('#contact_footer').click(function () { $.scrollTo($('#Tocontact'), 1000); });
}
);
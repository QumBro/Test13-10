jQuery(document).ready(function () {
    $('.burger').click(function (event) {
        $('.burger, .burger__menu').toggleClass('active');
    });
});
// $(document).ready(function () {
//     $('.burger').click(function (event) {
//         $('.burger, .burger__menu').toggleClass('active');
//     });
// });
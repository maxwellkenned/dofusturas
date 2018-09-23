// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems);
//     var elems2 = document.querySelectorAll('select');
//     var instances2 = M.Sidenav.init(elems2);
//     var instance3 = M.Tabs.init(el);
//     var elems4 = document.querySelectorAll('.tooltipped');
//     var instances4 = M.Tooltip.init(elems4);
// });

// Or with jQuery

$(document).ready(function() {
    $('.sidenav').sidenav();
    $('select').formSelect();
    $('.tabs').tabs();
    $('.tooltipped').tooltip();
    $('.modal').modal();
});
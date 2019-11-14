import $ from "jquery";
import {BlackFriday} from "%components%/black-friday/BlackFriday";


$(document).ready(function () {
    $('.js-black-friday').each((i, el) => {
        new BlackFriday(el);
    });
});

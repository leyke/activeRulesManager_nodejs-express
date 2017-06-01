/**
 * Created by Артём on 30.05.17.
 */
$(document).ready(function() {

    $(".tab_item").not(":first");
    $(".wrapper .tab").click(function () {
        $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
});
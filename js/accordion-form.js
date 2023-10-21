$(document).ready(function () {
    $('.radio_button').on('click',function(){
        $('.radio_button').removeAttr('checked');
        $(this).prop('checked','checked');
    });
    $('.upload_trigger').click(function () {
        $(".file_input").trigger("click");
    });
    $(".edit-button").click(function () {
        var id=$(this).attr("id");
        if ($("#"+id).hasClass("accordion_closed")) {
            $("#"+id).addClass("accordion_opened").removeClass("accordion_closed");
            $("#"+id).animate({ top: "376px" }, 200);
            $(".accordion_body").slideDown('slow')
            $(".arrow-img").removeClass("arrow-down");
            $(".arrow-img").addClass("arrow-up");
        }
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#"+id).offset().top
        }, 1000);
    });
});
function accordion_form(id)
{
    if ($("#"+id).hasClass("accordion_closed")) {
        $("#"+id).addClass("accordion_opened").removeClass("accordion_closed");
        $("#"+id).animate({ top: "376px" }, 200);
        $("."+id+"_body").slideDown('slow')
        $("#"+id+" .arrow-img").removeClass("arrow-down");
        $("#"+id+" .arrow-img").addClass("arrow-up");
    }
    else 
    {
        $("#"+id).addClass("accordion_closed").removeClass("accordion_opened");
        $("."+id+"_body").slideUp('slow');
        $("#"+id+" .arrow-img").removeClass("arrow-up");
        $("#"+id+" .arrow-img").addClass("arrow-down");
    }
    
}
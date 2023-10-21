/* In the case of any event listeners not working, please use
$('body').on('click', 'a.myclass', function() {
    do something
});
type of event listener function
*/


$(document).ready(function() {

    // Table edit button


    $("#recurrence").change(function() {
        var val = $(this).val();
        $(".dropdown_section").addClass("notdisplay").removeClass("d-flex");
        $("#" + val + "_dropdown").addClass('d-flex').removeClass("notdisplay");
    });

    $("#daily_dropdown #work_day").change(function() {
        var val = $(this).val();
        if (val == 'every') {

            $("#daily_dropdown #work_day_text").show();
            $("#daily_dropdown #days_text_div").show();
        } else {
            $("#daily_dropdown #work_day_text").hide();
            $("#daily_dropdown #days_text_div").hide();
        }
    });

    $("#monthly_dropdown #work_day").change(function() {
        var val = $(this).val();
        if (val == 'every') {

            $("#monthly_dropdown #work_day_text").show();
            $("#monthly_dropdown #days_text_div").show();

        } else {
            $("#monthly_dropdown #work_day_text").hide();
            $("#monthly_dropdown #days_text_div").hide();

        }
    });


    $('.file_input').filer({
        showThumbs: true,
        templates: {
            box: '<ul class="jFiler-item-list"></ul>',
            item: '<li class="jFiler-item">\
                    <div class="jFiler-item-container">\
                        <div class="jFiler-item-inner">\
                            <div class="jFiler-item-thumb">\
                                <div class="jFiler-item-status"></div>\
                                <div class="jFiler-item-info">\
                                    <span class="jFiler-item-title" title="{{fi-name}}"> {{fi-name | limitTo: 25}}</span>\
                                    <span style="float: right;"><a class="icon-jfi-trash jFiler-item-trash-action"></a></span>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </li>',
            itemAppend: '<li class="jFiler-item">\
                    <div class="jFiler-item-container">\
                        <div class="jFiler-item-inner">\
                            <div class="jFiler-item-thumb">\
                                <div class="jFiler-item-status"></div>\
                                <div class="jFiler-item-info">\
                                    <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name | limitTo: 25}}</b></span>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </li>',
            progressBar: '<div class="bar"></div>',
            itemAppendToEnd: true,
            removeConfirmation: true,
            _selectors: {
                list: '.jFiler-item-list',
                item: '.jFiler-item',
                progressBar: '.bar',
                remove: '.jFiler-item-trash-action',
            }
        },
        uploadFile: {
            url: "upload.php",
            data: {},
            type: 'POST',
            enctype: 'multipart/form-data',
            beforeSend: function() {},
            success: function(data, el) {
                var parent = el.find(".jFiler-jProgressBar").parent();
                el.find(".jFiler-jProgressBar").fadeOut("slow", function() {
                    $("<div class=\"jFiler-item-others text-success\"><i class=\"icon-jfi-check-circle\"></i> Success</div>").hide().appendTo(parent).fadeIn("slow");
                });
            },
            error: function(el) {
                var parent = el.find(".jFiler-jProgressBar").parent();
                el.find(".jFiler-jProgressBar").fadeOut("slow", function() {
                    $("<div class=\"jFiler-item-others text-error\"><i class=\"icon-jfi-minus-circle\"></i> Error</div>").hide().appendTo(parent).fadeIn("slow");
                });
            },
            statusCode: {},
            onProgress: function() {},
        },
        dragDrop: {
            dragEnter: function() {},
            dragLeave: function() {},
            drop: function() {},
        },
        addMore: true,
    });
});




$('.start-date').datetimepicker({
    useCurrent: false,
    format: 'DD/MM/YYYY',
    // inline:true,
    minDate: new Date(),

});
$('.end-date').datetimepicker({
    useCurrent: false,
    format: 'DD/MM/YYYY',

});

$(".start-date").on("dp.change", function(e) {
    $('.end-date').data("DateTimePicker").minDate(e.date);
});

$(".end-date").on("dp.change", function(e) {
    $('.start-date').data("DateTimePicker").maxDate(e.date);
});
$('#reversal_date, #accounting_date').datetimepicker({
    useCurrent: false,
    format: 'DD/MM/YYYY',

});
$("#save_btn").click(function(e) {
    e.preventDefault();
    $('#jv_template').modal('show');


});
$(".template_tag").click(function(e) {
    e.preventDefault();
    $('#jv_template').modal('show');
});


$("#work_day_update").click(function(e) {
    e.preventDefault();
    $('#work_day_modal_template').modal('show');
});


$('#delegate').change(function() {
    if ($(this).is(":checked")) {


        $("#delegate_user_div").removeClass("opacity4");
        $("#delegate_text").removeClass("delegate_disabled");
        $("#search_apply_btn").removeClass("delegate_disabled");
    } else {
        $("#delegate_user_div").addClass("opacity4");
        $("#delegate_text").addClass("delegate_disabled");
        $("#search_apply_btn").addClass("delegate_disabled");
    }

});

$('.date-picker').datetimepicker({
    useCurrent: false,
    format: 'DD/MM/YYYY',
    // inline: true,

});

/* File Upload script start */
$('#sop_file_input').on("click", function(evt) {
    evt.stopImmediatePropagation();
    evt.preventDefault();
    $('#sop_file').trigger('click');
});
$("#sop_file").change(function(e) {
    var F = this.files;
    console.log(F);
    var file_name = F[0].name;
    $("#sop_file_name").html(file_name);
    $("#sop_file_name_update").show();
});
$("#sop_remove_file").click(function(e) {
    $("#sop_file_name_update").hide();
});


$('#company_file_input').on("click", function(evt) {
    evt.stopImmediatePropagation();
    evt.preventDefault();
    $('#company_file').trigger('click');
});
$("#company_file").change(function(e) {
    var F = this.files;
    console.log(F);
    var file_name = F[0].name;
    $("#company_file_name").html(file_name);
    $("#company_file_name_update").show();
});
$("#company_remove_file").click(function(e) {
    $("#company_file_name_update").hide();
});
/* File Upload script end */
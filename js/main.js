$('#footerYear').html(new Date().getFullYear());

//  Table status and select all

$(document).ready(function() {

    $(".table-custom-select").each(function() {
        $(this).wrap("<span class='table-select-wrapper'></span>");
        $(this).after("<span class='table-select-holder'></span>");
    });

    $(".table-custom-select").change(function() {
        var selectedOption = $(this).find(":selected").text();
        $(this).next(".table-select-holder").text(selectedOption);
        var selectedValue = $(this).val();
        if (selectedValue == 'pending') {
            $(this).parent().removeClass('approved');
            $(this).parent().removeClass('rejected');
        } else if (selectedValue == 'approved') {
            $(this).parent().addClass('approved');
            $(this).parent().removeClass('rejected');
        } else if (selectedValue == 'rejected') {
            $(this).parent().removeClass('approved');
            $(this).parent().addClass('rejected');
        }
    }).trigger('change');

    // table selection

    $('.table-select-all').click(function() {
        $(".table-select").prop('checked', $(this).prop('checked'));
    });

});

// custom input

$(".custom-dropdown").each(function() {
    $(this).wrap("<span class='custom-select-wrapper'></span>");
    $(this).after("<span class='custom-select-holder'></span>");
});

$(".custom-dropdown").change(function() {
    var selectedOption = $(this).find(":selected").text();
    $(this).next(".custom-select-holder").text(selectedOption);
}).trigger('change');
// $(".multi-select").chosen();
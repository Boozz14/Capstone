$(document).ready(function () {
    $('#search_request').on('keypress', function (e) {
        return e.which !== 13;
    });
    $("#search_request").keyup(function () {
        var txt = $(this).val();
        // console.log(txt);
        //???? what 
        $('tbody').html('');
        $.ajax({
            url: "searched_request.php",
            method: "post",
            data: { search: txt },
            dataType: "text",
            success: function (data) {
                $('tbody').html(data);
                $(".bx.respond").click(function () {
                    location.href = "../patients_record_management/laboratory.php?id=" + $(this).attr("id");
                });

            }
        });
        //somehow return false stops keyup functioning twice
        return false;
    });



    $(".bx.respond").click(function () {
        location.href = "../patients_record_management/laboratory.php?id=" + $(this).attr("id");
    });
});
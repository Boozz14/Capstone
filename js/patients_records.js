$(document).ready(function () {
    $('#search_patient').on('keypress', function (e) {
        return e.which !== 13;
    });
    $("#search_patient").keyup(function () {
        var txt = $(this).val();
        //???? what 
        $('tbody').html('');
        $.ajax({
            url: "searched_patients_records.php",
            method: "post",
            data: { search: txt },
            dataType: "text",
            success: function (data) {
                $('tbody').html(data);


            }
        });
        //somehow return false stops keyup functioning twice
        return false;
    });


    $(".btn.create_record").click(function () {
        $('.option_modal_div').show();
        $('.option_modal_div').focus();
        $('.option_modal_div').attr('id', this.id);
    });

    $('.option_modal_div').focusout(function () {
        $(this).hide();
        $('.option_modal_div').attr('id', "");
    });

    $('.option_modal_exit_div').click(function () {
        $('.option_modal_div').hide();
        $('.option_modal_div').attr('id', "");
    });

    $('.modal_options_div .option_buttons').click(function () {
        console.log($(this).attr('id'));
        var patient_id = $('.option_modal_div').attr('id');
        $('.option_modal_div').hide();
        $('.option_modal_div').attr('id', "");
        $('.record_management_div_1').hide();
        $('.record_management_div_4').show();
        $('.record_management_div_4').html('');
        var url_path = "";
        if ($(this).attr('id') == "consultation") {
            url_path = "consultation.php?id=" + patient_id;

        }
        else if ($(this).attr('id') == "admission") {
            url_path = "admission.php?id=" + patient_id;
        }
        else if ($(this).attr('id') == "med_cert") {
            url_path = "medical_certificate.php?id=" + patient_id;
        }
        else if ($(this).attr('id') == "lab_res") {
            url_path = "laboratory.php?id=" + patient_id;
        }
        location.href = url_path;

    });





    $("#ob_patient").change(function () {
        $(".ob_patient").toggleClass("yes_ob");
        $('.ob').val("");

    });






    //consultation personal group
    $("#consultation_personal_next_btn").click(function () {
        $("#consultation_personal_group").removeClass("active_group");
        $("#vital_group").addClass("active_group");
        $(".progress-bar").css('width', '70%');
    });


    //vital group    
    $("#vital_next_btn").click(function () {
        $("#vital_group").removeClass("active_group");
        $("#complaint_group").addClass("active_group");
        $(".progress-bar").css('width', '100%');
    });

    $("#vital_prev_btn").click(function () {
        $("#vital_group").removeClass("active_group");
        $("#consultation_personal_group").addClass("active_group");
        $(".progress-bar").css('width', '30%');
    });


    // account group
    $("#complaint_prev_btn").click(function () {
        $("#complaint_group").removeClass("active_group");
        $("#vital_group").addClass("active_group");
        $(".progress-bar").css('width', '70%');
    });






    // ADMISSION

    //admission personal group
    $("#admission_personal_next_btn").click(function () {
        $("#admission_personal_group").removeClass("active_group");
        $("#admission_personal2_group").addClass("active_group");
        $(".progress-bar").css('width', '50%');
    });

    //admission personal2 group
    $("#admission_personal2_next_btn").click(function () {
        $("#admission_personal2_group").removeClass("active_group");
        $("#admitting_group").addClass("active_group");
        $(".progress-bar").css('width', '70%');
    });

    $("#admission_personal2_prev_btn").click(function () {
        $("#admission_personal2_group").removeClass("active_group");
        $("#admission_personal_group").addClass("active_group");
        $(".progress-bar").css('width', '30%');
    });

    //admitting group
    $("#admitting_next_btn").click(function () {
        $("#admitting_group").removeClass("active_group");
        $("#diagnosis_group").addClass("active_group");
        $(".progress-bar").css('width', '100%');
    });

    $("#admitting_prev_btn").click(function () {
        $("#admitting_group").removeClass("active_group");
        $("#admission_personal2_group").addClass("active_group");
        $(".progress-bar").css('width', '50%');
    });

    //admitting group
    $("#diagnosis_prev_btn").click(function () {
        $("#diagnosis_group").removeClass("active_group");
        $("#admitting_group").addClass("active_group");
        $(".progress-bar").css('width', '70%');
    });



    //medical certificate
    //medical personal group
    $("#medical_personal_next_btn").click(function () {
        $("#medical_personal_group").removeClass("active_group");
        $("#medical_diagnosis_group").addClass("active_group");
        $(".progress-bar").css('width', '50%');
    });

    //medical diagnosis group
    $("#medical_diagnosis_prev_btn").click(function () {
        $("#medical_diagnosis_group").removeClass("active_group");
        $("#medical_personal_group").addClass("active_group");
        $(".progress-bar").css('width', '25%');
    });

    $("#medical_diagnosis_next_btn").click(function () {
        $("#medical_diagnosis_group").removeClass("active_group");
        $("#recommendation_group").addClass("active_group");
        $(".progress-bar").css('width', '75%');
    });

    //recommendation group
    $("#recommendation_prev_btn").click(function () {
        $("#recommendation_group").removeClass("active_group");
        $("#medical_diagnosis_group").addClass("active_group");
        $(".progress-bar").css('width', '50%');
    });

    $("#recommendation_next_btn").click(function () {
        $("#recommendation_group").removeClass("active_group");
        $("#physician_group").addClass("active_group");
        $(".progress-bar").css('width', '100%');
    });

    //physician group
    $("#physician_prev_btn").click(function () {
        $("#physician_group").removeClass("active_group");
        $("#recommendation_group").addClass("active_group");
        $(".progress-bar").css('width', '75%');
    });


});
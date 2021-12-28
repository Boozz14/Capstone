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


    // view folder / view record
    $(".btn.view_records").click(function () {

        location.href = "patient_records.php?id=" + $(this).attr('id');
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











    // patient records . php
    $("#admission_select_search").on('change', function () {
        if ($(this).val() == "year") {
            $(".row.admission.select_year").css("display", "flex");
            $(".row.admission.select_month").hide();
            $(".row.admission.select_date").hide();
        } else if ($(this).val() == "month") {
            $(".row.admission.select_month").css("display", "flex");
            $(".row.admission.select_year").hide();
            $(".row.admission.select_date").hide();
        } else if ($(this).val() == "date") {
            $(".row.admission.select_date").css("display", "flex");
            $(".row.admission.select_year").hide();
            $(".row.admission.select_month").hide();
        }
    });

    $("#consultation_select_search").on('change', function () {
        if ($(this).val() == "year") {
            $(".row.consultation.select_year").css("display", "flex");
            $(".row.consultation.select_month").hide();
            $(".row.consultation.select_date").hide();
        } else if ($(this).val() == "month") {
            $(".row.consultation.select_month").css("display", "flex");
            $(".row.consultation.select_year").hide();
            $(".row.consultation.select_date").hide();
        } else if ($(this).val() == "date") {
            $(".row.consultation.select_date").css("display", "flex");
            $(".row.consultation.select_year").hide();
            $(".row.consultation.select_month").hide();
        }
    });

    $("#medical_select_search").on('change', function () {
        if ($(this).val() == "year") {
            $(".row.medical.select_year").css("display", "flex");
            $(".row.medical.select_month").hide();
            $(".row.medical.select_date").hide();
        } else if ($(this).val() == "month") {
            $(".row.medical.select_month").css("display", "flex");
            $(".row.medical.select_year").hide();
            $(".row.medical.select_date").hide();
        } else if ($(this).val() == "date") {
            $(".row.medical.select_date").css("display", "flex");
            $(".row.medical.select_year").hide();
            $(".row.medical.select_month").hide();
        }
    });

    $("#laboratory_select_search").on('change', function () {
        if ($(this).val() == "year") {
            $(".row.laboratory.select_year").css("display", "flex");
            $(".row.laboratory.select_month").hide();
            $(".row.laboratory.select_date").hide();
        } else if ($(this).val() == "month") {
            $(".row.laboratory.select_month").css("display", "flex");
            $(".row.laboratory.select_year").hide();
            $(".row.laboratory.select_date").hide();
        } else if ($(this).val() == "date") {
            $(".row.laboratory.select_date").css("display", "flex");
            $(".row.laboratory.select_year").hide();
            $(".row.laboratory.select_month").hide();
        }
    });

    $(".btn.select_year").click(function () {
        var id = $(this).attr('id');
        var year = "";
        var type = "";
        if ($(this).hasClass('medical')) {
            type = "medical";
            year = $("#medical_select_year").val();
        } else if ($(this).hasClass('consultation')) {
            type = "consultation"
            year = $("#consultation_select_year").val();
        } else if ($(this).hasClass('admission')) {
            type = "admission";
            year = $("#admission_select_year").val();
        } else if ($(this).hasClass('laboratory')) {
            type = "laboratory";
            year = $("#laboratory_select_year").val();
        }
        $.ajax({
            url: "search_file.php",
            method: "post",
            data: { patient: id, year: year, type: type },
            dataType: "text",
            success: function (data) {
                if (type == "medical") {
                    $('tbody#medical').html(data);

                } else if (type == "consultation") {
                    $('tbody#consultation').html(data);
                } else if (type == "admission") {
                    $('tbody#admission').html(data);
                } else if (type == "laboratory") {
                    $('tbody#laboratory').html(data);
                }
            }
        });
    });


    $(".btn.select_month").click(function () {
        var id = $(this).attr('id');
        var month = "";
        var type = "";
        if ($(this).hasClass('medical')) {
            type = "medical";
            month = $("#medical_select_month").val();
        } else if ($(this).hasClass('consultation')) {
            type = "consultation"
            month = $("#consultation_select_month").val();
        } else if ($(this).hasClass('admission')) {
            type = "admission";
            month = $("#admission_select_month").val();
        } else if ($(this).hasClass('laboratory')) {
            type = "laboratory";
            month = $("#laboratory_select_month").val();
        }
        $.ajax({
            url: "search_file.php",
            method: "post",
            data: { patient: id, month: month, type: type },
            dataType: "text",
            success: function (data) {
                if (type == "medical") {
                    $('tbody#medical').html(data);
                } else if (type == "consultation") {
                    $('tbody#consultation').html(data);
                } else if (type == "admission") {
                    $('tbody#admission').html(data);
                } else if (type == "laboratory") {
                    $('tbody#laboratory').html(data);
                }
            }
        });
    });

    $(".btn.select_date").click(function () {
        var id = $(this).attr('id');
        var date = "";
        var type = "";
        if ($(this).hasClass('medical')) {
            type = "medical";
            date = $("#medical_select_date").val();
        } else if ($(this).hasClass('consultation')) {
            type = "consultation"
            date = $("#consultation_select_date").val();
        } else if ($(this).hasClass('admission')) {
            type = "admission";
            date = $("#admission_select_date").val();
        } else if ($(this).hasClass('laboratory')) {
            type = "laboratory";
            date = $("#laboratory_select_date").val();
        }
        $.ajax({
            url: "search_file.php",
            method: "post",
            data: { patient: id, date: date, type: type },
            dataType: "text",
            success: function (data) {
                if (type == "medical") {
                    $('tbody#medical').html(data);
                } else if (type == "consultation") {
                    $('tbody#consultation').html(data);
                } else if (type == "admission") {
                    $('tbody#admission').html(data);
                } else if (type == "laboratory") {
                    $('tbody#laboratory').html(data);
                }
            }
        });
    });


    $(".btn.select_all").click(function () {
        var id = $(this).attr('id');
        var type = "";
        if ($(this).hasClass('medical')) {
            type = "medical";
        } else if ($(this).hasClass('consultation')) {
            type = "consultation"
        } else if ($(this).hasClass('admission')) {
            type = "admission";
        } else if ($(this).hasClass('laboratory')) {
            type = "laboratory";
        }

        $.ajax({
            url: "search_file.php",
            method: "post",
            data: { patient: id, type: type },
            dataType: "text",
            success: function (data) {
                if (type == "medical") {
                    $('tbody#medical').html(data);
                    console.log(type);
                } else if (type == "consultation") {
                    $('tbody#consultation').html(data);
                } else if (type == "admission") {
                    $('tbody#admission').html(data);
                } else if (type == "laboratory") {
                    $('tbody#laboratory').html(data);
                }

            }
        });
    });



});
/* Created by jankoatwarpspeed.com */

(function($) {
    $.fn.formToWizard = function(options) {
        options = $.extend({  
            submitButton: "" 
        }, options); 
        
        var element = this;

        var steps = $(element).find("fieldset");
        var count = steps.size();
        var submmitButtonName = "#" + options.submitButton;
        $(submmitButtonName).hide();

        // 2
        $(element).before("<ul id='steps'></ul>");

        steps.each(function(i) {
            $(this).wrap("<div id='step" + i + "'></div>");
            $(this).append("<p id='step" + i + "commands'></p>");

            // 2
            var name = $(this).find("legend").html();
            $("#steps").append("<li id='stepDesc" + i + "'>Step " + (i + 1) + "<span>" + name + "</span></li>");

            if (i == 0) {
                createNextButton(i);
            }
            else if (i == count - 1) {
                $("#step" + i).hide();
                createPrevButton(i);
            }
            else {
                $("#step" + i).hide();
                createPrevButton(i);
                createNextButton(i);
            }
        });

        function createPrevButton(i) {
            var stepName = "step" + i;
            $("#" + stepName + "commands").append("<a href='#' id='" + stepName + "Prev' class='prev'>< Back</a>");
    
            $("#" + stepName + "Next").bind("click", function(e) {
                $("#" + stepName).hide();
                $("#step" + (i + 1)).show();
                if (i + 2 == count)
                    $(submmitButtonName).show();
                selectStep(i + 1);
            });
        }

        function createNextButton(i) {
            var stepName = "step" + i;
            $("#" + stepName + "commands").append("<a href='#' id='" + stepName + "Next' class='next'>Calculate Payment &raquo</a>");
            console.log('shit')
            $("#" + stepName + "Next").bind("click", function(e) {
                nextClick($(this))
                $("#" + stepName).hide();
                $("#step" + (i + 1)).show();
                if (i + 2 == count)
                    $(submmitButtonName).show();
                selectStep(i + 1);
            });
            $('#SaveAccount').bind("click", function () {
                submitClick($(this))
            });
        }

        function selectStep(i) {
            $("#steps li").removeClass("current");
            $("#stepDesc" + i).addClass("current");
        }

        // function nextClick(s) {
        //     console.log('fuck')
        // // $('#next').click(function () {
        //     //console.log('next was clicked')
        //     $("#SignupForm").validate(opt);  //validate whole form
        //     var fsID = s.closest('fieldset').attr('id');        
        //     $('#' + fsID + ' :input').each(function (index, element) {
        //         //iterate through elments in fieldset
        //         console.log('shit')
        //         var eleid = $(element).attr('id');
        //         if (eleid !== 'next' && eleid !== 'submit') {
        //             var valid = $("#SignupForm").validate().element( "#"+eleid );
        //         }
        //     });
        //     return false;
        //     // });
        // }   

    }
})(jQuery); 
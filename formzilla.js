$(document).ready( function() {

    // $.getScript('js/jquery-cookie/jquery.cookie.js', function(data, textStatus, jqXHR) {
    //     console.log(data); //data returned
    //     console.log(textStatus); //success
    //     console.log(jqXHR); //200
    //     console.log('Load was performed.');
    // });
    //validates max-length in real time
    console.log('here i am')

    //need to add method for <select>
    
    /*--------------------------*/
    /* Onkeyup Skip */
    /*--------------------------*/
    /* @todo: select inputs */
    $("input").keyup(function() {
        function retMaxLength(eleID)
        {
            var maxLength=new Array(); 
            maxLength[A_Zip]        =5;       
            maxLength[C_WorkPhone]  =10;
            maxLength[C_WorkPhone1] =3;
            maxLength[C_WorkPhone2] =3;
            maxLength[C_WorkPhone3] =4;
            maxLength[C_WorkPhone]  =10;
            maxLength[C_WorkPhone1] =3;
            maxLength[C_WorkPhone2] =3;
            maxLength[C_WorkPhone3] =4;    
            maxLength[O_Age]        =2;
            maxLength[O_AgeSpouse]  =2;
            return maxlength[eleID];
        }
        var maxlength = retMaxLength(this.id);
        $(this).attr('maxlength', maxlength)
        if (this.value.length >= maxlength) {
            $(this).next().focus()
            this.max
        } else { /* nothing */ }
    });
    //fills out forms based on cookies
    $.each($.cookie(), function (index, item) {
         $('input').each(function() {
            if ($(this).attr('name') == index)
               // $('input').value = item
                $('input[name=' + index + ']').val(item)
        });
    });
    $("input").keyup(function() {
        $.cookie($(this).attr('name'), this.value, { path: '/' })   
    });


    // any fields you wish to ignore, just stick a 'class=ignore' in the input type HTML
    $.validator.setDefaults({ignore: ".ignore"});
}); 

function nextClick(s) {
    $("#SignupForm").validate(opt);  //validate whole form
    var fsID = s.closest('fieldset').attr('id');        
    $('#' + fsID + ' :input').each(function (index, element) {
        //iterate through elments in fieldset
        var eleid = $(element).attr('id');
        if (eleid !== 'next' && eleid !== 'submit') {
            var valid = $("#SignupForm").validate().element( "#"+eleid );
        }
    });
    return false;
} 

function submitClick(s) {
    $('input').each(function (index, element) {
    //iterate through elments in fieldset
        var eleid = $(element).attr('id');
        if (eleid !== 'next' && eleid !== 'submit') {
            var valid = $("#SignupForm").validate().element( "#"+eleid );
            if (valid) {
                console.log (eleid + ' is valid')
            }
        }
    });
    return false;
}
                            
                        // });

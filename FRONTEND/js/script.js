$(document).ready(function(){
    // Comparaison des deux mots de passe et validation du fromulaire si tout est bon
    $('#formBloc').on('submit', function(e){
        e.preventDefault();


        if ($('#inputPassword3').val() != '' )  {

            if ($('#inputPassword3').val() == $('#inputPassword3Confirm').val())  {
                alert('Votre formulaire est valide')
                this.submit();
            }
            else {
                alert('Erreur, les mots de passe ne sont pas identiques')
            }
        }
        else {
            alert('Erreur, le mot de passe ne doit pas etre vide')
        }
    });

    // Suppression automatique des lettres dès leur saisie dans le champ phone
    $("#validationTooltipPhone").keyup(function (event) {
        var check = $.isNumeric($("#validationTooltipPhone").val());  
        if (check) {  
        $( "#validationTooltipPhone" ).addClass( "is-valid" );
        $( "#validationTooltipPhone" ).removeClass( "is-invalid" );
        }
        else {

            $( "#validationTooltipPhone" ).addClass( "is-invalid" );
            $( "#validationTooltipPhone" ).removeClass( "is-valid" );
        }
    });  

    // Suppression automatique des lettres dès leur saisie dans le champ zip
    $("#validationTooltip05").keyup(function (event) {
        var check = $.isNumeric($("#validationTooltip05").val());  
        if (check) {  
        $( "#validationTooltip05" ).addClass( "is-valid" );
        $( "#validationTooltip05" ).removeClass( "is-invalid" );
        }
        else {

            $( "#validationTooltip05" ).addClass( "is-invalid" );
            $( "#validationTooltip05" ).removeClass( "is-valid" );
        }
    }); 
});

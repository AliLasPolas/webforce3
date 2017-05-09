
$('.btnsubmit').on('click', function(){
    event.preventDefault();
    var nom = $('#oblignom').val();
    var prenom = $('#obligprenom').val();
    var adresse = $('#obligadresse').val();
    var postcode = $('#obligpostcode').val();
    if (nom === "") {
        $('#oblignom').closest('div.form-group').addClass('has-error');
    }
    if (prenom === "") {
        $('#obligprenom').closest('div.form-group').addClass('has-error');
    }
    if (adresse === "") {
        $('#obligadresse').closest('div.form-group').addClass('has-error');
    }
    if (postcode === "") {
        $('#obligpostcode').closest('div.form-group').addClass('has-error');
    }
})

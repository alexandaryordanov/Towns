$(document).ready(function () {
    $('#btnDelete').click(deleteTown);
});

function deleteTown() {
    let townName = $('#townName').val(); 
    $('#townName').val(''); 

    let removed = false; 

  
    $('#towns option').each(function () {
        if ($(this).text() === townName) {
            removed = true;
            $(this).remove(); 
        }
    });

   
    if (removed) {
        showMessage(`${townName} deleted.`);
    } else {
        showMessage(`${townName} not found.`);
    }
}

function showMessage(msg) {
   
    $('#result').text(msg).css("display", "block");

   
    setTimeout(function () {
        $('#result').hide('blind', {}, 500);
    }, 3000);
}

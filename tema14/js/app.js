const inregistrareForm = document.forms.inregistrare;
const acordCheck = inregistrareForm.acord;
const buttonSubmit = inregistrareForm.querySelector('button[type="submit"]');

//Termeni si conditii
acordCheck.addEventListener('change', (e) => {
    if(e.target.checked){
        buttonSubmit.removeAttribute('disabled');
    } else{
        buttonSubmit.setAttribute('disabled', 'true');
    }
});



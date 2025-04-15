const inregistrareForm = document.forms.inregistrare;
const acordCheck = inregistrareForm.acord;
const buttonSubmit = inregistrareForm.querySelector('button[type="submit"]');

//Termeni si conditii
acordCheck.addEventListener('change', (e) => {
    if(e.target.checked){
        buttonSubmit.removeAttribute('disabled');
        buttonSubmit.classList.remove('disabled');
    } else{
        buttonSubmit.setAttribute('disabled', 'true');
        buttonSubmit.classList.add('disabled');
    }
});

//Save data
inregistrareForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.nume.value;
    e.target.nume.nextElementSibling.textContent = 
                        name === "" 
                            ? "Completeaza campul nume"
                            : "";
    const data_nasterii = e.target.data_nasterii.value;
    e.target.data_nasterii.nextElementSibling.textContent = 
                        data_nasterii === "" 
                            ? "Completeaza campul data nasterii"
                            : "";
    const localitate = e.target.localitate.value;
    const genul = e.target.genul.value;
    const [,last] = e.target.genul;
    last.parentNode.nextElementSibling.textContent = 
                genul === "" 
                    ? "Completeaza campul genul"
                    : "";
    console.log(name, data_nasterii, localitate, genul);
    inregistrareForm.reset();
});

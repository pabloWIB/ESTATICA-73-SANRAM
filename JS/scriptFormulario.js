// FORMULARIO 

document.getElementById('firstForm').addEventListener('submit', function(event){
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let cellphone = document.getElementById('cellphone').value.trim();
    let city = document.getElementById('city').value.trim();
    let postal = document.getElementById('postal').value.trim();

    let info = 'Nombre y Apellido: ' + name + 
               '\nNúmero telefónico: ' + cellphone + 
               '\nCiudad: ' + city + 
               '\nIntereses de Compra: ' + postal;

    const findErrorsDiv = document.getElementById('findErrorsDiv');  
    findErrorsDiv.innerHTML = '';  

    function createErrorMessage(message) {
        const p = document.createElement('p');
        p.textContent = message;
        p.classList.add('error-p-show');
        return p;
    }

    let hasErrors = false;

    if (name === '') {
        findErrorsDiv.appendChild(createErrorMessage('• Ingrese su nombre y apellidos'));
        hasErrors = true;
    }

    if (cellphone === '') {
        findErrorsDiv.appendChild(createErrorMessage('• Ingrese su número telefónico'));
        hasErrors = true;
    }
   
    if (city === '') {
        findErrorsDiv.appendChild(createErrorMessage('• Ingrese su ciudad'));
        hasErrors = true;
    }

    if (postal === '') {
        findErrorsDiv.appendChild(createErrorMessage('• Seleccione su interés de compra'));
        hasErrors = true;
    }

    if (hasErrors) {
        findErrorsDiv.classList.add('error-div-show');
        findErrorsDiv.classList.remove('error-div-hide');
    } else {
        findErrorsDiv.classList.add('error-div-hide');
        findErrorsDiv.classList.remove('error-div-show');

        console.log(info); 

        let mailtoLink = 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=sanram@gmail.com' + '&body=' + encodeURIComponent(info);
        window.open(mailtoLink, '_blank');
    }
});

// FORMULARIO ---

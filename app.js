const emailInput = document.getElementById('email');
const button = document.getElementById('btn');
const icons = document.querySelectorAll('i');
let newP; // Declarar newP fuera del alcance de la función del botón

icons.forEach(icon => {
    icon.addEventListener('click', changeState);
});

function changeState(e) {
    const icon = e.target;
    icon.classList.toggle('normal-state');
    icon.classList.toggle('active-state');
}

function validateEmail(enteredEmail) {
    const myReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return myReg.test(enteredEmail);
}

const form = document.getElementById('form');

button.addEventListener('click', (event) => {
    event.preventDefault(); // Prevenir el envío del formulario

    const enteredEmail = emailInput.value; // Capturar el valor del email dentro del event listener
    const existingMessage = document.querySelector('.alert-message');

    // Remover el mensaje de alerta existente si existe
    if (existingMessage) {
        existingMessage.remove();
    }

    if (!validateEmail(enteredEmail)) {
        emailInput.style.outline = '1px solid red';
        emailInput.style.color = 'var(--very-dark-blue)';
        emailInput.style.fontWeight = '100';
        newP = document.createElement('p');
        newP.innerText = 'Please provide a valid email address';
        newP.classList.add('alert-message');
        form.append(newP);
    } else {
        emailInput.value = '';
        emailInput.style.outline = '';
        // Si existe newP, eliminarlo
        if (newP) {
            newP.remove();
        }
    }
});


const inputEmail = document.getElementById('input-email');
const button = document.getElementById('btn');
const container = document.getElementById('container');
const alertMessageContainer = document.getElementById('message');
const newContainer = document.getElementById('new-container');


const colors = {
    tomato: 'hsl(4, 100%, 67%)',
    darkSlateGrey: 'hsl(234, 29%, 20%)',
    charcoalGrey: 'hsl(235, 18%, 26%)',
    grey: 'hsl(231, 7%, 60%)',
    lightGrey: 'hsl(225, 4%, 81%)',
    white: 'hsl(0, 0%, 100%)',
    lightTomato: 'hsl(13, 100%, 93%)'
};

button.disabled = false;

function validateEmail(email) {
    let myReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return myReg.test(email);
}

inputEmail.addEventListener('input', (e) => {
    if (inputEmail.value) {
        inputEmail.style.color = colors.charcoalGrey;
        inputEmail.style.backgroundColor = colors.white; // Restaura el fondo blanco
        inputEmail.style.borderColor = colors.lightGrey; // Restaura el borde gris claro
        button.disabled = false;
    }
});

button.addEventListener('click', (e) => {
    e.preventDefault(); // Evita que se envíe el formulario por defecto

    
    const email = inputEmail.value;
    const existingMessage = document.querySelector('.error-message');
    
    if (!validateEmail(email)) {
        inputEmail.style.color = colors.tomato;
        inputEmail.style.backgroundColor = colors.lightTomato;
        inputEmail.style.borderColor = colors.tomato;
        
        const alertMessage = document.createElement('h6');
        alertMessageContainer.appendChild(alertMessage);
        alertMessage.classList.add('error-message');
        alertMessage.innerText = 'Valid email required';
        alertMessage.style.color = colors.tomato;
        button.disabled = true;

        
        if(existingMessage) {
            existingMessage.remove();
            
        }
                
    } else {
        container.remove('normal-container');
        newContainer.classList.remove('hidden');
        newContainer.classList.add('success-container');
        button.disabled = false;
    }

});

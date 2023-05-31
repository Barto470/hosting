const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});

// Obtener los elementos del formulario de inicio de sesión
const signInForm = document.querySelector('.sign-in form');
const emailInput = signInForm.querySelector('input[type="email"]');
const passwordInput = signInForm.querySelector('input[type="password"]');
const signInButton = signInForm.querySelector('input[type="button"]');

// Agregar evento click al botón de inicio de sesión
signInButton.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    // Validar el usuario por defecto
    if (email === 'USER' && password === 'INVITADO') {
        // Redireccionar al usuario a la página de inicio después del inicio de sesión exitoso
        window.location.href = 'index.html';
    } else {
        // Mostrar un mensaje de error si las credenciales son incorrectas
        alert('Credenciales incorrectas. Por favor, intenta nuevamente.');
    }
});


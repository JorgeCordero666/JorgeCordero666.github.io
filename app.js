const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const userEmail = document.getElementById('user-email');

const auth = firebase.auth();

// Iniciar sesión con Google
loginBtn.addEventListener('click', () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      userEmail.textContent = user.email;
      console.log('Usuario autenticado:', user);
    })
    .catch((error) => {
      console.error('Error de inicio de sesión:', error);
    });
});

// Cerrar sesión
logoutBtn.addEventListener('click', () => {
  auth.signOut()
    .then(() => {
      userEmail.textContent = '';
      console.log('Sesión cerrada');
    })
    .catch((error) => {
      console.error('Error al cerrar sesión:', error);
    });
});

// Observador de cambios en la autenticación
auth.onAuthStateChanged((user) =>

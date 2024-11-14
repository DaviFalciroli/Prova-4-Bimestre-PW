
function carregarUsuarios() {
    return fetch('users.json')
        .then(response => response.json())
        .then(data => data.usuarios)
        .catch(error => {
            console.error('Erro ao carregar o arquivo JSON:', error);
            return [];
        });
}


async function validarLogin(email, senha) {
    const usuarios = await carregarUsuarios();

    // console.log(carregarUsuarios)

    const usuario = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);

    if (usuario) {

        window.location.href = "paginapdf.html";
    } else {

        alert("E-mail ou senha incorretos!");
    }
}


const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    validarLogin(email, senha);
});

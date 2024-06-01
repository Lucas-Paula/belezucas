document.addEventListener('DOMContentLoaded', function () {
    const menuCheckbox = document.getElementById('menu');
    const overlay = document.querySelector('.overlay');
    const listaMenu = document.querySelector('.lista-menu');
    const perfilInfo = document.getElementById('info-perfil');

    overlay.addEventListener('click', function () {
        menuCheckbox.checked = false;
    });

    document.addEventListener('click', function(event) {
        if (!listaMenu.contains(event.target) && !menuCheckbox.contains(event.target)) {
            menuCheckbox.checked = false;
        }
    });

    function createLogoffButton() {
        const logoffButton = document.createElement('button');
        logoffButton.textContent = 'Sair';
        logoffButton.classList.add('botao__logoff');
        logoffButton.addEventListener('click', () => {
            localStorage.clear();
            alert('Você saiu da sua conta.');
            updatePerfilInfo();
        });
        return logoffButton;
    }

    function updatePerfilInfo() {
        const nomeUsuario = localStorage.getItem('nome');
        if (nomeUsuario) {
            perfilInfo.innerHTML = `<p class="boas-vindas">Bem vindo(a), ${nomeUsuario}<br><br></p>`;
            perfilInfo.appendChild(createLogoffButton());
        } else {
            perfilInfo.innerHTML = `<a class="acesso__conta" href="./pages/login.html">Acessar minha conta</a>`;
        }
    }

    updatePerfilInfo();
});

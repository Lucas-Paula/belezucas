document.addEventListener('DOMContentLoaded', () => {
    const enviarButton = document.getElementById('enviar');
    const emailField = document.getElementById('email');

    // Adiciona um ouvinte de evento de keydown para capturar a tecla "Enter"
    emailField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Impede o comportamento padrão do Enter
            enviarButton.click(); // Simula o clique no botão de envio
        }
    });

    enviarButton.addEventListener('click', function() {
        const email = document.getElementById('email').value;
        const emailField = document.getElementById('email');

        if (emailField.checkValidity()) {
            if (localStorage.getItem(email)) {
                mostrarCampoSenha();
            } else {
                mostrarCamposCadastro();
            }
        } else {
            alert('Por favor, digite um e-mail válido.');
        }
    });

    function mostrarCampoSenha() {
        const form = document.querySelector('.principal__formulario');
        const emailFieldset = document.getElementById('email-fieldset');
        emailFieldset.style.display = 'none';
        
        const passwordFieldset = document.createElement('fieldset');
        passwordFieldset.className = 'formulario__campo';
        passwordFieldset.innerHTML = `
            <label class="campo__etiqueta" for="password">Senha</label>
            <input name="password" id="password" class="campo__escrita" type="password" minlength="6" required />
            <span class="mensagem-erro"></span>
        `;
        form.appendChild(passwordFieldset);
        
        const enviarButton = document.getElementById('enviar');
        enviarButton.value = 'Entrar';
        enviarButton.type = 'submit';
        
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const password = document.getElementById('password').value;
            const storedPassword = localStorage.getItem(email + '_password');
            
            if (password === storedPassword) {
                alert('Login realizado com sucesso!');
                window.location.href = 'index.html';
            } else {
                alert('Senha incorreta. Tente novamente.');
            }
        }, { once: true });
    }

    function mostrarCamposCadastro() {
        const form = document.querySelector('.principal__formulario');
        const emailFieldset = document.getElementById('email-fieldset');
        emailFieldset.style.display = 'none';

        if (!document.getElementById('nome')) {
            const nameFieldset = document.createElement('fieldset');
            nameFieldset.className = 'formulario__campo';
            nameFieldset.innerHTML = `
                <label class="campo__etiqueta" for="nome">Nome</label>
                <input name="nome" id="nome" class="campo__escrita" type="text" minlength="2" required />
                <span class="mensagem-erro"></span>
            `;
            form.appendChild(nameFieldset);

            const sNameFieldset = document.createElement('fieldset');
            sNameFieldset.className = 'formulario__campo';
            sNameFieldset.innerHTML = `
                <label class="campo__etiqueta" for="sobrenome">Sobrenome</label>
                <input name="sobrenome" id="sobrenome" class="campo__escrita" type="text" minlength="3" required />
                <span class="mensagem-erro"></span>
            `;
            form.appendChild(sNameFieldset);

            const cpfFieldset = document.createElement('fieldset');
            cpfFieldset.className = 'formulario__campo';
            cpfFieldset.innerHTML = `
                <label class="campo__etiqueta" for="cpf">CPF</label>
                <input name="cpf" id="cpf" class="campo__escrita" type="text" minlength="11" required />
                <span class="mensagem-erro"></span>
            `;
            form.appendChild(cpfFieldset);

            const dobFieldset = document.createElement('fieldset');
            dobFieldset.className = 'formulario__campo';
            dobFieldset.innerHTML = `
                <label class="campo__etiqueta" for="dob">Data de Nascimento</label>
                <input name="dob" id="dob" class="campo__escrita" type="date" required />
                <span class="mensagem-erro"></span>
            `;
            form.appendChild(dobFieldset);

            const passwordFieldset = document.createElement('fieldset');
            passwordFieldset.className = 'formulario__campo';
            passwordFieldset.innerHTML = `
                <label class="campo__etiqueta" for="password">Senha</label>
                <input name="password" id="password" class="campo__escrita" type="password" minlength="6" required />
                <span class="mensagem-erro"></span>
            `;
            form.appendChild(passwordFieldset);

            const enviarButton = document.getElementById('enviar');
            enviarButton.value = 'Cadastrar';
            enviarButton.type = 'submit';

            form.addEventListener('submit', function(event) {
                event.preventDefault();
                const nome = document.getElementById('nome').value;
                const cpf = document.getElementById('cpf').value;
                const dob = document.getElementById('dob').value;
                const password = document.getElementById('password').value;

                localStorage.setItem('email', email);
                localStorage.setItem('nome', nome);
                localStorage.setItem('cpf', cpf);
                localStorage.setItem('dob', dob);
                localStorage.setItem(email + '_password', password);

                alert('Cadastro realizado com sucesso!');
                window.location.href = '../index.html';
            }, { once: true });
        }
    }
});

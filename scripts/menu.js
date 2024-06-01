document.addEventListener('DOMContentLoaded', () => {
  const carrinhoContainer = document.getElementById('carrinho-container');
  const perfilContainer = document.getElementById('perfil-container');
  const carrinhoVazio = document.getElementById('carrinho-vazio');
  const perfilInfo = document.getElementById('perfil-info');

  
  function showElement(element, container) {
      const rect = container.getBoundingClientRect();
      element.style.top = `${rect.bottom + window.scrollY}px`;
      element.style.left = `${rect.left + window.scrollX}px`;
      element.style.display = 'block';
  }

  function showElement(element, container) {
    const rect = container.getBoundingClientRect();
    element.style.top = `${rect.bottom + window.scrollY}px`;
    element.style.left = `${rect.left + window.scrollX}px`;
    element.style.display = 'block';

    const infoBoxRect = element.getBoundingClientRect();


    const overflowRight = infoBoxRect.right > window.innerWidth;
    if (overflowRight) {

        const shiftLeft = infoBoxRect.right - window.innerWidth + 20; 
        element.style.left = `${rect.left + window.scrollX - shiftLeft}px`;
    }

    const overflowLeft = infoBoxRect.left < 0;
    if (overflowLeft) {

        element.style.left = `20px`;
    }
}


  function hideElement(element) {
      element.style.display = 'none';
  }

  function createLogoffButton() {
      const logoffButton = document.createElement('button');
      logoffButton.textContent = 'Sair';
      logoffButton.classList.add('botao__logoff');
      logoffButton.addEventListener('click', () => {
          localStorage.clear();
          alert('Você saiu da sua conta.');
          perfilInfo.innerHTML = `<a class="acesso__conta" href="./pages/login.html">Acessar minha conta</a>`;
      });
      return logoffButton;
  }

  carrinhoContainer.addEventListener('mouseover', () => showElement(carrinhoVazio, carrinhoContainer));
  carrinhoContainer.addEventListener('mouseout', () => hideElement(carrinhoVazio));

  perfilContainer.addEventListener('mouseover', () => {
      const nomeUsuario = localStorage.getItem('nome');
      if (nomeUsuario) {
          perfilInfo.innerHTML = `<p class="boas-vindas">Bem vindo(a), ${nomeUsuario}<br></p>`;
          perfilInfo.appendChild(createLogoffButton());
      } else {
          perfilInfo.innerHTML = `<a class="acesso__conta" href="./pages/login.html">Acessar minha conta</a>`;
      }
      showElement(perfilInfo, perfilContainer);
  });
  perfilContainer.addEventListener('mouseout', () => hideElement(perfilInfo));

  perfilContainer.addEventListener('mouseout', () => hideElement(perfilInfo));
  perfilInfo.addEventListener('mouseover', () => showElement(perfilInfo, perfilContainer));
  perfilInfo.addEventListener('mouseout', () => hideElement(perfilInfo));
});

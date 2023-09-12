// Variável que armazena o container da Navbar.
var container_navbar = document.getElementById('container-navbar')
// Variável que armazena o botão que irá exibir a Navbar no modo responsivo.
var btn_navbar = document.getElementById('botao-navbar')

// Função que irá exibir ou esconder a Navbar quando foi clicado.
btn_navbar.addEventListener('click', exibirNavbar)
function exibirNavbar() {
    container_navbar.classList.toggle('exibir-navbar')
}

// Variável que armazena o conteúdo da página abaixo da Navbar.
var container_conteudo = document.getElementById('container')

// Função que irá esconder a Navbar quando o click foi fora da área dela.
container_conteudo.addEventListener('click', esconderNavbar)
function esconderNavbar() {
    container_navbar.classList.remove('exibir-navbar')
}
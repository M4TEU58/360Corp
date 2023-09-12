// Variável que armazena o container da Navbar.
var container_navbar = document.getElementById('container-navbar')
// Variável que armazena todos os link da Navbar.
var navbar_links = document.querySelectorAll('.navbar-item-link')

// Função que irá separar cada link individual, que depois vai rolar a página até a respectiva seção.
navbar_links.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault()
        var id = e.currentTarget.getAttribute('href')
        var area = document.querySelector(id)
        var posicao_atual = area.offsetTop
        

        window.scroll({
            top: posicao_atual,
            behavior: 'smooth'
        })

        setTimeout(function() {
            container_navbar.classList.remove('exibir-navbar')
        }, 780)
    })
})

// Variável que armazena o botão para subir a página.
var btn_subir = document.getElementById('botao-subir')

// Função que irá rolar a página até o topo.
btn_subir.addEventListener('click', subirPagina)
function subirPagina() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
}
// Quando a página for recaregada, ele irá executar a função subirPagina().
window.addEventListener('DOMContentLoaded', subirPagina)
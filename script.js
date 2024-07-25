document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = e.clientX + 'px'; // Use e.clientX para obter a posição horizontal do mouse na janela visível
    cursor.style.top = e.clientY + 'px'; // Use e.clientY para obter a posição vertical do mouse na janela visível
});

function toggleActive(element) {
    // Seleciona todos os elementos com a classe 'projects-card'
    const elements = document.querySelectorAll('.projects-card');
    
    // Remove a classe 'active' de todos os elementos
    elements.forEach(el => el.classList.remove('active'));
    
    // Adiciona a classe 'active' ao elemento clicado
    element.classList.add('active');
}

function scrollBanner() {
    var scrollPos;
    var headerText = document.querySelector('.paralax .apresentation');
    scrollPos = window.scrollY;
  
    if (scrollPos <= 600) {
      headerText.style.transform = "translateY(" + (-scrollPos / 3) + "px" + ")";
      headerText.style.opacity = 1 - (scrollPos / 600);
    }
  }
  window.addEventListener('scroll', scrollBanner);
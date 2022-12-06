var menuIcon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul');

menuIcon.addEventListener('click',()=>{

    if (ul.classList.contains('ativo')){
        ul.classList.remove('ativo');
        document.querySelector('.menu-icon img').src ='img/menu.png'
    }else{
        ul.classList.add('ativo');
        document.querySelector('.menu-icon img').src ='img/close.png'
    }
    
})





const scrollToTopButton = document.getElementById('js-top');


const scrollFunc = () => {
 
  let y = window.scrollY;
  
 
  if (y > 0) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {

  const c = document.documentElement.scrollTop || document.body.scrollTop;
  
 // Se esse número for maior que 0, rolaremos de volta para 0 ou para o início do documento.
  // Também animaremos esse scroll com requestAnimationFrame:
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    // ScrollTo pega uma coordenada x e uma y.
    // Aumente o valor '50' para obter uma rolagem mais suave/lenta!
    window.scrollTo(0, c - c /20);
  }
};

// Quando o botão for clicado, execute nossa função ScrolltoTop acima!
scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}
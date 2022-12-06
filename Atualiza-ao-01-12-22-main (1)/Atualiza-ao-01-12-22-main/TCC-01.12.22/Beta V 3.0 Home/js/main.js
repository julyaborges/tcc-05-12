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



'use strict';

const images = [
    { 'id': '1', 'url':'./img/Slide2.jpeg' },
    { 'id': '2', 'url':'./img/Slide1.jpeg' },
    { 'id': '3', 'url':'./img/Slide3.jpeg'  },
    
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);






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
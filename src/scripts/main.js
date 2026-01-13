import Swal from 'sweetalert2';
import '../assets/css/cookieconsent.css';

// Imports condicionals
// Carrego l'script només si trobo algún nom de classe corresponent a la pàgina.
// Així no carrego tot el JS a totes les pàgines
// Per exemple, a les pàgines de detall, el Glightbox no s'utilitza, no es carrega l'script
// el mateix cas amb flags de la pàgina Links

if (document.querySelector('.glightbox')) {
  Promise.all([
    import('glightbox'),
    import('glightbox/dist/css/glightbox.css')
  ]).then(([module]) => {

    const GLightbox = module.default || module;
    const lightbox = GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
      zoomable: true,
      autoplayVideos: false
    });
  }).catch(err => console.error("Error carregant GLightbox", err));
}

if (document.querySelector('lite-youtube')) {
  import('lite-youtube-embed');
  import('lite-youtube-embed/src/lite-yt-embed.css');
}

if (document.querySelector('.fi')) {
  import('npm:flag-icons/css/flag-icons.min.css');
}

document.querySelectorAll(".popup-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    Swal.fire({
      title: this.dataset.title || "Missatge",
      text: this.dataset.text || "Acció no disponible.",
      icon: this.dataset.icon || "info",
      confirmButtonText: "OK"
    });
  });
});
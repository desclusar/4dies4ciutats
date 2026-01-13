import GLightbox from "glightbox";
import Swal from 'sweetalert2'
import 'lite-youtube-embed';
import 'lite-youtube-embed/src/lite-yt-embed.css';

const lightbox = GLightbox({
  selector: '.glightbox',
  touchNavigation: true,
  loop: true,
  zoomable: true,
  autoplayVideos: false
});

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
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import Swal from 'sweetalert2'
import "flag-icons/css/flag-icons.min.css";

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
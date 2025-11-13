//import Swal from "sweetalert2/dist/sweetalert2.js";

document.querySelectorAll(".popup-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const url = this.href;

    Swal.fire({
      title: "Error!",
      text: "Do you want to continue",
      icon: "error",
      confirmButtonText: "Cool",
    });
  });
});

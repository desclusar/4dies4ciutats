// Marca l’enllaç corresponent com actiu
const classes = Array.from(document.body.classList);
let currentPage = classes.find((c) =>
  ["home", "cat-nadal", "cat-primavera", "cat-estiu", "cat-tardor"].includes(c)
);

if (!currentPage) {
  if (
    classes.some((c) =>
      ["det-londres", "det-tallinn", "det-praga", "det-bruges"].includes(c)
    )
  ) {
    currentPage = "cat-nadal";
  }

  if (
    classes.some((c) =>
      ["det-roma", "det-lisboa", "det-amsterdam", "det-sevilla"].includes(c)
    )
  ) {
    currentPage = "cat-primavera";
  }

  if (
    classes.some((c) =>
      ["det-reykjavik", "det-dubrovnik", "det-edimburg", "det-santorini"].includes(c)
    )
  ) {
    currentPage = "cat-estiu";
  }

  if (
    classes.some((c) =>
      ["det-budapest", "det-munic", "det-krakovia"].includes(c)
    )
  ) {
    currentPage = "cat-tardor";
  }
}
if (currentPage) {
  document.querySelectorAll("header nav a").forEach((a) => {
    if (a.dataset.page === currentPage) {
      a.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const slogan = document.querySelector(".slogan");
  if (!slogan) return;

  // Normalitzem el path per evitar problemes amb index.html i barres finals
  let path = window.location.pathname;
  path = path.replace(/index\.html$/i, "").replace(/\/$/, "");

  const slogans = {
    "/categoria": "llum i tradició a les ciutats del Nadal europeu",

    "/det1": "Londres: elegància i llums d’hivern",
    "/det2": "Praga: encant i tradició nadalenca",
    "/det3": "Tallinn: l’hivern més autèntic del nord",
    "/det4": "Bruges: el Nadal als canals flamencs",

    "/categoria2": "llum, flors i tradicions de primavera",
    "/det5": "Roma: història i espiritualitat en flor",
    "/det6": "Lisboa: brisa atlàntica i llum infinita",
    "/det7": "Amsterdam: tulipes, canals i bicicleta",
    "/det8": "Sevilla: art, tarongers i Setmana Santa",

    "/categoria3": "viure l’estiu amb llum i llibertat",
    "/det9": "Reykjavík: sota el sol de mitjanit",
    "/det10": "Dubrovnik: muralles i mar adriàtic",
    "/det11": "Edimburg: cultura i festivals sota el sol del nord",
    "/det12": "Santorini: llum, mar i silenci grec",

    "/categoria4": "redescobrir Europa amb calma i colors de tardor",
    "/det13": "Budapest: banys i llum daurada sobre el Danubi",
    "/det14": "Munic: cervesa, fulles i tradició bavaresa",
    "/det15": "París: la ciutat de la llum en tons daurats",
    "/det16": "Krakòvia: història i silenci de tardor"
  };

  // Busquem coincidència exacta al final del path (robust per det10, det11, etc.)
  const found = Object.keys(slogans)
    .sort((a, b) => b.length - a.length) // prioritza claus més llargues
    .find((key) => {
      const pattern = new RegExp(`${key}(?:/index\\.html)?/?$`);
      return pattern.test(path);
    });

  const text = found
    ? slogans[found]
    : "Descobreix ciutats europees en només 96 hores";

  // Assignem text i apliquem transició suau
  slogan.textContent = text;

  // Forcem el repaint i després afegim la classe perquè la transició funcioni
  // (això evita que surti ja en opacitat 1 sense animació)
  requestAnimationFrame(() => {
    slogan.classList.add("slogan-visible");
  });
});

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
const header = document.querySelector("#main-header");
const dropdownLinks = document.querySelectorAll(".dropdown > a");

if (navToggle && mainNav && header) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

    // 👇 Afegim o traiem la classe al header
    header.classList.toggle("menu-open", isOpen);
  });
}

// Submenús en mòbil
dropdownLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (window.innerWidth < 768) {
      //e.preventDefault();
      link.parentElement.classList.toggle("is-open");
    }
  });
});

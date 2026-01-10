//*************** .ACTIVE DINÀMICAMENT ************************/
const classes = Array.from(document.body.classList);
let currentPage = classes.find((c) =>
  ["home", "cat-nadal", "cat-primavera", "cat-estiu", "cat-tardor", "links"].includes(c)
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
      ["det-budapest", "det-munic", "det-paris", "det-krakovia"].includes(c)
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

//*************** CANVI DE SLÒGAN DINÀMIC ************************/

document.addEventListener("DOMContentLoaded", () => {
  const slogan = document.querySelector(".slogan");
  if (!slogan) return;

  // Normalitzo el path per evitar problemes amb index.html i barres finals
  let path = window.location.pathname;
  path = path.replace(/index\.html$/i, "").replace(/\/$/, "");

  const slogans = {
    "/categoria": "llum i tradició a les ciutats del Nadal europeu",

    "/det1": "Londres: elegància i llums d’hivern",
    "/det2": "Tallinn: l’hivern més autèntic del nord",
    "/det3": "Praga: encant i tradició nadalenca",
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
    "/det16": "Krakòvia: història i silenci de tardor",

    "/links": "Enllaços d'interès"
  };

  // Busco coincidència exacta al final del path
  const found = Object.keys(slogans)
    .sort((a, b) => b.length - a.length)
    .find((key) => {
      const pattern = new RegExp(`${key}(?:/index\\.html)?/?$`);
      return pattern.test(path);
    });

  const text = found
    ? slogans[found]
    : "Descobreix ciutats europees en només 96 hores";

  slogan.textContent = text;

  requestAnimationFrame(() => {
    slogan.classList.add("slogan-visible");
  });
});


//*************** MENÚ NAVEGACIÓ ************************/

const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
const header = document.querySelector("#main-header");
const dropdownLinks = document.querySelectorAll(".dropdown > a");

if (navToggle && mainNav && header) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

    header.classList.toggle("menu-open", isOpen);
  });
}

dropdownLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (window.innerWidth < 768) {
      link.parentElement.classList.toggle("is-open");
    }
  });
});
const headerImages = {
  'cat-nadal': {
    mobile: new URL('/src/assets/img/cat-nadal_mobile.jpg', import.meta.url).href,
    desktop: new URL('/src/assets/img/cat-nadal.jpg', import.meta.url).href
  },
  'det-londres': {
    mobile: new URL('/src/assets/img/header_nadal.jpg', import.meta.url).href,
    desktop: new URL('/src/assets/img/header_nadal.jpg', import.meta.url).href
  },
  'det-praga': {
    mobile: new URL('/src/assets/img/det_hd_praga.jpg', import.meta.url).href,
    desktop: new URL('/src/assets/img/det_hd_praga.jpg', import.meta.url).href
  },
  'det-tallinn': {
    mobile: new URL('/src/assets/img/det_hd_tallinn.jpg', import.meta.url).href,
    desktop: new URL('/src/assets/img/det_hd_tallinn.jpg', import.meta.url).href
  },
  'det-bruges': {
    mobile: new URL('/src/assets/img/det-bruges_mobile.jpg', import.meta.url).href,
    desktop: new URL('/src/assets/img/det-bruges.jpg', import.meta.url).href
  },
  'cat-primavera': {
    mobile: new URL('/src/assets/img/primavera-header.jpg', import.meta.url).href,
    desktop: new URL('/src/assets/img/primavera-header.jpg', import.meta.url).href
  },
  'det-roma': {
    mobile: new URL('/src/assets/img/primavera-roma.jpg', import.meta.url).href,
    desktop: new URL('/src/assets/img/primavera-roma.jpg', import.meta.url).href
  },
  'det-lisboa': {
    mobile: new URL('/src/assets/img/primavera-lisboa.jpg', import.meta.url).href,
    desktop: new URL('/src/assets/img/primavera-lisboa.jpg', import.meta.url).href
  },
  'det-amsterdam': {
    mobile: new URL('/src/assets/img/primavera-amsterdam.jpg', import.meta.url).href,
    desktop: new URL('/src/assets/img/primavera-amsterdam.jpg', import.meta.url).href
  },
  'det-sevilla': {
    mobile: new URL('/src/assets/img/primavera-sevilla.jpg', import.meta.url).href,
    desktop: new URL('/src/assets/img/primavera-sevilla.jpg', import.meta.url).href
  },
  'cat-estiu': {
    mobile: new URL('/src/assets/img/estiu-header.jpg', import.meta.url).href,
    desktop: new URL('/src/assets/img/estiu-header.jpg', import.meta.url).href
  },
  'det-reykjavik': {
    mobile: new URL('/src/assets/img/estiu-reykjavik.jpg', import.meta.url).href,
    desktop: new URL('/src/assets/img/estiu-reykjavik.jpg', import.meta.url).href
  },
  'det-dubrovnik': {
    mobile: new URL('/src/assets/img/estiu-dubrovnik.jpg', import.meta.url).href,
    desktop: new URL('/src/assets/img/estiu-dubrovnik.jpg', import.meta.url).href
  },
  'det-edimburg': {
    mobile: new URL('/src/assets/img/estiu-edimburg.jpg', import.meta.url).href,
    desktop: new URL('/src/assets/img/estiu-edimburg.jpg', import.meta.url).href
  },
  'det-santorini': {
    mobile: new URL('/src/assets/img/estiu-santorini.jpg', import.meta.url).href,
    desktop: new URL('/src/assets/img/estiu-santorini.jpg', import.meta.url).href
  },
  'cat-tardor': {
    mobile: new URL('/src/assets/img/tardor-header.jpg', import.meta.url).href,
    desktop: new URL('/src/assets/img/tardor-header.jpg', import.meta.url).href
  },
  'det-budapest': {
    mobile: new URL('/src/assets/img/tardor-budapest.jpg', import.meta.url).href,
    desktop: new URL('/src/assets/img/tardor-budapest.jpg', import.meta.url).href
  },
  'det-munic': {
    mobile: new URL('/src/assets/img/tardor-munic.jpg', import.meta.url).href,
    desktop: new URL('/src/assets/img/tardor-munic.jpg', import.meta.url).href
  },
  'det-paris': {
    mobile: new URL('/src/assets/img/tardor-paris.jpg', import.meta.url).href,
    desktop: new URL('/src/assets/img/tardor-paris.jpg', import.meta.url).href
  },
  'det-krakovia': {
    mobile: new URL('/src/assets/img/tardor-krakovia.jpg', import.meta.url).href,
    desktop: new URL('/src/assets/img/tardor-krakovia.jpg', import.meta.url).href
  },
  'default': { // Per si falla o és la home
    mobile: new URL('/src/assets/img/londres_mobile.jpg', import.meta.url).href,
    desktop: new URL('/src/assets/img/londres.jpg', import.meta.url).href
  }
};

function setHeaderImage() {
  const bodyClassList = document.body.classList;
  let currentKey = 'default';

  // Busco quina classe del body coincideix 
  for (const key in headerImages) {
    if (bodyClassList.contains(key)) {
      currentKey = key;
      break;
    }
  }

  const mobileSource = document.getElementById('bg-mobile');
  const desktopImg = document.getElementById('bg-desktop');

  if (mobileSource && desktopImg) {

    desktopImg.classList.remove('is-loaded');
    desktopImg.onload = () => {
      desktopImg.classList.add('is-loaded');
    };

    mobileSource.srcset = headerImages[currentKey].mobile;
    desktopImg.src = headerImages[currentKey].desktop;
    desktopImg.alt = `Imatge de capçalera de ${currentKey.replace('det-', '')}`;

    if (desktopImg.complete) {
      desktopImg.classList.add('is-loaded');
    }
  }
}

document.addEventListener('DOMContentLoaded', setHeaderImage);
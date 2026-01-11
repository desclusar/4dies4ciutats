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
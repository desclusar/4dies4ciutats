function iniciarAnimacioHeader() {
    const desktopImg = document.getElementById('bg-desktop');
    const mainHeader = document.getElementById('main-header') || document.querySelector('header');

    if (desktopImg && mainHeader) {
        const showImage = () => {
            desktopImg.classList.add('is-loaded');
            mainHeader.classList.add('is-loaded');
        };

        if (desktopImg.complete) {
            showImage();
        } else {
            desktopImg.onload = showImage;
        }
    }
}

iniciarAnimacioHeader();
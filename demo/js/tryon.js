import QrCreator from 'https://cdn.jsdelivr.net/npm/qr-creator/dist/qr-creator.es6.min.js'

const tryon = document.querySelector('#tryon');
const qr = document.querySelector('#qr'); // Container id

const pageURL = window.location.href // Triggered page

const modelURL = 'demo/111.reality' // Relative model path
const modelScaling = '1' // Allow scaling model in VR

const bannerSize = 'small' // AR Banner height
const bannerURL = 'https://www.lesslens.com/demo/banner.html' // Banner
const bannerLink = 'https://apps.apple.com/app/apple-store/id1535675035?pt=122143363&ct=landing&mt=8'

const href = modelURL + '#allowsContentScaling=' + modelScaling + '&custom=' + bannerURL + '&customHeight=' + bannerSize + '&canonicalWebPageURL=' + pageURL

const modal = document.querySelector('#qr-modal')
modal.id = 'tryon-modal'
modal.style.display = 'none'

tryon.style.display = 'none'
qr.style.display = 'none'

if( /iPhone|iPad/i.test(navigator.userAgent) && /AppleWebKit/i.test(navigator.userAgent)) {

    tryon.style.display = 'flex'

    const img = document.createElement('img')

    tryon.id = 'ar';
    tryon.rel='ar';
    tryon.href = href;
    tryon.appendChild(img);

    tryon.addEventListener("message", function (event) { 
    if (event.data == "_apple_ar_quicklook_button_tapped") {
        window.location.href = bannerLink ;
    }
    }, false);

    const params = new URLSearchParams( window.location.search );

    if (params.has("show_ar")) {
        document.getElementById(tryon.id).click();
    }


} else {

    qr.style.display = 'flex'

    qr.onclick = () => { modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex' };
    qr.appendChild(modal);


    new QrCreator.render({
        text: pageURL + '?show_ar',
        radius: 0, // 0.0 to 0.5
        ecLevel: 'H', // L, M, Q, H
        fill: '#000000', // foreground color
        background: '#FFFFFF', // color or null for transparent
        size: 300 // in pixels
      }, document.querySelector('#qr-code') );
    
}

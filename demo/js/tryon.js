import QrCreator from 'https://cdn.jsdelivr.net/npm/qr-creator/dist/qr-creator.es6.min.js'

const tryon = document.getElementById('tryon'); // Container id

const pageURL = window.location.href // Triggered page

const modelURL = 'demo/111.reality' // Relative model path
const modelScaling = '1' // Allow scaling model in VR

const bannerSize = 'medium' // AR Banner height
const bannerURL = 'https://www.lesslens.com/demo/banner.html' // Banner
const bannerLink = 'https://apps.apple.com/app/apple-store/id1535675035?pt=122143363&ct=landing&mt=8'

const href = modelURL + '#allowsContentScaling=' + modelScaling + '&custom=' + bannerURL + '&customHeight=' + bannerSize + '&canonicalWebPageURL=' + pageURL

if( /iPhone|iPad/i.test(navigator.userAgent) && /AppleWebKit/i.test(navigator.userAgent)) {

    const a = document.createElement('a');
    const img = document.createElement('img')

    a.innerHTML = 'Virtual Try-on';
    a.id = 'tryon_link';
    a.rel='ar';
    a.href = href;
    tryon.appendChild(a);
    a.appendChild(img);

    a.addEventListener("message", function (event) { 
    if (event.data == "_apple_ar_quicklook_button_tapped") {
        window.location.href = bannerLink ;
    }
    }, false);

    const params = new URLSearchParams( pageURL );

    if (params.has("show_ar")) {
        document.getElementById(a.id).click();
    }


} else {

    new QrCreator.render({
        text: pageURL + '?show_ar',
        radius: 0, // 0.0 to 0.5
        ecLevel: 'M', // L, M, Q, H
        fill: '#000000', // foreground color
        background: '#FFFFFF', // color or null for transparent
        size: 200 // in pixels
      }, tryon );
    
}

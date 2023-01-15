<svelte:head>
  <title>LessLens - Discover a new way to choose glasses</title>
  <meta property="og:title" content="LessLens - Discover a new way to choose glasses">
  <meta property="og:type" content="product">
  <meta property="og:site_name" content="LessLens">
  <meta name="twitter:site" content="@less-lens">
  <meta name="twitter:creator" content="@less-lens">
  <meta property="og:url" content="https://lesslens.com/">

  <meta property="og:url" content="https://lesslens.com/">
  <meta property="og:description" content="LessLens is a smart home trial app that allows you to try on and purchase your favorite glasses and sunglasses without leaving the comfort of your home.">
  <meta name="description" content="LessLens is a smart home trial app that allows you to try on and purchase your favorite glasses and sunglasses without leaving the comfort of your home.">
  <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>

</svelte:head>

<script>
</script>

<main>
  <section class="hero">
    <div class="graphic">
      <div class="circle1"></div>
      <div class="circle1"></div>
    </div>
    <div class="content">    
      <div class="hero-text">
        <h1>Give customers comfidence in bying glasses online</h1>
        <p>Our advanced Virtual Try-On plugin integrates seamlessly into your site and gives customers trust to purchase online.</p>
        <form action="/#calendly">
          <input type="submit" class="btn-green" value="Schedule a Demo" />
        </form>
      </div>
      <img src="./img/hero.png" alt="Hero Photo">
    </div>
  </section>

  <section class="demo">
    <div class="content">
      <video autoplay loop muted>
        <source src="./img/demo.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="demo-text">
        <h2>Stunning realism and precise fit</h2>
        <p>Virtual Try-On helps customers find the right frame size and style — increasing confidence and decreasing product returns.</p>
        <p>Accurate 3D Fitting to give you confidence with a unique combination of image recognition and size estimation.</p>
      </div>
    </div>
  </section>

  <section class="integrations">
    <div class="content">
      <div>
        <h2>Integrate With Your Website</h2>
        <p>Easily integrate Virtual Try-On to create an immersive experience for your customers.</p>
      </div>
      <hr>
      <div class="integrations-logo">
        <img src="./img/integrations/magento.svg" alt="Magento Logo">
        <img src="./img/integrations/hybris.svg" alt="Hybris Logo">
        <img src="./img/integrations/shopify.svg" alt="Shopify Logo">
        <img src="./img/integrations/woocommerce.svg" alt="WooCommerce Logo">
        <img src="./img/integrations/bigcommerce.svg" alt="Bigcommerce Logo">
        <img src="./img/integrations/salesforce.svg" alt="Salesforce Logo">
        <img src="./img/integrations/netsuite.svg" alt="Oracle Netsuite Logo">
      </div>
    </div>
  </section>

  <section class="testimonial">
    <div class="content">
      <div class="testimonial-text">
        <img src="./img/titanium-optix.svg" alt="Titanium Optix">
        <hr>
        <p>We have seen that users who try on virtual eyeglasses are more likely to purchase.
          Our customer conversions are up 2.2 times since we launched Virtual Try-On. </p>
        <p><strong>CEO Titanium Optix</strong></p>
      </div>
      <img class="to-demo" src="./img/titanium-optix-demo.png" alt="Titanium Optix">
    </div>
  </section>

  <div id="calendly" class="calendly-inline-widget" data-url="https://calendly.com/lesslens/30min?hide_gdpr_banner=1"></div>
</main>

<style>
  h1 {
    font-family: 'Guardian Egyp';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 115%;
    letter-spacing: 1.8px;
  }
  h2 {
    font-family: 'Guardian Egyp';
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 115%;
    letter-spacing: 1.7px;
  }
  p {
    font-size: 20px;
    max-width: 500px;
    padding-bottom: 16px;
  }
  .hero {
    height: 75vh;
    /* background-color: var(--color-orange-lightest); */
    overflow: hidden;
    position: relative;
  }

  .hero .content {
    width: 100%;
    height: 100%;
    display: flex;
    gap: 60px;
    flex-direction: row;
    align-items: center;
    position: relative;
  }

  .hero-text {
    width: 100%;
    display: flex;
    flex-direction: column;

  }

  .hero .graphic {
    position: absolute;
    height: 150vh;
    width: 150vh;
    top: -75vh;
    right: -45vh;

    animation: pulse 5s infinite;
  }

  .hero .circle1{
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 20000px;
    background-color: var(--color-orange-light);
  }

  .hero .circle2{
    position: relative;
    height: 80%;
    width: 80%;
    border-radius: 20000px;
    background-color: var(--color-orange);
  }

  .hero img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .demo {
    padding: 80px 0;
    background-color: var(--color-orange);
    color: var(--color-white);
  }

  .demo .content {
    width: 100%;
    height: 100%;
    display: flex;
    /* flex-wrap: wrap; */
    gap: 60px;
    flex-direction: row;
    align-items: center;
  }

  .demo-text {
    width: 100%;
    display: flex;
    flex-direction: column;

  }

  .demo video {
    max-width: 100%;
    max-height: 400px;
  }

  .integrations {
    padding: 90px 16px
  }

  .integrations .content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .integrations-logo {
    display: flex;
    /* justify-content: center; */
    gap: 4px 32px;
    flex-wrap: wrap;
  }

  .integrations-logo img {
    height: 80px;
  }

  .testimonial {
    padding: 90px 16px;
    /* background-image: url("./img/titanium-optix-mark.svg"); */

    background: linear-gradient(18deg,  var(--color-orange-lightest), #ffedc8);
    border-top: 2px solid #EBDDC4;
  }

  .testimonial .content {
    display: flex;
    flex-wrap: wrap;
    gap: 80px;
  }

  .testimonial .testimonial-text{
    display: flex;
    gap: 12px;
    flex-direction: column;
    justify-content: center;
  }
  .testimonial img {
    width: 200px;
    margin-bottom: 16px;
  }
  .testimonial .to-demo {
    width: 500px;
    object-fit: contain;
    filter: drop-shadow(0px 0px 73.376px rgba(0, 0, 0, 0.1));
  }

  .calendly-inline-widget {
    padding: 0;
    margin: 0;
    height: 690px;
    width: 100%;
    background-color: var(--color-blue);
  }
</style>


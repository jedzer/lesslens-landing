<footer>
  <nav class="content">
    <div class="mobile-hide">&#169; LessLens inc. <script>document.write(/\d{4}/.exec(Date())[0])</script></div>
    <a href="/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>

    <a href="https://www.instagram.com/less.lens/" target="_blank" rel="noreferrer"><img src="./img/instagram.svg" alt="Instagram"></a>
    <!-- <a href="https://twitter.com/lens_less" target="_blank"><img src="./img/twitter.svg"></a> -->
    <!-- <a href="" data-feather="facebook" target="_blank"><img src="./img/facebook.svg"></a> -->
    <a href="mailto:info@lesslens.com"><img src="./img/mail.svg" alt="Email"></a>
  </nav>
</footer>

<style>
  footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-white);
    background-color: var(--color-blue-darkest);
  }


  nav{
    display: grid;
    height: var(--footer-height);
    width: 100%; 

    grid-auto-flow: column;
    grid-gap: 30px;
    justify-items: start;
    align-items: center;
    grid-template-columns: auto repeat(5, max-content);

}
footer a {
    color: inherit ;
}

</style>
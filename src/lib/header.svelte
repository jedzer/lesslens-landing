<script>
  let headerHeight = 90;
  let screenHeignt = 0
  let y = 0
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={screenHeignt}/>

<header class={ y > headerHeight ? "header-shadow" : "" }>
  <nav class="content">
    <a href="/">    
      <img class="logo-icon" src="./img/logo.svg" alt="LessLens Logo">
      <div class="logo-title">Less Lens</div>
    </a>
    <form action="/#calendly" class={ y > screenHeignt / 2 ? "" : "hide" }>
      <input type="submit" class="btn-green" value="Schedule a Demo" />
    </form>
  </nav>
</header>

<style>
  header{
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    height: 150px;
    width: 100%; 
    z-index: 10;
    background-color: rgba(255, 255, 255, 0);
  }

  nav {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 15px;
    justify-items: start;
    align-items: center;
    grid-template-columns: auto min-content;
  }

  .header-shadow {
    height: 70px;
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(20px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    transition: all .3s linear;
  }

  a {
    display: flex;
    align-items: center;
    gap: 16px;
    color: inherit;
    text-decoration: none;
    /* mix-blend-mode: difference; */
  }

  .logo-title {
    white-space: nowrap;
  }

  .logo-icon {
    height: 35px;
}
</style>  
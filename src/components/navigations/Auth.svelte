<style>
  main {
    background-color: green;
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<script>
  import Router from 'svelte-spa-router';
  import SignIn from '../pages/SignIn.svelte';
  import Temp from '../pages/Temp.svelte';

  const routes = {
    '/': SignIn,
    '/temp': Temp,
    '*': SignIn,
  };
</script>

<main>
  <nav>
    <a href="/">SignIn</a> |
    <a href="/#/temp">Temp</a>
  </nav>
  <Router routes={routes} />
</main>

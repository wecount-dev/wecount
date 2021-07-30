<style>
  main {
    background-color: black;
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
  import Intro from '../pages/Intro.svelte';
  import Profile from '../pages/Profile.svelte';

  const routes = {
    '/': Intro,
    // '/lorem/:repeat': Lorem,
    '*': Profile,
  };
</script>

<main>
  <nav>
    <a href="/">Intro</a> |
    <a href="/#/profile">Profile</a>
  </nav>
  <Router routes={routes} />
</main>

<style>
  main {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  @media (min-width: 640px) {
    main { }
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

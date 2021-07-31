<style>
  main {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    background: linear-gradient(136.71deg, #17B87C 21.32%, #01886F 96.51%);

    display: grid;
    justify-content: center;
    align-content: center;
  }

  @media (min-width: 640px) {
    main { }
  }
</style>

<script>
  import Router from 'svelte-spa-router';
  import SignIn from '../pages/SignIn.svelte';
  import SignUp from '../pages/SignUp.svelte';
  import Temp from '../pages/Temp.svelte';

  const routes = {
    '/': SignIn,
    '/sign_up': SignUp,
    '/temp': Temp,
    '*': SignIn,
  };
</script>

<main>
  <Router routes={routes} />
</main>

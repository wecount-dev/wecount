<style lang="postcss">
  main {
    grid-template-columns: 1fr;
    grid-template-rows: 56px 1fr;
  }
  @media (min-width: 640px) {
    main {
    }
  }
</style>

<script>
  import Router from 'svelte-spa-router';
  import Intro from '../pages/Intro.svelte';
  import Profile from '../pages/Profile.svelte';
  import Header from '../uis/Header.svelte';
  import SignIn from '../pages/SignIn.svelte';
  import SignUp from '../pages/SignUp.svelte';
  import Temp from '../pages/Temp.svelte';

  const routes = {
    '/sign_in': SignIn,
    '/sign_up': SignUp,
    '/': Intro,
    // '/lorem/:repeat': Lorem,
    '/profile': Profile,
    '/*': Temp,
  };
</script>

<main>
  <Header />
  <Router routes={routes} />
</main>

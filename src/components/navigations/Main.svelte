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
  import ServiceSample from '../pages/ServiceSample.svelte';
  import Temp from '../pages/Temp.svelte';
  import CommunityCrete from '../pages/community/Create.svelte';

  const routes = {
    '/sign_in': SignIn,
    '/sign_up': SignUp,
    '/': Intro,
    // '/lorem/:repeat': Lorem,
    '/profile': Profile,
    '/service_sample': ServiceSample,
    '/community/create': CommunityCrete,
    '/*': Temp,
  };
</script>

<main>
  <Header />
  <Router routes={routes} />
</main>

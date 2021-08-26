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
  import Profile from '../pages/Profile.svelte';
  import Header from '../uis/header/index.svelte';
  import SignIn from '../pages/SignIn.svelte';
  import SignUp from '../pages/SignUp.svelte';
  import ServiceSample from '../pages/ServiceSample.svelte';
  import Onboarding from '../pages/Onboarding.svelte';
  import CommunityCrete from '../pages/community/Create.svelte';
  import CommunityRoute from './Community.svelte';
  import Temp from '../pages/Temp.svelte';

  const routes = {
    '/sign_in': SignIn,
    '/sign_up': SignUp,
    '/': Onboarding,
    // '/lorem/:repeat': Lorem,
    '/profile': Profile,
    '/service_sample': ServiceSample,
    '/community/create': CommunityCrete,
    '/community': CommunityRoute,
    '/community/*': CommunityRoute,
    '/*': Temp,
  };
</script>

<main>
  <Header />
  <Router routes={routes} />
</main>

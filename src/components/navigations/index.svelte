<style lang="postcss">
  main {
    width: 100%;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 56px 1fr;
  }

  @media (--mobile) {
    .container {
    }
  }
</style>

<script lang="ts">
  import Router from 'svelte-spa-router';
  import Header from './Header/index.svelte';
  import Onboarding from '../pages/Onboarding/index.svelte';
  import SignIn from '../pages/SignIn.svelte';
  import SignUp from '../pages/SignUp.svelte';
  import Profile from '../pages/Profile.svelte';
  import CommunityCreate from '../pages/CommunityCreate.svelte';
  import Community from '../pages/Community/index.svelte';
  import Temp from '../pages/Temp.svelte';
  import ServiceSample from '../pages/ServiceSample.svelte';

  const routes = {
    '/sign_in': SignIn,
    '/sign_up': SignUp,
    '/': Onboarding,
    '/profile': Profile,
    '/service_sample': ServiceSample,
    '/community/create': CommunityCreate,
    '/community/*': Community,
    '/*': Temp,
  };
</script>

<main>
  <Header />
  <Router routes={routes} />
</main>

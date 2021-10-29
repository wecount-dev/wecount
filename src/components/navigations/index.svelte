<style lang="postcss">
  .container {
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

<script>
  import Router from 'svelte-spa-router';
  import Header from './Header';
  import Onboarding from '../pages/Onboarding';
  import SignIn from '../pages/SignIn.svelte';
  import SignUp from '../pages/SignUp.svelte';
  import Profile from '../pages/Profile.svelte';
  import CommunityCreate from '../pages/CommunityCreate.svelte';
  import Community from '../pages/Comunity.svelte';
  import Temp from '../pages/Temp.svelte';
  import ServiceSample from '../../components_legacy/pages/ServiceSample.svelte';
  import CommunityLegacy from '../../components_legacy/navigations/Community';

  const routes = {
    '/sign_in': SignIn,
    '/sign_up': SignUp,
    '/': Onboarding,
    '/profile': Profile,
    '/service_sample': ServiceSample,
    '/community/create': CommunityCreate,
    '/community/*': Community,
    '/community_legacy/*': CommunityLegacy,
    '/*': Temp,
  };
</script>

<div class="container">
  <Header />
  <Router routes={routes} />
</div>

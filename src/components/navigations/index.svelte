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
  import Temp from '../pages/Temp.svelte';
  import Community from '../../components_legacy/navigations/Community';
  import ServiceSample from '../../components_legacy/pages/ServiceSample.svelte';
  import CommunityCreate from '../../components_legacy/pages/community/CommunityCreate.svelte';

  const routes = {
    '/sign_in': SignIn,
    '/sign_up': SignUp,
    '/': Onboarding,
    '/profile': Profile,
    '/service_sample': ServiceSample,
    '/community/create': CommunityCreate,
    '/community/:id': Community,
    '/*': Temp,
  };
</script>

<div class="container">
  <Header />
  <Router routes={routes} />
</div>

<style lang="postcss">
  .container {
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
  import Profile from '../../pages/Profile.svelte';
  import {Header} from './Header';
  import SignIn from '../../pages/SignIn.svelte';
  import SignUp from '../../pages/SignUp.svelte';
  import ServiceSample from '../../pages/ServiceSample.svelte';
  import Onboarding from '../../pages/Onboarding.svelte';
  import CommunityCreate from '../../pages/community/CommunityCreate.svelte';
  import {CommunityRoute} from '../Community';
  import Temp from '../../pages/Temp.svelte';

  const routes = {
    '/sign_in': SignIn,
    '/sign_up': SignUp,
    '/': Onboarding,
    // '/lorem/:repeat': Lorem,
    '/profile': Profile,
    '/service_sample': ServiceSample,
    '/community/create': CommunityCreate,
    '/community': CommunityRoute,
    '/community/*': CommunityRoute,
    '/*': Temp,
  };
</script>

<div class="container">
  <Header />
  <Router routes={routes} />
</div>

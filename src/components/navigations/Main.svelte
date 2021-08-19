<style lang="postcss">
  main {
    background-color: var(--gray20);

    grid-template-columns: 10% 56px 1fr 10%;
    grid-template-rows: 56px 1fr;
    grid-template-areas:
      'header header header header'
      '   .    drawer  main    .  ';

    @media (max-width: 640px) {
      grid-template-columns: 0 56px 1fr 0;
    }
  }
  .header {
    grid-area: header;
  }
  .drawer {
    grid-area: drawer;
    background-color: var(--background-color);
  }
  .main {
    grid-area: main;
  }
</style>

<script>
  import Router from 'svelte-spa-router';
  import Intro from '../pages/Intro.svelte';
  import Profile from '../pages/Profile.svelte';
  import Header from '../uis/header/Index.svelte';
  import SignIn from '../pages/SignIn.svelte';
  import SignUp from '../pages/SignUp.svelte';
  import ServiceSample from '../pages/ServiceSample.svelte';
  import Member from '../pages/Member/Member.svelte';
  import Temp from '../pages/Temp.svelte';
  import CommunityCrete from '../pages/community/Create.svelte';
  import CommunityRoute from './Community.svelte';

  const routes = {
    '/sign_in': SignIn,
    '/sign_up': SignUp,
    '/': Intro,
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
  <div class="header">
    <Header />
  </div>
  <div class="drawer" />
  <div class="main">
    <Router routes={routes} />
  </div>
</main>

<style>
  main {
    .link {
      text-decoration: underline;
      color: var(--link);

      display: flex;
      align-items: center;
    }

    grid-template-columns: 1fr;
    grid-template-rows: 56px 1fr;

    nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 10%;
      border-bottom: solid 1px;
      border-bottom-color: #f3f4f5;

      .nav-menu {
        flex: 1;

        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        a {
          margin-left: 18px;
          font-size: 14px;
        }
      }
    }
  }

  @media (min-width: 640px) {
    main {
    }
  }
</style>

<script>
  import Router from 'svelte-spa-router';
  import {SvgLogo} from '../../utils/Icon';
  import Intro from '../pages/Intro.svelte';
  import Profile from '../pages/Profile.svelte';
  import AuthRoute from './Auth.svelte';

  const routes = {
    '/': Intro,
    '/auth': AuthRoute,
    // '/lorem/:repeat': Lorem,
    '*': Profile,
  };
</script>

<main>
  <nav>
    <SvgLogo width="34.29" />
    <div class="nav-menu">
      <a class="link" href="/">Intro</a>
      <a class="link" href="/#/profile">Profile</a>
    </div>
  </nav>
  <Router routes={routes} />
</main>

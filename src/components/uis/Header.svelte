<style lang="postcss">
  nav {
    padding: 0 10%;
    border-bottom: solid 1px;
    border-bottom-color: #f3f4f5;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .link {
      text-decoration: underline;
      color: var(--link);

      display: flex;
      align-items: center;
    }

    .nav-menu {
      padding-top: 4px;
      flex: 1;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;

      a {
        margin-left: 18px;
        font-size: 14px;
      }
    }
  }
</style>

<script>
  import {_} from 'svelte-i18n';
  import {push} from 'svelte-spa-router';

  import {user} from '../../stores/sessionStore';
  import {SvgLogo} from '../../utils/Icon';
  import Button from './Button.svelte';
</script>

<nav>
  <SvgLogo width="34.29" />
  <div class="nav-menu">
    {#if $user}
      <a class="link" href="/">Intro</a>
      <a class="link" href="/#/profile">Profile</a>
    {:else}
      <Button
        on:click={() => {
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          push('/sign_in');
        }}
        style="color: black; font-size: 14px; align-self: stretch;"
      >
        <div class="text">{$_('SignIn.login')}</div>
      </Button>
      <Button
        on:click={() => {
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          push('/sign_up');
        }}
        style="font-size: 14px; margin-left: 12px; align-self: stretch;"
      >
        <div class="text">{$_('SignUp.title')}</div>
      </Button>
    {/if}
  </div>
</nav>

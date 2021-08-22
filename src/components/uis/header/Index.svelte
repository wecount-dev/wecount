<style lang="postcss">
  nav {
    padding: 0 10%;
    border-bottom: solid 1px;
    border-bottom-color: #f3f4f5;

    position: sticky;
    top: 0px;
    left: 0px;
    background-color: var(--background-color);
    z-index: 99;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .nav-menu {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
    }
  }
</style>

<script lnag="ts">
  import {_} from 'svelte-i18n';
  import {push} from 'svelte-spa-router';

  import {user} from '../../../stores/sessionStore';
  import {SvgLogo} from '../../../utils/Icon';
  import Button from '../Button.svelte';
  import Manipulation from './Manipulation.svelte';
</script>

<nav>
  <SvgLogo width="34.29" />
  <div class="nav-menu">
    {#if $user}
      <Manipulation />
    {:else}
      <Button
        on:click={async () => {
          await push('/sign_in');
        }}
        style="color: black; font-size: 14px; align-self: stretch;"
      >
        <div class="text">{$_('login')}</div>
      </Button>
      <Button
        on:click={() => {
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          push('/sign_up');
        }}
        type="primary"
        style="font-size: 14px; margin-left: 12px; align-self: stretch;"
      >
        <div class="text">{$_('SignUp.title')}</div>
      </Button>
    {/if}
  </div>
</nav>

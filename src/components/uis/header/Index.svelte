<style lang="postcss">
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0px;
    left: 0px;
    background-color: var(--background-color);
    z-index: 99;
    border-bottom: solid 1px;
    border-bottom-color: #f3f4f5;
  }
  .header {
    width: 1200px;
    padding: 0px 13px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1200px) {
      width: 100%;
    }

    .nav-menu {
      display: flex;
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
  <div class="header">
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
  </div>
</nav>

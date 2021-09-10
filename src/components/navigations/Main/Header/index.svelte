<style lang="postcss">
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--nav);
    border-bottom: solid 1px;
    border-bottom-color: var(--gray20);
  }
  .layout {
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

<script lang="ts">
  import {user} from '../../../../stores/sessionStore';
  import {SvgLogo} from '../../../../utils/Icon';
  import AuthHeader from './AuthHeader.svelte';
  import {MainHeader} from './MainHeader';
</script>

<nav>
  <div class="layout">
    <SvgLogo width="34.29" />
    <div class="nav-menu">
      {#if $user}
        <MainHeader />
      {:else}
        <AuthHeader />
      {/if}
    </div>
  </div>
</nav>

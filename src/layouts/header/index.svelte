<style lang="postcss">
  nav {
    height: 56px;
    background-color: var(--background-color);
    border-bottom: solid 1px;
    border-bottom-color: var(--primary-light);
    display: flex;
    justify-content: center;
    align-items: center;
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
    img {
      width: 36px;
    }

    .nav-menu {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
</style>

<script lang="ts">
  import {user} from '../../stores/sessionStore';
  import {SvgLogo} from '../../utils/icons';
  import AuthHeader from './auth.svelte';
  import MainHeader from './main/index.svelte';
</script>

<nav>
  <div class="layout">
    <img src={SvgLogo} alt="logo" />
    <div class="nav-menu">
      {#if $user}
        <MainHeader />
      {:else}
        <AuthHeader />
      {/if}
    </div>
  </div>
</nav>

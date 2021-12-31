<style lang="postcss">
  .container {
    display: grid;
    grid-template-rows: 56px 1fr;

    .header {
      height: 56px;
      position: sticky;
      position: -webkit-sticky;
      top: 0;
      z-index: 99;
      background-color: var(--background);

      display: grid;
    }

    .content {
      display: grid;
      overflow: auto;
    }
  }
</style>

<script lang="ts">
  import {goto, url} from '@roxi/routify';
  import {user} from '../stores/sessionStore';
  import Header from '../layouts/header/index.svelte';

  user.subscribe((user) => {
    if (user) {
      $goto($url('/'));
    }
  });
</script>

<div class="container">
  <div class="header">
    <Header />
  </div>
  <div class="content">
    <slot />
  </div>
</div>

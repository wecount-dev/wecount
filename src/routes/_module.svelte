<style lang="postcss">
  .container {
    display: flex;
    flex-direction: column;
  }
</style>

<script lang="ts">
  import {goto, url} from '@roxi/routify';
  import {user} from '../stores/sessionStore';
  import Header from '../layouts/header/index.svelte';

  const shouldRedirect = (): boolean => {
    const ignorePath = ['/auth/sign-in', '/auth/sign-up'];
    const currentPath = location.pathname;

    return !ignorePath.includes(currentPath);
  };

  user.subscribe((user) => {
    if (user) {
      if (shouldRedirect()) {
        $goto($url('/auth/sign-in'));
      }
    }
  });
</script>

<div class="container">
  <Header />
  <slot />
</div>

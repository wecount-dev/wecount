<style>
  :global(body) {
    --button: #0084f6;
    --text: black;

    background-color: var(--background-color);
    color: var(--color);
    transition: background-color 0.3s;
  }
  :global(body.dark-mode) {
    --button: #069ccd;
    --text: white;

    background-color: black;
    color: white;
  }
</style>

<script>
  import './i18n';
  import {user} from './stores/sessionStore';
  import supabase from './lib/db';
  import Auth from './components/navigations/Auth.svelte';
  import Main from './components/navigations/Main.svelte';

  supabase.auth.onAuthStateChange((_, session) => {
    user.set(session?.user);
  });
</script>

<main>
  {#if $user}
    <Main />
  {:else}
    <Auth />
  {/if}
</main>

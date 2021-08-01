<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>

<script lang="ts">
  import supabase from '../../lib/db';
  import {_} from 'svelte-i18n';
  import Button from '../uis/Button.svelte';

  const signOut = () => supabase.auth.signOut();

  function toggleTheme() {
    window.document.body.classList.toggle('dark-mode');
  }
</script>

<main>
  <p>{$_('Intro.welcome')}</p>
  <Button on:click={signOut}>Sign Out</Button>
  <Button on:click={toggleTheme}>Toggle Theme</Button>
</main>

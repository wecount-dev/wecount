<style lang="postcss">
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
  import {push, replace} from 'svelte-spa-router';
  import {user} from '../../stores/sessionStore';

  const signInOut = async (): Promise<void> => {
    if ($user) {
      await supabase.auth.signOut();
      await replace('/');

      return;
    }

    await push('/sign_in');
  };

  function toggleTheme() {
    window.document.body.classList.toggle('dark-mode');
  }
</script>

<main>
  <p>{$_('Intro.welcome')}</p>
  <Button on:click={signInOut}>
    {#if $user}
      {$_('sign_out')}
    {:else}
      {$_('login')}
    {/if}
  </Button>
  <Button on:click={toggleTheme}>Toggle Theme</Button>
</main>

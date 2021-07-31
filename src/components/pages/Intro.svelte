<script lang="ts">
  import supabase from '../../lib/db';
  import {_} from 'svelte-i18n';
  import Button from '../uis/Button.svelte';

  const signOut = () => supabase.auth.signOut();

  function toggleTheme() {
    window.document.body.classList.toggle('dark-mode');
  }
</script>

<p>{$_('intro.title')}</p>
<Button on:click={signOut}>Sign Out</Button>
<Button on:click={toggleTheme}>Toggle Theme</Button>

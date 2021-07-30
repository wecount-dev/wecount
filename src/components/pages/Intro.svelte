<script>
  import supabase from '../../lib/db';
  import {_} from 'svelte-i18n';
  import Button from '../uis/Button.svelte';

  async function signOut() {
    supabase.auth.signOut();
  }

  function toggleTheme() {
    window.document.body.classList.toggle('dark-mode');
  }

  function getUser() {
    setName('Hyo', 'Jang');
  }
</script>

<p>{$_('intro.title')}</p>
<Button on:click={signOut}>Sign Out</Button>
<Button on:click={toggleTheme}>Toggle Theme</Button>
<!-- <p>{$fullname}</p> -->

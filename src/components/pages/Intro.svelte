<script>
  import supabase from '../../lib/db';
  import {_} from 'svelte-i18n';
  import Button from '../uis/Button.svelte';
  import {userStore} from '../../stores/userStore';

  const {fullname, setName} = userStore;

  async function signUp() {
    const {user, error} = await supabase.auth.signUp({
      email: 'test1@email.com',
      password: 'password',
    });

    console.log('user', user);
    console.log('error', error);
  }


  function handleClick() {
    window.document.body.classList.toggle('dark-mode');
  }

  function getUser() {
    setName('Hyo', 'Jang');
  }
</script>

<p>{$_('intro.title')}</p>
<Button on:click={handleClick}>Change Theme</Button>
<Button on:click={signUp}>Get User</Button>
<p>{$fullname}</p>

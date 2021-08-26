<style lang="postcss">
  .manipulation {
    display: flex;
    align-items: center;
    justify-content: end;
  }
  .search,
  .notification {
    margin-right: 25px;
  }

  .search {
    @media (max-width: 640px) {
      display: none;
    }
  }
  .profile {
    cursor: pointer;
  }
</style>

<script lang="ts">
  import {push, replace} from 'svelte-spa-router';
  import supabase from '../../../lib/db';
  import {user} from '../../../stores/sessionStore';
  import {SvgBell} from '../../../utils/Icon';
  import Profile from './Profile.svelte';
  import Search from './Serach.svelte';

  const signInOut = async (): Promise<void> => {
    if ($user) {
      await supabase.auth.signOut();
      await replace('/');

      return;
    }

    await push('/sign_in');
  };
</script>

<div class="manipulation">
  <div class="search">
    <Search />
  </div>
  <div class="notification">
    <SvgBell />
  </div>
  <div class="profile" on:click={signInOut}>
    <Profile name="hanna" imageSrc={'https://picsum.photos/200'} />
  </div>
</div>

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
    @media (--mobile) {
      display: none;
    }
  }

  .profile {
    cursor: pointer;
  }
</style>

<script lang="ts">
  import type {definitions} from '../../../../types/supabase';

  import {push, replace} from 'svelte-spa-router';
  import {user} from '../../../../stores/sessionStore';
  import {SvgBell} from '../../../../utils/Icon';
  import Profile from './Profile.svelte';
  import Search from './Serach.svelte';
  import {onMount} from 'svelte';
  import supabase from '../../../../lib/db';

  onMount(async () => {
    if ($user) {
      let {data, error, status} = await supabase
        .from<definitions['User']>('User')
        .select(`displayName, name, avatar_url`)
        .eq('id', $user.id)
        .single();

      console.log('data', data);

      if (error && status !== 406) throw error;
    }
  });

  const goToProfile = async (): Promise<void> => {
    if ($user) {
      await replace('/profile');

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
  <div class="profile" on:click={goToProfile}>
    <Profile name="hanna" imageSrc={'https://picsum.photos/200'} />
  </div>
</div>

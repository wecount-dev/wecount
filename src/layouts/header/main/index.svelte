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
  import {goto, url} from '@roxi/routify';

  import {user} from '../../../stores/sessionStore';
  import {SvgBell} from '../../../utils/icons';
  import Profile from './profile.svelte';
  import Search from './search.svelte';

  const goToProfile = () => {
    if ($user) {
      $goto($url('/profile'));

      return;
    }

    $goto($url('/auth/sign-in'));
  };
</script>

<div class="manipulation">
  <div class="search">
    <Search />
  </div>
  <div class="notification">
    <img src={SvgBell} alt="logo" />
  </div>
  <div class="profile" on:click={goToProfile}>
    <Profile
      name={$user?.displayName || ''}
      imageSrc={$user?.avatarUrl || ''}
    />
  </div>
</div>

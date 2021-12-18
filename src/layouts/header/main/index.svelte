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
  import {user} from '../../../stores/sessionStore';
  import {SvgBell} from '../../../utils/icons';
  import Profile from './profile.svelte';
  import Search from './search.svelte';

  const goToProfile = async (): Promise<void> => {
    // if ($user) {
    //   await replace('/profile');
    //   return;
    // }
    // await push('/sign_in');
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

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
</style>

<script lnag="ts">
  import {SvgBell} from '../../../utils/Icon';
  import Profile from './Profile.svelte';
  import Search from './Serach.svelte';
</script>

<div class="manipulation">
  <div class="search">
    <Search />
  </div>
  <div class="notification">
    <SvgBell />
  </div>
  <div>
    <Profile name="hanna" imageSrc={'https://picsum.photos/200'} />
  </div>
</div>

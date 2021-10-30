<style lang="postcss">
  .profile-loayout {
    display: flex;
    align-items: center;
  }

  .image {
    margin-right: 6px;
  }

  p {
    margin: 0;
  }
</style>

<script lang="ts">
  import UserImage from '../../../uis/UserImage.svelte';

  export let name = '';
  export let imageSrc: string;
</script>

<div class="profile-loayout">
  <div class="image">
    <UserImage
      src={imageSrc}
      style={'width: 42px; height: 42px;'}
      alt={name.substring(0, 1)}
    />
  </div>
  <p>{name}</p>
</div>

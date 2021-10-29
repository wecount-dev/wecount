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
  import CircleImage from '../../../uis/CircleImage.svelte';

  export let name: string;
  export let imageSrc: string;
</script>

<div class="profile-loayout">
  <div class="image">
    <CircleImage
      src={imageSrc}
      style={'width: 42px; height: 42px;'}
      alt="User image"
    />
  </div>
  <p>{name}</p>
</div>

<style lang="postcss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>

<script lang="ts">
  import ImageUpload from '../uis/ImageUpload.svelte';

  let uris: string[] = [];
</script>

<main>
  <div style="width:30%">
    <ImageUpload
      bind:uris
      option={{
        bucket: 'staging',
        dirs: 'feeds',
        maxSizeMB: 1,
      }}
    />
  </div>
</main>

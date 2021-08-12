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
      uris={uris}
      option={{
        bucket: 'image',
        maxSizeMB: 1,
      }}
    />
  </div>
</main>

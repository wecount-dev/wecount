<style lang="postcss">
  main {
  }
</style>

<script lang="ts">
  import {uploadMultipleImage} from '../../services/storageService';

  let fileInput: HTMLInputElement;
  export let max: number | null = null; // null means infinity
  export let uris: string[];
  export let option: any;

  let loading = false;

  const onChange = async (preUris: string[], option: any, files: FileList) => {
    try {
      if (loading) return;

      if (!files) return;

      loading = true;

      const newUris = await uploadMultipleImage(files, option);

      console.log(newUris);
      uris = [...preUris, ...newUris];
    } catch (error) {
      console.error(error);
    } finally {
      loading = false;
    }
  };
</script>

<main>
  {uris.toString()}
  <input
    bind:this={fileInput}
    multiple
    type="file"
    accept=".jpg, .jpeg, .png"
    on:change={(e) => onChange(uris, option, e.target.files)}
  />
</main>

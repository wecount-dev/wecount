<style lang="postcss">
  .container {
    display: flex;
    flex-wrap: wrap;
  }
  input {
    display: none;
  }
  .upload-button {
    background: var(--paper);
    border: 1px solid var(--gray30);
    border-radius: 4px;
    width: 72px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3px;
    &:hover {
      background: var(--gray20);
      cursor: pointer;
    }
  }
  .uploaded-image-conatiner {
    border: 1px solid var(--gray30);
    border-radius: 4px;
    overflow: hidden;
    width: 72px;
    height: 72px;
    margin: 3px;
    position: relative;
  }
  .uploaded-image {
    width: 72px;
    height: 72px;
    object-fit: cover;
  }
  .uploaded-image-close {
    position: absolute;
    top: 4px;
    right: 4px;
    &:hover {
      cursor: pointer;
    }
  }
  .image-empty-container {
    width: 72px;
    height: 72px;
    margin: 3px;
    border: 1px dashed var(--gray30);
    border-radius: 4px;
  }
</style>

<script lang="ts">
  import {uploadMultipleImage} from '../../services/storageService';
  // eslint-disable-next-line no-duplicate-imports
  import type {UploadMultipleImageOption} from '../../services/storageService';
  import {SvgUploadClose, SvgUploadPlus} from '../../utils/Icon';

  export let max = 7;
  export let uris: string[];
  export let option: UploadMultipleImageOption;

  let fileInput: HTMLInputElement;
  let loading = false;

  const onChange = async (
    preUris: string[],
    option: UploadMultipleImageOption,
    files: FileList | null,
  ) => {
    try {
      if (loading || !files || uris.length >= max) return;

      loading = true;

      const slicedFiles = Array.from(files).slice(0, max - uris.length);

      const newUris = await uploadMultipleImage(slicedFiles, option);

      uris = [...preUris, ...newUris];
    } catch (error) {
      console.error(error);
    } finally {
      loading = false;
    }
  };

  const onUpload = () => {
    if (uris.length >= max) return;

    fileInput.click();
  };

  const onDelete = (uri: string) => {
    uris = uris.filter((v) => v !== uri);
  };
</script>

<div class="container">
  <!-- Upload Button -->
  <div on:click={onUpload} class="upload-button">
    <SvgUploadPlus />
  </div>
  <!-- Uploaded Images -->
  {#each uris as uri}
    <div class="uploaded-image-conatiner">
      <img class="uploaded-image" alt="uploadedImage" src={uri} />
      <div on:click={() => onDelete(uri)} class="uploaded-image-close">
        <SvgUploadClose />
      </div>
    </div>
  {/each}
  <!-- Empty -->
  {#each Array(max - uris.length).fill(0) as _}
    <div class="image-empty-container" />
  {/each}
  <!-- None visible input component -->
  <input
    bind:this={fileInput}
    multiple
    type="file"
    accept=".jpg, .jpeg, .png"
    disabled={loading}
    on:change={(e) => onChange(uris, option, e.currentTarget.files)}
  />
</div>

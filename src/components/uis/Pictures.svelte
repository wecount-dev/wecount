<style lang="postcss">
  main {
    cursor: pointer;
  }
  .image {
    background-size: cover;
    grid-area: image1;
  }
  .image5-wrapper {
    grid-area: image5;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    color: var(--gray10);
    font-size: 28px;
    font-weight: bold;
  }

  .container {
    width: 100%;
    position: relative;
  }
  .container:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
  .container-len2:after {
    padding-bottom: calc(50% - 10px);
  }
  .container-len5:after {
    padding-bottom: calc((5 / 6) * 100%);
  }

  .inner-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
  }
  .inner-len1 {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'image1';
  }
  .inner-len2 {
    grid-template-columns: 1fr 10px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'image1 . image2';
  }
  .inner-len3 {
    grid-template-columns: 1fr 10px 1fr;
    grid-template-rows: 1fr 10px 1fr;
    grid-template-areas:
      'image1 . image2'
      '. . .'
      'image3 image3 image3';
  }
  .inner-len4 {
    grid-template-columns: 1fr 10px 1fr;
    grid-template-rows: 1fr 10px 1fr;
    grid-template-areas:
      'image1 . image2'
      '. . .'
      'image3 . image4';
  }
  .inner-len5 {
    grid-template-columns: 1fr 10px 1fr 10px 1fr 10px 1fr 10px 1fr 10px 1fr;
    grid-template-rows: 3fr 10px 2fr;
    grid-template-areas:
      'image1 image1 image1 image1 image1 . image2 image2 image2 image2 image2'
      '. . . . . . . . . . .'
      'image3 image3 image3 . image4 image4 image4 . image5 image5 image5';
  }
</style>

<script lang="ts">
  import PicturesModal from './PicturesModal.svelte';

  export let urls: string[];

  $: slicedUrls = urls.slice(0, 5);

  let pictureModalVisible = false;
  let clickedIndex = 0;

  const onClick = (index: number) => {
    pictureModalVisible = true;
    clickedIndex = index;
  };
</script>

{#if urls.length > 0}
  <main>
    <PicturesModal
      bind:visible={pictureModalVisible}
      currentIndex={clickedIndex}
      urls={urls}
    />
    <div
      class:container-len2={slicedUrls.length === 2}
      class:container-len5={slicedUrls.length === 5}
      class="container"
    >
      <div
        class:inner-len1={slicedUrls.length === 1}
        class:inner-len2={slicedUrls.length === 2}
        class:inner-len3={slicedUrls.length === 3}
        class:inner-len4={slicedUrls.length === 4}
        class:inner-len5={slicedUrls.length === 5}
        class={`inner-container`}
      >
        {#each slicedUrls as url, i}
          <div
            class="image"
            on:click={() => onClick(i)}
            style={`grid-area: image${i + 1}; background-image: url("${url}");`}
          />
        {/each}
        {#if urls.length > 5}
          <div class="image5-wrapper" on:click={() => onClick(4)}>
            +{urls.length - 5}
          </div>
        {/if}
      </div>
    </div>
  </main>
{/if}

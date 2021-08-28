<style lang="postcss">
  main {
    cursor: pointer;
  }
  .len1 {
    width: 100%;
    position: relative;
    .image {
      position: absolute;
      width: 100%;
      height: 100%;
      cursor: pointer;
      background-size: cover;
    }
  }
  .len1:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  .len2 {
    width: 100%;
    position: relative;
    .container {
      position: absolute;
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: 1fr 10px 1fr;
      grid-template-rows: 1fr;
      grid-template-areas: 'image1 . image2';
    }
    .image1 {
      grid-area: image1;
    }
    .image2 {
      grid-area: image2;
    }
  }
  .len2:after {
    content: '';
    display: block;
    padding-bottom: calc(50% - 10px);
  }

  .len3 {
    width: 100%;
    position: relative;
    .container {
      position: absolute;
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: 1fr 10px 1fr;
      grid-template-rows: 1fr 10px 1fr;
      grid-template-areas:
        'image1 . image2'
        '. . .'
        'image3 image3 image3';
      .image1 {
        grid-area: image1;
      }
      .image2 {
        grid-area: image2;
      }
      .image3 {
        grid-area: image3;
      }
    }
  }
  .len3:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  .len5 {
    width: 100%;
    position: relative;
    .container {
      position: absolute;
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: 1fr 10px 1fr 10px 1fr 10px 1fr 10px 1fr 10px 1fr;
      grid-template-rows: 3fr 10px 2fr;
      grid-template-areas:
        'image1 image1 image1 image1 image1 . image2 image2 image2 image2 image2'
        '. . . . . . . . . . .'
        'image3 image3 image3 . image4 image4 image4 . image5 image5 image5';
      .image1 {
        grid-area: image1;
      }
      .image2 {
        grid-area: image2;
      }
      .image3 {
        grid-area: image3;
      }
      .image4 {
        grid-area: image4;
      }
      .image5 {
        grid-area: image5;
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
    }
  }
  .len5:after {
    content: '';
    display: block;
    padding-bottom: calc((5 / 6) * 100%);
  }
</style>

<script lang="ts">
  import PicturesModal from './PicturesModal.svelte';

  export let urls: string[];

  let pictureModalVisible = false;
  let clickedIndex = 0;

  const onClick = (index: number) => {
    pictureModalVisible = true;
    clickedIndex = index;
  };
</script>

<main>
  <PicturesModal
    bind:visible={pictureModalVisible}
    currentIndex={clickedIndex}
    urls={urls}
  />
  {#if urls.length === 1}
    <div class="len1">
      <div
        class="image"
        on:click={() => onClick(0)}
        style={`background-image: url("${urls[0]}");`}
      />
    </div>
  {:else if urls.length === 2}
    <div class="len2">
      <div class="container">
        <div
          class="image1"
          on:click={() => onClick(0)}
          style={`background-image: url("${urls[0]}");`}
        />
        <div
          class="image2"
          on:click={() => onClick(1)}
          style={`background-image: url("${urls[1]}");`}
        />
      </div>
    </div>
  {:else if urls.length === 3}
    <div class="len3">
      <div class="container">
        <div
          class="image1"
          on:click={() => onClick(0)}
          style={`background-image: url("${urls[0]}");`}
        />
        <div
          class="image2"
          on:click={() => onClick(1)}
          style={`background-image: url("${urls[1]}");`}
        />
        <div
          class="image3"
          on:click={() => onClick(2)}
          style={`background-image: url("${urls[2]}");`}
        />
      </div>
    </div>
  {:else if urls.length === 4}
    <div class="len4">
      <div class="container">
        <div
          class="image1"
          on:click={() => onClick(0)}
          style={`background-image: url("${urls[0]}");`}
        />
        <div
          class="image2"
          on:click={() => onClick(1)}
          style={`background-image: url("${urls[1]}");`}
        />
        <div
          class="image3"
          on:click={() => onClick(2)}
          style={`background-image: url("${urls[2]}");`}
        />
        <div
          class="image4"
          on:click={() => onClick(3)}
          style={`background-image: url("${urls[3]}");`}
        />
      </div>
    </div>
  {:else if urls.length >= 5}
    <div class="len5">
      <div class="container">
        <div
          class="image1"
          on:click={() => onClick(0)}
          style={`background-image: url("${urls[0]}");`}
        />
        <div
          class="image2"
          on:click={() => onClick(1)}
          style={`background-image: url("${urls[1]}");`}
        />
        <div
          class="image3"
          on:click={() => onClick(2)}
          style={`background-image: url("${urls[2]}");`}
        />
        <div
          class="image4"
          on:click={() => onClick(3)}
          style={`background-image: url("${urls[3]}");`}
        />
        <div
          class="image5"
          on:click={() => onClick(4)}
          style={`background-image: url("${urls[4]}");`}
        />
        {#if urls.length > 5}
          <div class="image5-wrapper" on:click={() => onClick(4)}>
            +{urls.length - 5}
          </div>
        {/if}
      </div>
    </div>
  {/if}
</main>

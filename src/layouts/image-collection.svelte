<style lang="postcss">
  .image-collection {
    width: 100%;
    height: 100%;
    max-width: 740px;
    max-height: 620px;
    position: relative;
    overflow: hidden;

    display: grid;
    gap: 10px;
    grid-auto-flow: column;

    img {
      object-fit: cover;
    }

    img.one {
      width: 100%;
      height: 100%;
    }

    img.two {
      width: 100%;
      height: 100%;
    }

    .three {
      height: 620px;
      width: 100%;

      display: grid;
      gap: 10px;
      grid-template-rows: 368px 1fr;
      grid-template-columns: 1fr;

      @media (--mobile) {
        height: 320px;
        grid-template-rows: 200px 120px;
      }

      .head {
        display: grid;
        gap: 10px;
        grid-template-columns: 1fr 1fr;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .body {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 10px;

        img {
          width: 100%;
          height: 100%;
          max-height: 242px;

          @media (--mobile) {
            height: 120px;
          }
        }
      }
    }

    .more {
      position: absolute;
      z-index: 10;
      background-color: #000000;
      opacity: 0.7;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      align-items: center;
      text-align: center;

      display: grid;

      .more-cnt {
        color: white;
        font-size: 28px;
        font-weight: bold;
      }
    }
  }
</style>

<script lang="ts">
  import type {definitions} from '../types/supabase';

  export let images: definitions['Image'][] = [];

  const moreImgCnt = images.length > 5 ? images.length - 5 : 0;
</script>

<div class="image-collection">
  {#if images.length === 1}
    <img class="one" src={images[0].url} alt="img1" />
  {:else if images.length === 2}
    {#each images as image, i}
      <img class="two" src={image.url} alt="img{i}" />
    {/each}
  {:else if images.length >= 3}
    <div class="three">
      <div class="head">
        {#each images as image, i}
          {#if i < 2}
            <img src={image.url} alt="img{i}" />
          {/if}
        {/each}
      </div>
      <div
        class="body"
        style="grid-template-columns: {(images.length === 3 && '1fr') ||
          (images.length === 4 && '1fr 1fr')}"
      >
        {#each images as image, i}
          {#if i >= 2 && i < 5}
            <div style="position: relative;">
              <img src={image.url} alt="img{i}" />
              {#if i === 4 && moreImgCnt > 0}
                <div class="more">
                  <p class="more-cnt">+{moreImgCnt}</p>
                </div>
              {/if}
            </div>
          {/if}
        {/each}
      </div>
    </div>
  {/if}
</div>

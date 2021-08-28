<style lang="postcss">
  .image {
    height: 100%;
    max-width: 90%;
  }
  .left-btn {
    position: absolute;
    left: 5%;
    cursor: pointer;
  }
  .right-btn {
    cursor: pointer;
    position: absolute;
    right: 5%;
  }
  img {
    height: 50vh;
  }
</style>

<script lang="ts">
  import {SvgArrowLeft, SvgArrowRight} from '../../utils/Icon';
  import Modal from './Modal.svelte';

  export let urls: string[];
  export let visible: boolean;
  export let currentIndex = 0;
</script>

<Modal bind:visible>
  <img src={urls[currentIndex]} />
  {#if currentIndex > 0}
    <div on:click={() => currentIndex--} class="left-btn"><SvgArrowLeft /></div>
  {/if}
  {#if currentIndex < urls.length - 1}
    <div on:click={() => currentIndex++} class="right-btn">
      <SvgArrowRight />
    </div>
  {/if}
</Modal>

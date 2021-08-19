<style lang="postcss">
  .navigation-button {
    z-index: 10;
    cursor: pointer;
    padding: 10px;
  }

  .hidden {
    visibility: hidden;
  }
</style>

<script lang="ts">
  import {SvgLeftAngleBracket, SvgRightAngleBracket} from '../../utils/Icon';

  export let direction: 'left' | 'right';
  export let hidden = false;
  export let onClick: () => void;
</script>

<div class="navigation-button" class:hidden on:click={onClick}>
  {#if direction === 'left'}
    <SvgLeftAngleBracket />
  {:else}
    <SvgRightAngleBracket />
  {/if}
</div>

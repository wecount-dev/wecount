<style lang="postcss">
  .navigation-button {
    cursor: pointer;
    padding: 10px;
  }

  .hidden {
    visibility: hidden;
  }
</style>

<script lang="ts">
  import {SvgLeftAngleBracket, SvgRightAngleBracket} from '../../../utils/Icon';

  export let direction: 'left' | 'right';
  export let hidden: boolean;
  export let onClick: () => void;
</script>

<div class="navigation-button" class:hidden on:click={onClick}>
  {#if direction === 'left'}
    <SvgLeftAngleBracket />
  {:else}
    <SvgRightAngleBracket />
  {/if}
</div>

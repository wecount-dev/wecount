<style lang="postcss">
  img {
    border-radius: 24px;
    width: 48px;
    height: 48px;
    background-color: var(--light);
    object-fit: cover;
  }
</style>

<script lang="ts">
  import {SvgNoProfile} from '../utils/icons';

  export let alt = 'Image';
  export let src: string;
  export let style: string | undefined = undefined;
</script>

{#if src}
  <img src={src} alt={alt} style={style} />
{:else}
  <img src={SvgNoProfile} alt="logo" />
{/if}

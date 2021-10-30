<style lang="postcss">
  img {
    border-radius: 24px;
    width: 48px;
    height: 48px;
    object-fit: cover;
  }
</style>

<script lang="ts">
  import {SvgNoProfile} from '../../utils/Icon';

  export let alt = 'Image';
  export let src: string;
  export let style: string | undefined = undefined;
</script>

{#if src}
  <img src={src} alt={alt} style={style} />
{:else}
  <SvgNoProfile />
{/if}

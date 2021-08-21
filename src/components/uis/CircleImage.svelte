<style lang="postcss">
  img {
    border-radius: 50%;
    width: 48px;
    height: 48px;
    object-fit: cover;
  }
</style>

<script lang="ts">
  export let alt = 'Image';
  export let src: string;
  export let style: string | undefined = undefined;
</script>

<img src={src} alt={alt} style={style} />

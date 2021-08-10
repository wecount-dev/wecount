<style lang="postcss">
  .icon {
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
  }
</style>

<script lang="ts">
  import SelectIconButton from './SelectIconButton.svelte';

  export let imageUrl: string;
  export let style: string | undefined = undefined;
  export let isSelected = false;
  export let selectCommunity: (id: string) => void;
</script>

<SelectIconButton
  selectValue={imageUrl}
  style={style}
  isSelected={isSelected}
  onSelect={selectCommunity}
>
  <img class="icon" src={imageUrl} alt="icon" style="icon" />
</SelectIconButton>

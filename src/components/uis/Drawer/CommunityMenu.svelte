<style lang="postcss">
  .icon {
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
  }
</style>

<script lang="ts">
  import SelectIconButton from './SelectIconButton.svelte';

  export let id: string;
  export let imageUrl: string;
  export let isSelected = false;
  export let selectCommunity: (id: string) => void;
</script>

<SelectIconButton
  selectValue={id}
  isSelected={isSelected}
  onSelect={selectCommunity}
>
  <img class="icon" src={imageUrl} alt="icon" style="icon" />
</SelectIconButton>
